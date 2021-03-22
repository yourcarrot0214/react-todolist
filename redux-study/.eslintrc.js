module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "import"],
  ignorePatterns: ["/build"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unexpected-multiline": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
    },
    propWrapperFunctions: [{ property: "myFavoriteWrapper" }],
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
};
