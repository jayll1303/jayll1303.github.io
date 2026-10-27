const iconFiles = import.meta.glob(['./project-icons/*.svg', './project-icons/*.png'], { eager: true, query: '?url', import: 'default' });

export function projectIconFor(id) {
  return iconFiles[`./project-icons/${id}.svg`] || iconFiles[`./project-icons/${id}.png`];
}
