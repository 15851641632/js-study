/**
 * Created by zm on 2016/12/15.
 */
var gulp = require('gulp');

//�������
var minfycss = require('gulp-minify-css'),//cssѹ��
    uglify = require('gulp-uglify'),//jsѹ��
    concat = require('gulp-concat'),//�ϲ��ļ�
    rename = require('gulp-rename'),//������
    clean = require('gulp-clean'),//����ļ���
    minhtml = reqire('gulp-htmlmin'),//htmlѹ��
    jshint = require('gulp-jshint'),//js����淶���
    imagemin = require('gulp-imagemin')//ͼƬѹ��
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(minhtml({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'));
});
gulp.task('css', function (argument) {
    gulp.src('src/css/*.css')
        .pipe(concat('merge.min.css'));
})








