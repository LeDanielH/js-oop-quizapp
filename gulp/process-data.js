const vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	// minifyImages = require('gulp-imagemin'),
	plumber = require('gulp-plumber');

const Data = {

	processJson: function () {
		return gulp.src([vars.paths.data.json.src])
			.pipe(plumber())
			.pipe(gulp.dest(vars.paths.data.json.dest))
			.pipe(localServer.reload());
	},

	processFonts: function () {
		return gulp.src([vars.paths.data.fonts.src])
			.pipe(plumber())
			.pipe(gulp.dest(vars.paths.data.fonts.dest))
			.pipe(localServer.reload());
	},

	processImages: function () {
		return gulp.src([vars.paths.data.images.src])
			.pipe(plumber())
			// .pipe(minifyImages({
			// 	optimizationLevel: 3,
			// 	progressive: true,
			// 	interlaced: true
			// }))
			.pipe(gulp.dest(vars.paths.data.images.dest));
	}
};

gulp.task('process-json', Data.processJson);
gulp.task('process-fonts', Data.processFonts);
gulp.task('process-images', Data.processImages);

gulp.task('prepare-data', ['process-json', 'process-fonts', 'process-images']);

