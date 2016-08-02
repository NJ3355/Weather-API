var gulp = require('gulp');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions')) 
    .pipe(gulp.dest('css'))
}); 


gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  // Other watchers
});


