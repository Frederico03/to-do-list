module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": 2,
    "react/state-in-constructor": 0,
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-extraneous-dependencies": 0,
    "no-unused-vars": 0,
    "no-useless-return": 0,
    "no-console": 0,
    "class-methods-use-this": 0,
    "react/no-unused-state": 0,
    "react/forbid-prop-types": 0,
  },
};
