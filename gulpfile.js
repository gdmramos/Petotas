var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var stylus = require('gulp-stylus');

// Servidor
gulp.task('browser-sync',function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./stylus/*.styl",['stylus']);
    gulp.watch('./css/template.css').on("change", reload);
    gulp.watch("./js/*.js").on("change", reload);
    gulp.watch("./index.html").on("change", reload);
});


//Watch todos os .styl
gulp.task('stylus', function(){
    return gulp.src('./stylus/template.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
})


gulp.task('default', ['browser-sync'], function(){
   console.log("Gulp Iniciado");
})
