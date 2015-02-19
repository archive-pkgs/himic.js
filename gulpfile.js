var gulp = require('gulp');
var browserSync = require('browser-sync');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');


// minify js files
gulp.task('uglify', function() {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});


// hinting and linting js files
gulp.task('js', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));

});

//init browser sync via live reloads
gulp.task('browser', function() {
    browserSync.init(['src/*.js', 'src/*.html'], {
        server: {
            baseDir: 'src'
        }
    });
});

// watch file changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['js']);

});

gulp.task('default', ['js', 'watch', 'browser']);