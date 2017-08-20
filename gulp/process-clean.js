const vars = require('./vars');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function () {
	let itemsToBeDeleted = [];
	for(let item in vars.paths.delete) {
		if (!vars.paths.delete.hasOwnProperty(item)) continue;
		itemsToBeDeleted.push(vars.paths.delete[item]);
	}
	console.log(itemsToBeDeleted + ' will be deleted');
	return del(itemsToBeDeleted, {
		force: true
	});
});

