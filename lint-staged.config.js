module.exports = {
  '**/*.{ts,tsx,js,jsx,cjs,mjs}': ['eslint --fix'],
  '**/*.{ts,tsx}': ['bash -c tsc --noEmit', 'markuplint'],
  '**/*.{ts,tsx,js,jsx,cjs,mjs,json,yml,yaml}': ['prettier --write'],
  '**/*': ['cspell'],
}
