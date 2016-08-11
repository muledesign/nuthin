var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('minify-css', function() {
  return gulp.src('./nuthin.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function (path) {
      path.extname = ".min.css"
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['minify-css']);
