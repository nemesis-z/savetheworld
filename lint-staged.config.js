module.exports = {
  '**/*.{ts,tsx}': 'eslint',
  '*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
