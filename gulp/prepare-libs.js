const vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat');

const Libs = {
	prepareLibsTasks: [],

	prepareSassUtils: function () {
		for (let item in vars.paths.sassUtils) {
			if (!vars.paths.sassUtils.hasOwnProperty(item)) continue;
			(function (item) {
				gulp.task('prepare-sass-'+ item, function() {
					return gulp.src([
						vars.paths.sassUtils[item].src
					])
						.pipe(gulp.dest(vars.paths.sassUtils[item].dest));
				});
			})(item);
			this.prepareLibsTasks.push('prepare-sass-' + item);
		}
	},

	prepareLibs: function () {
		for (let item in vars.paths.libs) {
			if (!vars.paths.libs.hasOwnProperty(item)) continue;
			(function (item) {
				gulp.task('prepare-libs-'+ item, function() {
					return gulp.src([
						vars.paths.libs[item].src
					])
						.pipe(gulp.dest(vars.paths.libs[item].dest))
				});
			})(item);
			this.prepareLibsTasks.push('prepare-libs-' + item);
		}
	},

	init: function () {
		this.prepareSassUtils();
		this.prepareLibs();
	}
};

Libs.init();
gulp.task('prepare-libs', Libs.prepareLibsTasks);
