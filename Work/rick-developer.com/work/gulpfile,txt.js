var gulp = require('gulp'),
 sass = require('gulp-sass'),
 // minifyCSS = require ('gulp-minify-css'),
 notify = require ('gulp-notify');

gulp.task('sass', function() {
	return gulp.src('./sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('./pre-css'));
	});

gulp.task('watch', function() {
	gulp.watch('./sass/*.sass', ['sass']);
	gulp.watch('./pre-css/*.css', ['minify-css']);
});

gulp.task('minify-css', function() {
	return gulp.src('./pre-css/*.css')
	.pipe(minifyCSS())
	// .pipe(notify('The job is done, Master ^_^'))
	.pipe(gulp.dest('app/css'))
});

gulp.task('default', ['sass', 'watch']);



