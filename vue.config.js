const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias.set("assets", resolve("src/assets"));
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "stylus",
      patterns: [
        path.resolve(__dirname, "src/assets/stylus/index.styl")
        // "E:\\jydemo\\my-music\\music-project\\src\\asserts\\stylus\\index.styl"
      ]
    }
  }
};
