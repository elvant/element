'use strict';
// const gulp = require('gulp');
// const cleanCSS = require('gulp-clean-css');
// const less = require('gulp-less');
// const rename = require('gulp-rename');
// const autoprefixer = require('gulp-autoprefixer');

// // 编译less
// gulp.task('css', function () {
//   gulp.src('../src/styles/index.less')
//     .pipe(less())
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions', 'ie > 8']
//     }))
//     .pipe(cleanCSS())
//     .pipe(rename('iview.css'))
//     .pipe(gulp.dest('../dist/styles'));
// });

// // 拷贝字体文件
// gulp.task('fonts', function () {
//   gulp.src('../src/styles/common/iconfont/fonts/*.*')
//     .pipe(gulp.dest('../dist/styles/fonts'));
// });

// gulp.task('default', ['css', 'fonts']);

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('../packages/theme-antd/src/index.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    // .pipe(cssmin())
    .pipe(cleanCSS())
    .pipe(rename('element.css'))
    .pipe(gulp.dest('../dist'));
});

gulp.task('copyfont', function() {
  return gulp.src('../packages/theme-antd/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../dist/fonts'));
});

gulp.task('default', ['compile', 'copyfont']);
