import * as THREE from 'three';

/** A small, explorable research pavilion. Content and navigation live in the HTML UI. */
export async function createLab({ canvas, onNearby = () => {}, onZone = () => {}, onReady = () => {} }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#071314');
  scene.fog = new THREE.Fog('#071314', 45, 90);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 110);
  const materials = new Set();
  const geometries = new Set();
  const textures = new Set();
  const obstacles = [];
  const animated = [];
  let disposed = false;
  let entered = false;
  let paused = false;
  let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastNearby = '';
  let lastZone = '';
  let lastTime = 0;
  let elapsed = 0;
  let frame;

  const material = (color, options = {}) => {
    const value = new THREE.MeshStandardMaterial({ color, roughness: 0.65, metalness: 0.25, ...options });
    materials.add(value);
    return value;
  };
  const m = {
    foundation: material('#132225', { roughness: 0.6 }),
    floor: material('#233b3c', { metalness: 0.5, roughness: 0.56 }),
    floorAlt: material('#294242', { metalness: 0.45, roughness: 0.58 }),
    frame: material('#526663', { metalness: 0.78, roughness: 0.3 }),
    silver: material('#9aaca5', { metalness: 0.65, roughness: 0.3 }),
    dark: material('#111e22', { metalness: 0.35 }),
    charcoal: material('#28393b'),
    white: material('#d5dfd2', { roughness: 0.4 }),
    teal: material('#89f5d1', { emissive: '#54e6b5', emissiveIntensity: 2.4, toneMapped: false }),
    softTeal: material('#477b6b', { emissive: '#317a66', emissiveIntensity: 0.65 }),
    amber: material('#ffc881', { emissive: '#e9ab54', emissiveIntensity: 1.7, toneMapped: false }),
    blue: material('#98d8ed', { emissive: '#61adc6', emissiveIntensity: 1.4, toneMapped: false }),
    glass: material('#77c9ac', { transparent: true, opacity: 0.13, metalness: 0.6, roughness: 0.1, depthWrite: false, side: THREE.DoubleSide }),
  };
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  geometries.add(boxGeometry);
  function mesh(geometry, mat, x, y, z, parent = scene) {
    geometries.add(geometry);
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(x, y, z);
    object.castShadow = !mat.transparent && mat !== m.teal;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  }
  function box(x, y, z, w, h, d, mat, parent = scene) {
    const object = mesh(boxGeometry, mat, x, y, z, parent);
    object.scale.set(w, h, d);
    return object;
  }
  function cylinder(x, y, z, radius, height, mat, parent = scene, sides = 48) {
    return mesh(new THREE.CylinderGeometry(radius, radius, height, sides), mat, x, y, z, parent);
  }
  function obstacle(x, z, w, d, height = 3) {
    obstacles.push(new THREE.Box3(new THREE.Vector3(x - w / 2, 0, z - d / 2), new THREE.Vector3(x + w / 2, height, z + d / 2)));
  }
  function textPlane(text, x, y, z, width, color = '#a6c7bb', parent = scene, height = 0.4) {
    const label = document.createElement('canvas');
    label.width = 1024;
    label.height = 128;
    const context = label.getContext('2d');
    context.clearRect(0, 0, label.width, label.height);
    context.font = '500 55px ui-monospace, monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = color;
    context.fillText(text, 512, 64);
    const texture = new THREE.CanvasTexture(label);
    texture.colorSpace = THREE.SRGBColorSpace;
    textures.add(texture);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    materials.add(mat);
    return mesh(new THREE.PlaneGeometry(width, height), mat, x, y, z, parent);
  }

  // Broad studio lighting keeps architecture readable without postprocessing.
  scene.add(new THREE.HemisphereLight('#cceee1', '#11252c', 2.4));
  const keyLight = new THREE.DirectionalLight('#fff3d9', 3.6);
  keyLight.position.set(6, 19, 11);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.camera.left = -20;
  keyLight.shadow.camera.right = 20;
  keyLight.shadow.camera.top = 18;
  keyLight.shadow.camera.bottom = -18;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 50;
  keyLight.shadow.normalBias = 0.035;
  keyLight.shadow.bias = -0.00015;
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight('#5cb99d', 1.5);
  fillLight.position.set(-10, 8, -8);
  scene.add(fillLight);
  const coreLight = new THREE.PointLight('#77ffd1', 36, 12, 2);
  coreLight.position.set(1, 3, -0.5);
  scene.add(coreLight);

  // A floating architectural cutaway with a continuous, traversable floor.
  box(0, -0.52, 0, 27, 1, 23, m.foundation);
  box(0, -0.06, 0, 26.8, 0.1, 22.8, m.frame);
  const tileGeo = new THREE.BoxGeometry(1.96, 0.07, 1.96);
  geometries.add(tileGeo);
  const tiles = new THREE.InstancedMesh(tileGeo, m.floor, 143);
  const matrix = new THREE.Matrix4();
  let tile = 0;
  for (let x = -12; x <= 12; x += 2) {
    for (let z = -10; z <= 10; z += 2) {
      matrix.makeTranslation(x, 0.015, z);
      tiles.setMatrixAt(tile, matrix);
      tiles.setColorAt(tile++, new THREE.Color((x + z) % 4 === 0 ? '#c4d4cd' : '#97b5ac'));
    }
  }
  tiles.receiveShadow = true;
  scene.add(tiles);
  box(0, -0.3, 11.53, 26.5, 0.05, 0.035, m.softTeal);
  box(13.52, -0.3, 0, 0.035, 0.05, 22.7, m.softTeal);

  // Rear walls and exposed structural ribs preserve sightlines from the entry.
  box(0, 1.6, -10.8, 26.6, 3.2, 0.24, m.charcoal);
  obstacle(0, -10.8, 26.6, 0.24, 3.2);
  box(-13, 1.6, -1, 0.24, 3.2, 19.6, m.charcoal);
  obstacle(-13, -1, 0.24, 19.6, 3.2);
  box(0, 3.24, -10.8, 26.7, 0.12, 0.35, m.silver);
  box(-13, 3.24, -1, 0.35, 0.12, 19.7, m.silver);
  box(0, 0.22, -10.62, 26, 0.035, 0.04, m.teal);
  for (let x = -12; x <= 12; x += 3) {
    box(x, 1.58, -10.58, 0.045, 2.95, 0.045, m.frame);
    box(x, 3.8, -9.4, 0.15, 1.2, 0.15, m.frame);
  }
  box(0, 4.38, -9.4, 25.8, 0.18, 0.3, m.frame);
  box(0, 4.27, -9.36, 24, 0.028, 0.1, m.white);
  // Small rails define open sides, keeping the showroom visually airy.
  for (const z of [-8, -4, 0, 4, 8]) {
    box(13, 0.45, z, 0.09, 0.9, 0.09, m.frame);
  }
  box(13, 0.9, 0, 0.075, 0.06, 18, m.silver);
  for (const x of [-11, -7, 7, 11]) box(x, 0.45, 10.8, 0.09, 0.9, 0.09, m.frame);
  box(-9, 0.9, 10.8, 7, 0.06, 0.07, m.silver);
  box(9, 0.9, 10.8, 7, 0.06, 0.07, m.silver);

  // Inlaid circulation lines connect real content areas.
  box(1, 0.061, 5.8, 0.045, 0.014, 7.8, m.softTeal);
  box(-4.1, 0.061, -3.5, 10.2, 0.014, 0.045, m.softTeal);
  box(7, 0.061, -3.5, 5.8, 0.014, 0.045, m.softTeal);
  box(10, 0.061, 0.3, 0.045, 0.014, 7.6, m.softTeal);
  for (let z = 4; z <= 9; z += 1.2) box(1, 0.07, z, 0.38, 0.015, 0.055, m.teal);
  const floorName = textPlane('JAYLL  /  AI RESEARCH LAB', 2.5, 0.085, 9.9, 6.1, '#718e84', scene, 0.52);
  floorName.rotation.x = -Math.PI / 2;

  // Core: nested gimbals, a faceted compute volume, and a machined circular plinth.
  const core = new THREE.Group();
  core.position.set(1, 0, -0.5);
  scene.add(core);
  cylinder(0, 0.16, 0, 2.25, 0.22, m.dark, core, 80);
  cylinder(0, 0.3, 0, 2.08, 0.08, m.frame, core, 80);
  cylinder(0, 0.36, 0, 1.86, 0.035, m.charcoal, core, 80);
  for (let index = 0; index < 32; index++) {
    const angle = index / 32 * Math.PI * 2;
    const tick = box(Math.cos(angle) * 1.96, 0.355, Math.sin(angle) * 1.96, 0.035, 0.018, 0.16, index % 4 === 0 ? m.teal : m.silver, core);
    tick.rotation.y = -angle;
  }
  const plinthRing = mesh(new THREE.TorusGeometry(2.13, 0.022, 8, 96), m.teal, 0, 0.3, 0, core);
  plinthRing.rotation.x = Math.PI / 2;
  const suspended = new THREE.Group();
  suspended.position.y = 2.75;
  core.add(suspended);
  const orb = mesh(new THREE.IcosahedronGeometry(0.82, 1), material('#65dfb6', { emissive: '#4cae8a', emissiveIntensity: 0.7, metalness: 0.66, roughness: 0.2 }), 0, 0, 0, suspended);
  const orbEdges = new THREE.LineSegments(new THREE.EdgesGeometry(orb.geometry), new THREE.LineBasicMaterial({ color: '#b5ffe2', transparent: true, opacity: 0.75 }));
  geometries.add(orbEdges.geometry);
  materials.add(orbEdges.material);
  orb.add(orbEdges);
  const halo = mesh(new THREE.IcosahedronGeometry(1.04, 1), m.glass, 0, 0, 0, suspended);
  const rings = [];
  for (let index = 0; index < 3; index++) {
    const ring = new THREE.Group();
    suspended.add(ring);
    ring.rotation.set(index * 0.85 + 0.7, index * 1.1, 0.4);
    mesh(new THREE.TorusGeometry(1.32 + index * 0.27, 0.025, 8, 88), index === 1 ? m.silver : m.teal, 0, 0, 0, ring);
    const node = mesh(new THREE.SphereGeometry(0.075, 10, 8), m.white, 1.32 + index * 0.27, 0, 0, ring);
    node.castShadow = false;
    rings.push(ring);
  }
  const lightColumn = mesh(new THREE.CylinderGeometry(0.5, 1.05, 2.3, 40, 1, true), material('#7de0b7', { transparent: true, opacity: 0.045, emissive: '#63cfa2', emissiveIntensity: 1, depthWrite: false, side: THREE.DoubleSide }), 0, 1.52, 0, core);
  lightColumn.castShadow = false;
  textPlane('AI CORE', 0, 0.6, 2.16, 1.55, '#b4e4d1', core, 0.27);
  obstacle(1, -0.5, 4.4, 4.4, 1);
  animated.push((time) => {
    suspended.position.y = 2.75 + (reducedMotion ? 0 : Math.sin(time * 0.6) * 0.09);
    orb.rotation.y = time * 0.11;
    halo.rotation.y = -time * 0.06;
    rings.forEach((ring, index) => { ring.rotation.z = 0.4 + time * (index % 2 ? -0.085 : 0.07); });
  });

  function screenTexture(type) {
    const surface = document.createElement('canvas');
    surface.width = 768;
    surface.height = 480;
    const ctx = surface.getContext('2d');
    ctx.fillStyle = '#081c1b';
    ctx.fillRect(0, 0, 768, 480);
    ctx.fillStyle = '#8ef0c8';
    ctx.font = '21px monospace';
    ctx.fillText(type.toUpperCase(), 38, 48);
    ctx.fillStyle = '#28463e';
    ctx.fillRect(38, 67, 692, 2);
    if (type === 'agent systems') {
      const nodes = [[135, 235], [375, 145], [375, 325], [625, 235]];
      ctx.strokeStyle = '#458c72';
      ctx.lineWidth = 2;
      [[0, 1], [0, 2], [1, 3], [2, 3]].forEach(([a, b]) => {
        ctx.beginPath(); ctx.moveTo(...nodes[a]); ctx.lineTo(...nodes[b]); ctx.stroke();
      });
      nodes.forEach(([x, y], i) => {
        ctx.fillStyle = '#163e32'; ctx.fillRect(x - 70, y - 34, 140, 68);
        ctx.strokeStyle = '#7edfba'; ctx.strokeRect(x - 70, y - 34, 140, 68);
        ctx.fillStyle = '#d2efe2'; ctx.font = '15px monospace'; ctx.fillText(['INPUT', 'PLANNER', 'TOOLS', 'RESPONSE'][i], x - 52, y + 5);
      });
    } else if (type === 'document intelligence') {
      ctx.fillStyle = '#c6d8ca'; ctx.fillRect(47, 111, 188, 270);
      for (let i = 0; i < 10; i++) { ctx.fillStyle = '#567067'; ctx.fillRect(68, 143 + i * 20, i % 3 ? 141 : 95, 4); }
      for (let i = 0; i < 7; i++) {
        ctx.fillStyle = i % 2 ? '#183e33' : '#225043'; ctx.fillRect(293, 119 + i * 36, 390, 27);
        ctx.fillStyle = '#85c8af'; ctx.fillRect(308, 128 + i * 36, 40 + i * 22, 6);
      }
    } else {
      for (let i = 0; i < 11; i++) {
        ctx.fillStyle = i % 3 ? '#629b84' : '#b0efce';
        ctx.fillRect(42 + (i % 3) * 17, 112 + i * 24, 145 + ((i * 53) % 410), 5);
      }
    }
    ctx.fillStyle = '#7b9c8c'; ctx.font = '14px monospace'; ctx.fillText('JAYLL / RESEARCH WORKSPACE', 38, 446);
    const tex = new THREE.CanvasTexture(surface);
    tex.colorSpace = THREE.SRGBColorSpace;
    textures.add(tex);
    return tex;
  }

  function monitor(x, y, z, width, type, parent = scene) {
    box(x, y, z, width + 0.13, width * 0.625 + 0.13, 0.15, m.dark, parent);
    const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture(type), toneMapped: false });
    materials.add(screenMaterial);
    mesh(new THREE.PlaneGeometry(width, width * 0.625), screenMaterial, x, y, z + 0.082, parent);
    box(x, y - width * 0.39, z, 0.12, 0.32, 0.12, m.frame, parent);
    box(x, y - width * 0.47, z + 0.1, 0.55, 0.04, 0.36, m.frame, parent);
  }
  function desk(x, z, type, title, number, accent = m.teal) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    scene.add(group);
    box(0, 1, 0, 4.3, 0.16, 1.7, m.frame, group);
    box(0, 1.095, 0, 4.2, 0.025, 1.61, m.dark, group);
    box(-1.7, 0.48, 0, 0.12, 0.96, 1.4, m.silver, group);
    box(1.7, 0.48, 0, 0.12, 0.96, 1.4, m.silver, group);
    box(0, 0.7, -0.6, 3.4, 0.08, 0.09, m.charcoal, group);
    box(0, 0.93, 0.87, 3.8, 0.027, 0.02, accent, group);
    monitor(-0.55, 2.0, -0.45, 2.1, type, group);
    const keyboard = box(-0.5, 1.13, 0.35, 1.08, 0.055, 0.36, m.charcoal, group);
    keyboard.rotation.x = 0.06;
    for (let row = 0; row < 3; row++) {
      for (let key = 0; key < 10; key++) box(-0.95 + key * 0.1, 1.164, 0.22 + row * 0.1, 0.07, 0.015, 0.06, m.frame, group);
    }
    box(0.32, 1.14, 0.37, 0.15, 0.07, 0.23, m.silver, group);
    box(1.45, 1.39, -0.25, 0.45, 0.58, 0.55, m.charcoal, group);
    box(1.45, 1.45, 0.031, 0.26, 0.025, 0.015, accent, group);
    textPlane(number, -1.65, 0.61, 0.72, 0.7, '#9bbfb0', group, 0.24);
    textPlane(title, 0, 3.33, -0.4, 4.8, '#b5d2c2', group, 0.38);
    // Stool tucked slightly to one side leaves a clear route to the interaction point.
    cylinder(1.25, 0.71, 1.7, 0.36, 0.13, m.dark, group, 24);
    cylinder(1.25, 0.36, 1.7, 0.055, 0.65, m.silver, group, 12);
    cylinder(1.25, 0.09, 1.7, 0.29, 0.06, m.frame, group, 24);
    obstacle(x, z, 4.35, 1.78, 2.85);
    return group;
  }

  desk(-6.2, -7.2, 'agent systems', '01 / AGENT SYSTEMS', '01');
  desk(5.1, -7.2, 'document intelligence', '02 / DOCUMENT AI', '02', m.blue);

  // Realistic server bays: repeated rack units, inset ventilation, cable spines.
  function server(x, z) {
    box(x, 1.52, z, 1.25, 3, 0.95, m.dark);
    box(x - 0.61, 1.52, z + 0.49, 0.06, 2.95, 0.08, m.frame);
    box(x + 0.61, 1.52, z + 0.49, 0.06, 2.95, 0.08, m.frame);
    for (let row = 0; row < 10; row++) {
      box(x, 0.25 + row * 0.265, z + 0.49, 1.08, 0.2, 0.06, m.charcoal);
      box(x - 0.43, 0.25 + row * 0.265, z + 0.53, 0.032, 0.032, 0.015, row % 4 ? m.softTeal : m.teal);
      box(x - 0.32, 0.25 + row * 0.265, z + 0.53, 0.035, 0.018, 0.015, m.amber);
      box(x + 0.12, 0.25 + row * 0.265, z + 0.53, 0.49, 0.028, 0.015, m.dark);
    }
    box(x, 2.96, z + 0.52, 0.65, 0.033, 0.014, m.softTeal);
    obstacle(x, z, 1.3, 1.05, 3.05);
  }
  server(-10.85, -8.8);
  server(-9.35, -8.8);
  server(10.65, -8.8);
  server(9.15, -8.8);

  // Gallery uses the existing portfolio's image assets.
  const gallery = new THREE.Group();
  gallery.position.set(10.8, 0, 1.0);
  gallery.rotation.y = -Math.PI / 2;
  scene.add(gallery);
  box(0, 1.8, -0.04, 6.6, 3.6, 0.18, m.charcoal, gallery);
  box(0, 3.62, 0.02, 6.65, 0.06, 0.22, m.silver, gallery);
  textPlane('03 / GENERATIVE GALLERY', 0, 3.15, 0.08, 5.2, '#bdd7c7', gallery, 0.34);
  const imageNames = ['cyborg', 'cinematic-autumn-portrait', 'shot-with-the-robot'];
  const loader = new THREE.TextureLoader();
  imageNames.forEach((name, index) => {
    const x = (index - 1) * 2.05;
    box(x, 1.85, 0.1, 1.74, 2.35, 0.09, m.dark, gallery);
    const artMaterial = new THREE.MeshBasicMaterial({ color: '#668b7f', toneMapped: false });
    materials.add(artMaterial);
    mesh(new THREE.PlaneGeometry(1.59, 2.2), artMaterial, x, 1.85, 0.153, gallery);
    loader.load(`${import.meta.env.BASE_URL}prompts/images/optimized/${name}.webp`, (texture) => {
      if (disposed) { texture.dispose(); return; }
      texture.colorSpace = THREE.SRGBColorSpace;
      const aspect = texture.image.width / texture.image.height;
      const frameAspect = 1.59 / 2.2;
      if (aspect > frameAspect) { texture.repeat.x = frameAspect / aspect; texture.offset.x = (1 - texture.repeat.x) / 2; }
      else { texture.repeat.y = aspect / frameAspect; texture.offset.y = (1 - texture.repeat.y) / 2; }
      textures.add(texture);
      artMaterial.map = texture;
      artMaterial.color.set('#ffffff');
      artMaterial.needsUpdate = true;
    }, undefined, () => {});
    textPlane(['SYNTHETIC', 'CINEMATIC', 'COEXISTENCE'][index], x, 0.52, 0.1, 1.7, '#789c8a', gallery, 0.15);
  });
  box(-2.5, 0.22, 0, 0.12, 0.44, 0.8, m.frame, gallery);
  box(2.5, 0.22, 0, 0.12, 0.44, 0.8, m.frame, gallery);
  obstacle(10.8, 1, 0.6, 6.8, 3.7);

  // Reception and a nod to the original terminal portfolio.
  const reception = new THREE.Group();
  reception.position.set(-8.3, 0, 3.6);
  scene.add(reception);
  box(0, 0.65, 0, 3.5, 1.3, 1.4, m.charcoal, reception);
  box(0, 1.33, 0, 3.65, 0.12, 1.55, m.silver, reception);
  box(0, 0.99, 0.72, 3.2, 0.027, 0.02, m.teal, reception);
  textPlane('JAYLL', 0, 0.63, 0.725, 1.8, '#dce8d7', reception, 0.31);
  textPlane('RESEARCHER PROFILE', 0, 2.6, 0, 4.3, '#9bbdab', reception, 0.35);
  monitor(-0.7, 1.98, -0.25, 1.18, 'researcher profile', reception);
  cylinder(1.08, 1.55, -0.22, 0.16, 0.3, m.white, reception, 24);
  obstacle(-8.3, 3.6, 3.65, 1.65, 2.5);
  const terminal = new THREE.Group();
  terminal.position.set(-10.65, 0, -2.3);
  terminal.rotation.y = 0.5;
  scene.add(terminal);
  box(0, 0.65, 0, 1.55, 1.3, 0.95, m.charcoal, terminal);
  box(0, 1.4, -0.05, 1.75, 1.04, 0.66, m.frame, terminal);
  monitor(0, 1.4, 0.3, 1.38, 'legacy console', terminal);
  box(0, 0.98, 0.66, 1.58, 0.12, 0.58, m.dark, terminal);
  textPlane('> LEGACY CONSOLE', 0, 2.38, 0.35, 2.8, '#8de2b9', terminal, 0.28);
  obstacle(-10.65, -2.3, 2.3, 2, 2.4);

  // Restrained plants soften the lab without introducing heavy imported assets.
  function plant(x, z) {
    cylinder(x, 0.27, z, 0.3, 0.5, m.charcoal, scene, 12);
    const leafMat = material('#356b4c', { roughness: 0.88, metalness: 0 });
    for (let i = 0; i < 6; i++) {
      const angle = i * 2.4;
      const leaf = mesh(new THREE.SphereGeometry(1, 8, 6), leafMat, x + Math.cos(angle) * 0.16, 0.8 + (i % 3) * 0.18, z + Math.sin(angle) * 0.16);
      leaf.scale.set(0.12, 0.6, 0.2);
      leaf.rotation.set(Math.sin(angle) * 0.35, angle, Math.cos(angle) * 0.45);
    }
  }
  plant(-11.9, 7.7);
  plant(11.8, 7.5);
  plant(-2.5, -9.6);

  // Articulated, faceless researcher in a pale utility jacket.
  const player = new THREE.Group();
  player.position.set(1, 0.08, 6);
  player.rotation.y = Math.PI;
  scene.add(player);
  const body = new THREE.Group();
  player.add(body);
  const coat = material('#ced8c5', { roughness: 0.92, metalness: 0 });
  const trousers = material('#273b3a', { roughness: 0.92, metalness: 0 });
  const skin = material('#b7896c', { roughness: 0.85, metalness: 0 });
  const hair = material('#242c2b', { roughness: 0.98, metalness: 0 });
  const torso = mesh(new THREE.CapsuleGeometry(0.22, 0.34, 4, 8), coat, 0, 1.16, 0, body);
  torso.scale.z = 0.8;
  box(0, 1.23, -0.2, 0.29, 0.4, 0.12, m.charcoal, body);
  box(0, 1.25, -0.269, 0.07, 0.08, 0.015, m.softTeal, body);
  mesh(new THREE.SphereGeometry(0.17, 14, 12), skin, 0, 1.65, 0.018, body);
  const hairMesh = mesh(new THREE.SphereGeometry(0.177, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.6), hair, 0, 1.7, 0, body);
  hairMesh.rotation.x = -0.13;
  box(0, 1.65, 0.16, 0.26, 0.054, 0.024, m.dark, body);
  const limbs = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.28, 1.35, 0);
    body.add(arm);
    mesh(new THREE.CapsuleGeometry(0.078, 0.35, 4, 8), coat, side * 0.027, -0.21, 0, arm);
    mesh(new THREE.SphereGeometry(0.073, 8, 8), skin, side * 0.034, -0.48, 0, arm);
    const leg = new THREE.Group();
    leg.position.set(side * 0.12, 0.89, 0);
    body.add(leg);
    mesh(new THREE.CapsuleGeometry(0.093, 0.55, 4, 8), trousers, 0, -0.32, 0, leg);
    box(0, -0.73, 0.06, 0.19, 0.12, 0.3, m.dark, leg);
    limbs.push({ arm, leg, side });
  }
  const shadow = mesh(new THREE.CircleGeometry(0.45, 24), new THREE.MeshBasicMaterial({ color: '#071311', transparent: true, opacity: 0.3, depthWrite: false }), 0, 0.007, 0, player);
  materials.add(shadow.material);
  shadow.rotation.x = -Math.PI / 2;

  const points = [
    { id: 'calendar', label: 'Calendar Chatbot', x: -6.5, z: -5.35, radius: 3.3 },
    { id: 'jobfit', label: 'JobFit · Resume Ranking', x: 3.85, z: -5.35, radius: 2.45 },
    { id: 'table2html', label: 'Table2HTML', x: 6.8, z: -5.35, radius: 2.45 },
    { id: 'gallery', label: 'Generative Gallery', x: 8.7, z: 1, radius: 3.4 },
    { id: 'profile', label: 'Researcher Profile', x: -8.3, z: 5.2, radius: 3 },
    { id: 'terminal', label: 'Legacy Console', x: -9.4, z: -1.3, radius: 2.5 },
    { id: 'core', label: 'AI Core · Research Overview', x: 1, z: -0.5, radius: 4.3 },
  ];
  // Each station has its own material so proximity never changes other stations.
  const stationMarkers = new Map();
  for (const point of points) {
    const radius = point.id === 'core' ? 2.38 : 0.48;
    const markerMaterial = new THREE.MeshBasicMaterial({ color: '#90f5c9', transparent: true, opacity: 0.16, depthWrite: false, toneMapped: false });
    materials.add(markerMaterial);
    const marker = mesh(new THREE.RingGeometry(radius - 0.025, radius, 48), markerMaterial, point.x, 0.084, point.z);
    marker.rotation.x = -Math.PI / 2;
    marker.castShadow = false;
    stationMarkers.set(point.id, marker);
  }

  const keys = new Set();
  let yaw = 0;
  let pitch = 0.36;
  let dragging = false;
  let dragX = 0;
  let dragY = 0;
  const walkDirection = new THREE.Vector3();
  const cameraTarget = new THREE.Vector3();
  const desiredCamera = new THREE.Vector3();
  const cameraRay = new THREE.Ray();
  const hit = new THREE.Vector3();
  const lookTarget = new THREE.Vector3(-5.7, 0.2, 3.4);
  camera.position.set(24, 22, 29);
  camera.lookAt(lookTarget);

  function validPosition(x, z) {
    const radius = 0.32;
    if (x < -12.45 || x > 12.45 || z < -10.15 || z > 10.15) return false;
    return !obstacles.some((bounds) => x > bounds.min.x - radius && x < bounds.max.x + radius && z > bounds.min.z - radius && z < bounds.max.z + radius);
  }
  function keydown(event) {
    if (!entered || paused || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight'].includes(event.code)) {
      event.preventDefault(); keys.add(event.code);
    }
  }
  const keyup = (event) => keys.delete(event.code);
  const clearKeys = () => { keys.clear(); dragging = false; };
  function pointerdown(event) {
    if (!entered || paused || event.button !== 0) return;
    dragging = true; dragX = event.clientX; dragY = event.clientY;
    canvas.setPointerCapture?.(event.pointerId);
  }
  function pointermove(event) {
    if (!dragging || paused) return;
    yaw -= (event.clientX - dragX) * 0.004;
    pitch = THREE.MathUtils.clamp(pitch + (event.clientY - dragY) * 0.003, 0.12, 0.85);
    dragX = event.clientX; dragY = event.clientY;
  }
  function pointerup(event) {
    dragging = false;
    if (canvas.hasPointerCapture?.(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  }
  const visibility = () => { clearKeys(); lastTime = 0; };
  window.addEventListener('keydown', keydown);
  window.addEventListener('keyup', keyup);
  window.addEventListener('blur', clearKeys);
  document.addEventListener('visibilitychange', visibility);
  canvas.addEventListener('pointerdown', pointerdown);
  canvas.addEventListener('pointermove', pointermove);
  canvas.addEventListener('pointerup', pointerup);
  canvas.addEventListener('pointercancel', pointerup);

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = entered ? 52 : (width < 700 ? 58 : 42);
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();

  function updateNearby() {
    let closest = null;
    let distance = Infinity;
    for (const point of points) {
      const d = Math.hypot(player.position.x - point.x, player.position.z - point.z);
      if (d < point.radius && d < distance) { closest = point; distance = d; }
    }
    const id = closest?.id || '';
    if (id !== lastNearby) {
      lastNearby = id;
      for (const [stationId, marker] of stationMarkers) marker.material.opacity = stationId === id ? 0.95 : 0.16;
      onNearby(closest ? { id, label: closest.label } : null);
    }
    const zone = player.position.z < -3.3 ? (player.position.x < -2 ? 'Agent Systems' : player.position.x > 2.8 ? 'Document Intelligence' : 'AI Core') : player.position.x > 6.5 ? 'Generative Gallery' : player.position.x < -5 ? 'Reception' : 'AI Core';
    if (zone !== lastZone) { lastZone = zone; onZone(zone); }
  }
  function animate(now) {
    if (disposed) return;
    frame = requestAnimationFrame(animate);
    if (document.hidden) return;
    const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60;
    lastTime = now;
    if (!paused && !reducedMotion) elapsed += delta;
    animated.forEach((update) => update(elapsed));
    if (entered) {
      let moving = false;
      let running = false;
      if (!paused) {
        const horizontal = Number(keys.has('KeyD') || keys.has('ArrowRight')) - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
        const vertical = Number(keys.has('KeyS') || keys.has('ArrowDown')) - Number(keys.has('KeyW') || keys.has('ArrowUp'));
        moving = horizontal !== 0 || vertical !== 0;
        running = keys.has('ShiftLeft') || keys.has('ShiftRight');
        if (moving) {
          walkDirection.set(horizontal, 0, vertical).normalize().applyAxisAngle(THREE.Object3D.DEFAULT_UP, yaw);
          const speed = running ? 6.4 : 3.5;
          const nextX = player.position.x + walkDirection.x * speed * delta;
          const nextZ = player.position.z + walkDirection.z * speed * delta;
          if (validPosition(nextX, player.position.z)) player.position.x = nextX;
          if (validPosition(player.position.x, nextZ)) player.position.z = nextZ;
          const desiredAngle = Math.atan2(walkDirection.x, walkDirection.z);
          player.rotation.y += Math.atan2(Math.sin(desiredAngle - player.rotation.y), Math.cos(desiredAngle - player.rotation.y)) * Math.min(delta * 14, 1);
        }
        updateNearby();
      }
      const gait = moving && !reducedMotion ? Math.sin(elapsed * (running ? 15 : 10)) * (running ? 0.72 : 0.48) : 0;
      limbs.forEach(({ arm, leg, side }) => {
        arm.rotation.x = THREE.MathUtils.damp(arm.rotation.x, gait * -side, 12, delta);
        leg.rotation.x = THREE.MathUtils.damp(leg.rotation.x, gait * side, 12, delta);
      });
      body.position.y = moving && !reducedMotion ? Math.abs(Math.sin(elapsed * (running ? 15 : 10))) * 0.045 : 0;
      cameraTarget.copy(player.position).add(new THREE.Vector3(0, 1.25, 0));
      const distance = 5.5;
      desiredCamera.set(Math.sin(yaw) * distance * Math.cos(pitch), 1.2 + Math.sin(pitch) * distance, Math.cos(yaw) * distance * Math.cos(pitch)).add(player.position);
      cameraRay.set(cameraTarget, desiredCamera.clone().sub(cameraTarget).normalize());
      let cameraDistance = desiredCamera.distanceTo(cameraTarget);
      for (const bounds of obstacles) {
        if (cameraRay.intersectBox(bounds, hit)) cameraDistance = Math.min(cameraDistance, Math.max(0.12, hit.distanceTo(cameraTarget) - 0.18));
      }
      desiredCamera.copy(cameraRay.direction).multiplyScalar(cameraDistance).add(cameraTarget);
      camera.position.lerp(desiredCamera, reducedMotion ? 1 : 1 - Math.exp(-delta * 5));
      // Smoothing follows a different path from the desired position; clamp it too.
      cameraRay.set(cameraTarget, hit.copy(camera.position).sub(cameraTarget).normalize());
      let interpolatedDistance = camera.position.distanceTo(cameraTarget);
      for (const bounds of obstacles) {
        if (cameraRay.intersectBox(bounds, hit)) interpolatedDistance = Math.min(interpolatedDistance, Math.max(0.12, hit.distanceTo(cameraTarget) - 0.18));
      }
      camera.position.copy(cameraRay.direction).multiplyScalar(interpolatedDistance).add(cameraTarget);
      lookTarget.lerp(cameraTarget, reducedMotion ? 1 : 1 - Math.exp(-delta * 7));
      camera.lookAt(lookTarget);
    }
    renderer.render(scene, camera);
  }
  frame = requestAnimationFrame(animate);
  onReady();

  return {
    enter() {
      entered = true; paused = false; clearKeys(); resize(); updateNearby();
    },
    pause(value = true) {
      paused = value; clearKeys();
    },
    setReducedMotion(value) { reducedMotion = Boolean(value); },
    setQuality(value) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, value === 'low' ? 1 : 1.6));
      renderer.shadowMap.enabled = value !== 'low';
      resize();
    },
    reset() {
      player.position.set(1, 0.08, 6); player.rotation.y = Math.PI;
      yaw = 0; pitch = 0.36; clearKeys(); updateNearby();
    },
    returnToEntrance() {
      entered = false; paused = false;
      player.position.set(1, 0.08, 6); player.rotation.y = Math.PI;
      body.position.y = 0;
      limbs.forEach(({ arm, leg }) => { arm.rotation.x = 0; leg.rotation.x = 0; });
      yaw = 0; pitch = 0.36; clearKeys();
      lastNearby = ''; lastZone = '';
      for (const marker of stationMarkers.values()) marker.material.opacity = 0.16;
      camera.position.set(24, 22, 29);
      lookTarget.set(-5.7, 0.2, 3.4);
      camera.lookAt(lookTarget);
      resize();
      onNearby(null);
    },
    /** Read-only snapshot for integration checks; never coupled to visible UI. */
    getStatus() {
      return { entered, paused, player: { x: player.position.x, z: player.position.z }, nearby: lastNearby || null, zone: lastZone, cameraDistance: camera.position.distanceTo(cameraTarget) };
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('keydown', keydown);
      window.removeEventListener('keyup', keyup);
      window.removeEventListener('blur', clearKeys);
      document.removeEventListener('visibilitychange', visibility);
      canvas.removeEventListener('pointerdown', pointerdown);
      canvas.removeEventListener('pointermove', pointermove);
      canvas.removeEventListener('pointerup', pointerup);
      canvas.removeEventListener('pointercancel', pointerup);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((value) => value.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();
      onNearby(null);
    },
  };
}
