var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	// nanofyHtml = require('gulp-htmlmin'),
	fs = require('fs'),
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

gulp.task('process-handlebars', [], function() {
	var letterObject = JSON.parse(fs.readFileSync(vars.paths.data.json.src + 'letter.json', 'utf8')); // get data for the letter
	var letterObjectNoComments = {};
	var comment = "_former"
	function filterObject(obj,newObj) {
		Object.keys(obj).forEach(function (key) {
			if (key !== comment) {
				if (typeof(obj[key]) == "object") {
					newObj[key] = {};
					filterObject(obj[key],newObj[key]);
				} else {
					newObj[key] = obj[key];
				}
			}
		});
	}

	filterObject(letterObject,letterObjectNoComments);
	console.log(letterObjectNoComments);

	options = {
		ignorePartials: true,
		batch: [vars.paths.handlebars.partials]
	};

	return gulp.src(vars.paths.handlebars.src)
		.pipe(plumber())
		.pipe(handlebars(letterObjectNoComments , options))
		.pipe(rename({extname: '.html'}))
		.pipe(gulp.dest(vars.paths.handlebars.dest))
		.pipe(localServer.reload());
});