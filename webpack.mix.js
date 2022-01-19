const mix = require('laravel-mix');

mix.setPublicPath('./public/bundled');
mix.js('src/app.js', 'app.js');
mix.copyDirectory('src/', 'public/not-bundled/');




