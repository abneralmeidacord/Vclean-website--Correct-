module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
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
