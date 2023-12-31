const mix = require("laravel-mix");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

let dev = process.env.NODE_ENV !== "production";

mix
  .js("assets/js/main.js", "build/js")
  .sass("assets/scss/main.scss", "build/css")
  .browserSync({
    proxy: "www.top2000.test",
    host: "www.top2000.test",
    open: "external",
    files: ["assets/**/*.js"],
    port: 8080,
  })

  // sourcemaps if not production
  .sourceMaps(dev, "source-map");
