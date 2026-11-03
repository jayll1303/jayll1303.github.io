import test from 'node:test';
import assert from 'node:assert/strict';
import { skillGroups, filterSkillGroups } from './skills-data.js';
import { projects } from './portfolio-data.js';

test('every capability has a unique identity and resolvable project evidence', () => {
  const skills = skillGroups.flatMap(group => group.items);
  assert.equal(new Set(skills.map(skill => skill.id)).size, skills.length);
  for (const skill of skills) {
    assert.ok(skill.description && skill.tools.length && skill.references.length);
    for (const reference of skill.references) {
      assert.ok(projects.some(project => project.id === reference.projectId), `${skill.id}: ${reference.projectId}`);
      assert.ok(reference.basis);
      if (reference.url) assert.ok(reference.url.startsWith('https://') || reference.url === '/resume/resume.pdf');
    }
  }
});

test('skills search includes technologies, project titles, work context and empty results', () => {
  const ids = query => filterSkillGroups(query, projects).flatMap(group => group.items.map(skill => skill.id));
  assert.ok(ids('  pYtOrCh  ').includes('speech'));
  assert.deepEqual(ids('Pondie'), ['extensions']);
  assert.ok(ids('FE Credit').includes('rag'));
  assert.ok(ids('Document AI').includes('image-processing'));
  assert.deepEqual(ids('no-such-technology'), []);
  assert.equal(ids(' ').length, skillGroups.flatMap(group => group.items).length);
});
