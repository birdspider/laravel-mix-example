const mix = require('laravel-mix');


mix.webpackConfig({
  experiments: {
    outputModule: true,
  },
  output: {
    module: true,
    library: {
      type: 'module',
    },
  }
});

mix.setPublicPath('./public/bundled');
mix.js('src/app.js', 'app.js');
mix.copyDirectory('src/', 'public/not-bundled/');






