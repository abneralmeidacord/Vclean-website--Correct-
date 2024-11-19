const path = require("path");

module.exports = function override(config, env) {
  const babelLoader = config.module.rules.find(
    (rule) => rule.loader && rule.loader.includes("babel-loader")
  );

  if (babelLoader) {
    babelLoader.exclude = /node_modules\/(?!(@expo\/vector-icons)\/).*/;
  }

  return config;
};
