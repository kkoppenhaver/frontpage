var gulp         = require('gulp'),
    $            = require('gulp-load-plugins')();
 
var config = {
    css: {
        src: 'assets/scss/**/*.scss',
        dest: 'assets/css'
    },
};


gulp.task('css', function() {
    gulp.src( config.css.src )
        .pipe( $.plumber() )                   // error handling w/o breaking streams
        .pipe( $.sourcemaps.init() )           // generate sourcemaps 
        .pipe( $.sass() )                      // preprocess css
        .pipe( $.sourcemaps.write('./'))       // write sourcemaps
        .pipe( gulp.dest( config.css.dest ) ) // write compiles files
});
 
 
gulp.task('watch', ['css'],function() {
    // $.livereload.listen();      
    // gulp.watch( [config.css.src, config.js.src] ).on('change', $.livereload.changed);
    // gulp.watch( [config.css.src, config.js.src] ).on('change', $.livereload.changed);
    gulp.watch( config.css.src, ['css'] );
});
 
 
gulp.task('default', ['watch']);
