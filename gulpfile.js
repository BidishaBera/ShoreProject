var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

// gulp.task('run', ['sass', 'css']);

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
  gulp.watch('css', ['css']);
});
