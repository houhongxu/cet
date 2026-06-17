module.exports = {
  extends: ["taro/react"],
  ignorePatterns: ["dist/", "node_modules/"],
  rules: {
    "import/first": "off",
    "import/no-duplicates": "off",
    "jsx-quotes": "off",
    "react/jsx-boolean-value": "off",
    "react/react-in-jsx-scope": "off",
  },
};
