var vars = require('./gulp/vars'),
	gulp = require('gulp'),
	sequence = require('run-sequence');

require('./gulp/process-styles');
require('./gulp/process-scripts');
require('./gulp/process-data');
require('./gulp/prepare-libs');
require('./gulp/process-html');
require('./gulp/merge-js-libs');
require('./gulp/process-clean');
require('./gulp/deployment');

gulp.task('watch', function() {
	gulp.watch(vars.paths.styles.all.watch, ['process-styles']);
	gulp.watch(vars.paths.scripts.all.watch, ['process-scripts']);
	gulp.watch(vars.paths.data.images.src, ['process-images']);
	gulp.watch(vars.paths.data.fonts.src, ['process-fonts']);
	gulp.watch(vars.paths.data.json.watch, ['process-handlebars']);
	gulp.watch(vars.paths.handlebars.watch, ['process-handlebars']);
});

require('./gulp/process-styles');

gulp.task('first-time', function(done) {
	sequence('clean', ['prepare-libs'], done);
});

// gulp.task('prod', function(done) {
// 	sequence(['process-styles-prod','process-scripts-prod'], 'clean-dev', done);
// });
