/**
 * Created by zm on 2016/12/15.
 */
var gulp = require('gulp');

//引入组件
var minfycss = require('gulp-minify-css'),//css压缩
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//合并文件
    rename = require('gulp-rename'),//重命名
    clean = require('gulp-clean'),//清空文件夹
    minhtml = reqire('gulp-htmlmin'),//html压缩
    jshint = require('gulp-jshint'),//js代码规范检查
    imagemin = require('gulp-imagemin')//图片压缩
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(minhtml({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'));
});
gulp.task('css', function (argument) {
    gulp.src('src/css/*.css')
        .pipe(concat('merge.min.css'));
})








