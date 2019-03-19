const 
    gulp = require('gulp'),
    sass = require('gulp-sass');

function compilarSass(){
    return gulp
        .src('assets/css/sass/**/*.scss')
        .pipe(sass({
            //outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('assets/css/'));
}
gulp.task('sass', compilarSass);
gulp.task('watch', () =>{
    gulp.watch('assets/css/sass/**/*.scss', compilarSass);
});

gulp.task('default', gulp.parallel('sass','watch'));

