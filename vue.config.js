// vue.config.js

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://chatty-api-python.herokuapp.com",
        ws: false,
        changeOrigin: true
      }
    }
  }
};