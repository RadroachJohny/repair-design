const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
 
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
  watch("./js/*.html").on('change', browserSync.reload);
}


function serveSass() {
return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("/css"))
    .pipe(browserSync.stream());
}

exports.serve = bs;

// gulp.task('minify-css', () => {
//   return gulp.src('styles/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(rename({suffix: ".min"}))
//     .pipe(gulp.dest('dist/css/'));
// });

