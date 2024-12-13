const mix = require("laravel-mix");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

let dev = process.env.NODE_ENV !== "production";

mix
  .js("assets/js/main.js", "build/js")
  .sass("assets/scss/main.scss", "build/css")
  .browserSync({
    port: 8082,
  })

  // sourcemaps if not production
  .sourceMaps(dev, "source-map");
