module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
      "airbnb-base",
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      "no-console": 0,
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "always",
          "jsx": "always"
        }
      ],
      "no-underscore-dangle": [
        2,
        {
          "allow": ["__filename", "__dirname"]
        }
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'react/prop-types': 0,
      'eslint-disable no-plusplus': 0,
    },
  }