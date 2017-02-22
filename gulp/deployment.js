var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	browserSync = require('browser-sync').create(),
	deploy = require('gulp-gh-pages');

gulp.task('deploy', function() {
	return gulp.src(vars.paths.deploy)
	.pipe(deploy());
});

gulp.task('localServer', function () {
	browserSync.init({
		files: [vars.paths.html.dest + '/**'],
		port: 9876,
		server: {
			baseDir: vars.paths.html.dest
		}
	});
});

