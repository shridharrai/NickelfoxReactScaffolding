const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function (config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@router": resolve("src/router"),
    "@pages": resolve("src/pages"),
    "@components": resolve("src/components"),
    "@helpers": resolve("src/helpers"),
    "@redux": resolve("src/redux"),
    "@network": resolve("src/network")
  });

  return config;
};
