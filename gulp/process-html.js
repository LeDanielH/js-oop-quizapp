const vars = require('./vars'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	localServer = require('gulp-connect'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	// nanofyHtml = require('gulp-htmlmin'),
	fs = require('fs'),
	replaceString = require('gulp-replace'),
	plumber = require('gulp-plumber');
	// stripHtmlComments = require('gulp-strip-comments');


gulp.task('process-html', [], function() {
	return gulp.src(vars.paths.html.src)
		.pipe(plumber())
		// .pipe(stripHtmlComments())
		// .pipe(nanofyHtml({collapseWhitespace: true}))
		.pipe(gulp.dest(vars.paths.html.dest))
		.pipe(localServer.reload());
});

const HandleBars = {
	options: {
		ignorePartials: true,
		batch: [vars.paths.handlebars.partials]
	},

	proccessHandleBars: function(source, destination) {
		const letterObject = JSON.parse(fs.readFileSync(vars.paths.data.json.src + 'handlebars.json', 'utf8')); // get data for the letter
			return gulp.src(source)
				.pipe(plumber())
				.pipe(handlebars(letterObject, HandleBars.options))
				.pipe(rename({extname: '.html'}))
				.pipe(gulp.dest(destination))
				.pipe(localServer.reload());
	},
	resetHandleBars: function () {
		return gulp.src([vars.paths.handlebars.watch])
			.pipe(plumber())
			.pipe(replaceString(/\\{{ /g, '{{ '))
			.pipe(gulp.dest(vars.paths.handlebars.prod));
	},

	escapeHandleBars: function () {
		return gulp.src([vars.paths.handlebars.watch])
			.pipe(plumber())
			.pipe(replaceString(/{{ /g, '\\{{ '))
			.pipe(gulp.dest(vars.paths.handlebars.prod));
	},
};

gulp.task('process-handlebars', [], function () {
	HandleBars.proccessHandleBars(vars.paths.handlebars.src, vars.paths.handlebars.dest)
});

gulp.task('process-handlebars-build', ['escape-handlebars'], function () {
	HandleBars.proccessHandleBars(vars.paths.handlebars.src, vars.paths.handlebars.dest)
});

gulp.task('reset-handlebars', [], HandleBars.resetHandleBars);
gulp.task('escape-handlebars', [], HandleBars.escapeHandleBars);