const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
const uglify = require('gulp-uglify-es').default;
 
// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
}


function serveSass() {
return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

function minifyCSS() {
  return src('sass/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: ".min"}))
    .pipe(dest('./css/'));
}


function buildCSS(done) {
  src('sass/css/**/**.css').pipe(cleanCSS({compatibility: 'ie8'})).pipe(dest('dist/css/'));
  done();

}


function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
  .pipe(uglify())
  .pipe(dest('dist/js/'));  
  src('js/**.min.js').pipe(dest('dist/js/'));
  done();
}


function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

function php(done) {
  src('**.php')    
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer/'));
  done();
}

function fonts(done) {
  src('fonts/**/**')    
    .pipe(dest('dist/fonts/'));
  done();
}

function imagemin(done) {
  src('img/**/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({ key: 'nX7k8C9d6FxQGhJPrfFwLJ4N0SjTmrr7',}))
    .pipe(dest('dist/img/'));
  src('img/**/*.svg')
    .pipe(dest('dist/img/'));
  done();
}




exports.serve = bs;
exports.minify = minifyCSS;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);


// gulp.task('minify-css', () => {
//   return gulp.src('styles/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(rename({suffix: ".min"}))
//     .pipe(gulp.dest('dist/css/'));
// });


// function buildJS(done) {
//   src(['js/**.js', '!js/**.min.js'])
//   .pipe(minify({ext:{        
//         min:'.js'
//       }
//   }))
//   .pipe(dest('dist/js/'));
//   src('js/**.min.js').pipe(dest('dist/js/'));
//   done();
// }