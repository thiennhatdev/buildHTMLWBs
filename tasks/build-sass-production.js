/**
 * Build production styles for application from SASS
 */
'use strict';

const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      rename       = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      gcmq         = require('gulp-group-css-media-queries'),
      cssnano      = require('gulp-cssnano');

module.exports = function(options) {

  return function() {
    return gulp.src(`./${options.src}/sass/${options.mainSass}`)
      .pipe(sass().on('error', function(err) {
        options.showError.apply(this, ['Sass compile error', err]);
      }))
      .pipe(rename(options.mainSassMin))
      .pipe(gcmq())
      .pipe(cssnano({
        safe: true
      }))
      .pipe(autoprefixer(options.versions))
      .pipe(gulp.dest(`./${options.dest}/css`));
  };

};