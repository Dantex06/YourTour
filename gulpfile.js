const gulp = require('gulp');
const htmlInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload')
const clean = require('gulp-clean');
const sourceMaps = require('gulp-sourcemaps');
const fs = require('fs');

const htmlIncludeSettings = {
    prefix: '@@',
    basepath: '@file'
}
const serverOptions = {
    livereload: true,
    open: true
}

gulp.task('clean', function(done) {
    if(fs.existsSync('./dist/')){
        return gulp.src('./dist/', {read: false}).pipe(clean());
    }
    done();
})

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(htmlInclude(htmlIncludeSettings))
        .pipe(gulp.dest('./dist/'));
})

gulp.task('sass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('images', function() {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets/'));
})

gulp.task('server', function() {
    return gulp.src('./dist/').pipe(server(serverOptions))
})

gulp.task('watch', function(){
    gulp.watch('./src/**/*.html', gulp.series('html'));
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/assets/**/*', gulp.series('images'));
})

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('html', 'sass', 'images'),
    gulp.parallel('server', 'watch')
));