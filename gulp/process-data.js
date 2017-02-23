var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	minifyImages = require('gulp-imagemin'),
	plumber = require('gulp-plumber');

gulp.task('process-fonts', function() {
	return gulp.src([vars.paths.data.fonts.src])
		.pipe(plumber())
		.pipe(gulp.dest(vars.paths.data.fonts.dest))
		.pipe(localServer.reload());
});

gulp.task('process-json', function() {
	return gulp.src([vars.paths.data.json.src])
		.pipe(plumber())
		.pipe(gulp.dest(vars.paths.data.json.dest))
		.pipe(localServer.reload());
});

gulp.task('process-images', function() {
	return gulp.src([vars.paths.data.images.src])
		.pipe(plumber())
		.pipe(minifyImages({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
	.pipe(gulp.dest(vars.paths.data.images.dest));
});
