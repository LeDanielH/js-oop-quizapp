var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('merge-js-all', function() {
	return gulp.src([
		vars.paths.libs.jquery.src
	])
	.pipe(concat(vars.renderedNames.javascript.all))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.merged.dest));
});

gulp.task('merge-js-libs', [
	'merge-js-all'
]);

