const proxy = require("http-proxy-middleware");

/**
 * 只能用js
 */
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "https://happysooner.com",
      secure: "false",
      changeOrigin: true
    })
  );
};
