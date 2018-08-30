/**
 * Watch for file changes
 */
'use strict';

const gulp = require('gulp');

module.exports = function (options) {
  return () => {
    gulp.watch(`./${options.src}/js/**/*`, gulp.series(options.tasks.buildCustomJs));

    gulp.watch(`${options.pug}/**/*.pug`, gulp.series(options.tasks.templates))
      .on('all', (path) => {
        global.emittyChangedFile = path;
      });

    gulp.watch(`./${options.src}/sass/**/*`, gulp.series(options.tasks.buildSass));


    gulp.watch(`./${options.src}/fonts/**/*`, gulp.series(options.tasks.fonts));

    const imagesWatcher = gulp.watch(`./${options.src}/images/**/*.+(${options.imageExtensions})`);

    imagesWatcher
      .on('unlink', (path) => {
        options.deleteFile({
          path,
          event: 'unlink'
        }, options.src, options.dest);
      })
      .on('add', gulp.series(options.tasks.imageMin));

    gulp.watch([`./${options.dest}/**/*`, './*.html'])
      .on('change', options.browserSync.reload);
  };

};