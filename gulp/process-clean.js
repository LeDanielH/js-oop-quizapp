var vars = require('./vars');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
	return del([
		vars.paths.deploy
	], {
		force: true
	});
});

gulp.task('clean-dev', function () {
	return del([
		'devel/assets/generated/main.css',
		'devel/assets/generated/scripts.js'
	], {
		force: true
	});
});
