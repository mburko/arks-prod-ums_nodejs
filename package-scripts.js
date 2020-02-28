module.exports = {
  scripts: {
    test: 'test',
    start: {
      script: 'node -r esm src/server.js',
      description: 'Starts server'
    },
    build: {
      script: 'babel src -d lib',
      description: 'Build babel project',
    },
    lint: {
      default: 'eslint .',
      fix: {
        script: 'nps build "lint --fix"',
        description: 'Fix linting in current file',
      },
    },
  },
};
