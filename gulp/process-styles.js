var vars = require('./vars');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var duplicate = require('gulp-rename');
var localServer = require('gulp-connect');
var processSass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var purgeCss = require('gulp-css-purge');
var stripCssComments = require('gulp-strip-css-comments');
var purifyCss = require('gulp-purifycss');

gulp.task('process-styles', [], function() {
	return gulp.src([vars.paths.styles.all.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(processSass({
			outputStyle: 'expanded'
		}).on('error', processSass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({
			cascade: false,
			browsers: ['ie >= 10']
		}))
		.pipe(gulp.dest(vars.paths.styles.all.dest))
		.pipe(localServer.reload());
});

gulp.task('process-styles-prod', [], function() {
	return gulp.src([vars.paths.styles.all.dest + 'main.css'])
		.pipe(stripCssComments())
		.pipe(purgeCss())
		.pipe(purifyCss([
			vars.paths.scripts.all.dest + '**/.js', // todo preprod -> prod
			vars.paths.html.dest + '**/*.html'
		]))
		.pipe(cleanCss())
		.pipe(duplicate({suffix: '.min'}))
		.pipe(gulp.dest(vars.paths.styles.all.dest))
});
