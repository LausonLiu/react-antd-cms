const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader
  // disableEsLint,
  // addBundleVisualizer,
  // addWebpackAlias,
  // adjustWorkbox 
} = require("customize-cra");

const themes = require("./src/assets/themes.js");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
      javascriptEnabled: true,
      modifyVars: themes,
    }),
);