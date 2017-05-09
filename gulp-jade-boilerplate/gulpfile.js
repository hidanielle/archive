var gulp          = require('gulp')
    browserSync   = require('browser-sync').create()


// To run other tasks AFTER folder has been cleaned out
gulp.task('default', function() {
  browserSync.init({
    server: "./dist"
  });
});

