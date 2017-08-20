const vars = require('./vars');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const localServer = require('gulp-connect');
const processSass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const purgeCss = require('gulp-css-purge');
const stripCssComments = require('gulp-strip-css-comments');

const Styles = {
	processProd: function () {
		return gulp.src([vars.paths.styles.src])
			.pipe(plumber())
			.pipe(processSass({
				outputStyle: 'expanded'
			}).on('error', processSass.logError))
			.pipe(autoprefixer({
				cascade: false,
				browsers: ['ie >= 8', 'Firefox > 10', 'Chrome > 10']
			}))
			.pipe(stripCssComments())
			.pipe(purgeCss())
			.pipe(cleanCss())
			.pipe(gulp.dest(vars.paths.styles.dest))
	},
	processDevel:function () {
		return gulp.src([vars.paths.styles.src])
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(processSass({
				outputStyle: 'expanded'
			}).on('error', processSass.logError))
			.pipe(sourcemaps.write())
			.pipe(autoprefixer({
				cascade: false,
				browsers: ['ie >= 8', 'Firefox > 10', 'Chrome > 10']
			}))
			.pipe(gulp.dest(vars.paths.styles.dest))
			.pipe(localServer.reload());
	}
};

gulp.task('process-styles', [], Styles.processDevel);
gulp.task('process-styles-prod', [], Styles.processProd);