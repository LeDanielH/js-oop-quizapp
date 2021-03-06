const vars = require('./vars'),
	gulp = require('gulp'),
	duplicate = require('gulp-rename'),
	localServer = require('gulp-connect'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	checkJs = require('gulp-jshint');

gulp.task('process-scripts', function() {
	return gulp.src([
		vars.paths.scripts.src + 'index.js',
		vars.paths.scripts.src + 'components/*.js'
	])
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(concat(vars.renderedNames.javascript.scripts))
	.pipe(checkJs())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(vars.paths.scripts.dest))
	.pipe(localServer.reload());
});

gulp.task('process-scripts-prod', function() {
	return gulp.src([vars.paths.scripts.dest + 'scripts.js',])
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.scripts.dest))
});

