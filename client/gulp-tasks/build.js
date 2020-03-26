'use strict'
var gulp = require('gulp');
const del = require('del');
var merge = require('merge-stream');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');


gulp.task('build', function () {
    del.sync(['dist/**']);
    runSequence('copySourceFiles', 'minifyHTML', 'minifyCSS');
});





gulp.task('copySourceFiles', function () {
    return gulp.src([
            'src/**',
        ])
        .pipe(gulp.dest('./dist'));
});



gulp.task('minifyHTML', function () {
    return gulp.src('dist/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});



gulp.task('minifyCSS', () => {
    return gulp.src('dist/assets/css/**/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});