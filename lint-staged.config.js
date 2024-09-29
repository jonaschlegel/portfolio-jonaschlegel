module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
  '**/*.ts?(x)': ['npm run check-types'],
  '*.{json,yaml}': ['prettier --write', 'git add'],
};
