'use strict';


const gulp  = require('gulp');



module.exports = function(options) {

    return function() {
      return gulp.src(`./${options.src}/fonts/**/*.{eot,svg,ttf,woff,woff2}`)
        .pipe(gulp.dest(`./${options.dest}/fonts`));
    };

  };