module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["plugin:vue/essential", "standard"],
  plugins: ["vue"],
  rules: {
    "no-console": "off",
    "vue/no-use-v-if-with-v-for": "off",
  },
};
