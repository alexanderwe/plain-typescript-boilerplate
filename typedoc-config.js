module.exports = {
  src: ['./src'],
  target: 'ES5',
  readme: 'README.md',
  mode: 'file',
  theme: 'default',
  out: './docs',
  hideGenerator: true,
  exclude: '**/node_modules/**',
  tsconfig: 'tsconfig.json',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true
};
