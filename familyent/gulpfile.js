'use strict';

const gulp = require('gulp'),

browserSync = require('browser-sync').create(),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
notify = require('gulp-notify');

sass.compiler = require('node-sass');

function browser() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
	gulp.watch('./sass/**/*.scss', gulp.series('sassComp'));
	gulp.watch("./*.html").on('change', browserSync.reload);
};

gulp.task('sassComp', () => {
	return gulp.src('./sass/**/*.scss')
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', notify.onError("SASS-Error: <%= error.message %>")))
			.pipe(autoprefixer({
				cascade: false
			}))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./css'))
			.pipe(browserSync.stream());
});

gulp.task('clean', () => {
	return gulp.src('./css/**/*.css')
	.pipe(cleanCSS({
		level: 2
	}))
	.pipe(gulp.dest('./app'))
})

exports.default = browser