var gulp = require('gulp');
var sass = require('gulp-sass');

var originFile = 'scss/*.scss';
var destFile = 'css/';

gulp.task('sass', function()
{
    return gulp.src(originFile)
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(destFile))
});

gulp.task('watch', function()
{
    gulp.watch(originFile, ['sass'])
});
