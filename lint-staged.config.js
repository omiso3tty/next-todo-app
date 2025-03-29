module.exports = {
  '**/*.{ts,tsx,js,jsx,cjs,mjs}': ['eslint --fix'],
  '**/*.{tsx,jsx}': ['markuplint'],
  '**/*.{ts,tsx,js,jsx,cjs,mjs,json,yml,yaml}': ['prettier --write'],
}
