var gulp = require('gulp')
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Server dev
gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: './' //sirviendo ficheros
		}
	})
})

// Process css
gulp.task('sass', function () {

	return gulp
		.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./assets/css'))
		.pipe(browserSync.stream()) // refrescar navegador
})

gulp.task('js', function() {
	return gulp
		.src('./src/js/*.js')
		.pipe(gulp.dest('./assets/js'))
		.pipe(browserSync.stream()) // refrescar navegador
});

// Watch changes
gulp.task('watch', function() {
	gulp.watch('./src/js/*.js', ['js'])
	gulp.watch('./src/sass/*.scss', ['sass'])
	gulp.watch('./*.html').on('change', browserSync.reload)  // ejecuta function cada vez que escuche cambios
})

gulp.task('default', ['watch', 'serve'])