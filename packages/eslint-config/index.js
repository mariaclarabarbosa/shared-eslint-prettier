module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    "react-hooks",
    "import-helpers",
    "promise",
    "prettier",
  ],
  rules: {
    'no-undef': "off",
    'no-console': "warn",
    'prettier/prettier': ["error", {
      "semi": true,
      "singleQuote": true,
      "arrowParens": "avoid",
      "endOfLine": "auto",
      "trailingComma": "none",
      "printWidth": 80,
      "tabWidth": 2,
      "parser": "typescript"
    }],
    "react-hooks/exhaustive-deps": "warn",
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/anchor-is-valid': "warn",
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'import-helpers/order-imports': [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          "module",
          "/^shared/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: {"order": "asc", "ignoreCase": true}
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}