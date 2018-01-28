const PATHS = {
    nodeModules: 'node_modules/',
    dist: 'dist/',
    distScripts: 'dist/scripts/',
    distStyles: 'dist/styles',
    build: 'build/',
    buildScripts: 'build/scripts/',
    buildStyles: 'build/styles/'
};

let gulp = require('gulp'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    debug = require('gulp-debug'),
    del = require('del');

/*** start: Main Tasks ***/
/*** end:   Main Tasks ***/

/*** start: Vendor ***/
gulp.task('vendor', ['vendor-clear', 'vendor-styles', 'vendor-scripts']);

gulp.task('vendor-clear', ['vendor-clear-styles', 'vendor-clear-scripts']);

gulp.task('vendor-styles', ['vendor-clear-styles'], () => {
    //unminified
    gulp.src([
        PATHS.nodeModules + 'bootstrap/dist/css/bootstrap.css'
    ])
    .pipe(debug({title: 'vendor styles'}))
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(PATHS.distStyles));

    //minified
    gulp.src([
        PATHS.nodeModules + 'bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(debug({title: 'vendor minified styles'}))
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(PATHS.distStyles));
});

gulp.task('vendor-clear-styles', () => {
    del.sync([
        PATHS.distStyles + 'vendor.css',
        PATHS.distStyles + 'vendor.min.css',
        '!' + PATHS.distStyles
    ]);
});

gulp.task('vendor-scripts', ['vendor-clear-scripts'], () => {
    //unminified
    gulp.src([
        PATHS.nodeModules + 'jquery/dist/jquery.js',
        PATHS.nodeModules + 'popper.js/dist/umd/popper.js',
        PATHS.nodeModules + 'bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(debug({title: 'vendor scripts'}))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(PATHS.distScripts));

    //minified
    gulp.src([
        PATHS.nodeModules + 'jquery/dist/jquery.min.js',
        PATHS.nodeModules + 'popper.js/dist/umd/popper.min.js',
        PATHS.nodeModules + 'bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(debug({title: 'vendor minified scripts'}))
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(PATHS.distScripts));
})

gulp.task('vendor-clear-scripts', () => {
    del.sync([
        PATHS.distScripts + 'vendor.js',
        PATHS.distScripts + 'vendor.min.js',
        '!' + PATHS.distScripts
    ]);
});
/*** end:   Vendor ***/

/*** start: React ***/
/*** end:   React ***/