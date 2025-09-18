import eslintConfigPrettier from "eslint-config-prettier/flat";
import oxlint from "eslint-plugin-oxlint";

const config = [
  ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
  eslintConfigPrettier,
];

export default config;
