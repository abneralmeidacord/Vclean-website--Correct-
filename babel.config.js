module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "babel-preset-expo",
    "@babel/preset-flow",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
        },
      },
    ],
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-jsx",
  ],
};
