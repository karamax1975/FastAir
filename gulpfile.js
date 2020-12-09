const { src, dest, series, watch } = require('gulp');
const include = require('gulp-file-include');
const del = require('del');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create()



function html() {
  return src('src/**/**.html')
    .pipe(include({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('dist'))
}
function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist/css'))
}
function css() {
  return src('src/css/**.css')
    .pipe(sass())
    .pipe(dest('dist/css'))
}
function js() {
  return src('src/js/**.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('dist/js'))
}
const copy = () => {
  return src([
          'src/fonts/**/*',
          'src/img/**/*',
      ], {
          base: 'src'
      })
      .pipe(dest('dist'))
      .pipe(sync.stream({
          once: true
      }));
};

function clear() {
  return del('dist')
}




function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload);
  watch('src/template/**.html', series(html)).on('change', sync.reload);
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload);
  watch('src/js/**.js', series(js));
  watch('src/img/**.*', series(copy));
}

exports.build = series(clear, scss, css, js,  copy,  html)
exports.start = series(clear, scss,css, html, js, copy, serve)
exports.clear = clear

