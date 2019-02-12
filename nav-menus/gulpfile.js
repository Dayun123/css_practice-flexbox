"use strict";

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// CSS tasks
function css() {
  return gulp
    .src('./three-item-styles.css') // the file you want the task performed on
    .pipe(autoprefixer({ // the plugin to use
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('build')); // the destination for the finished file
}

// Watch files
function watchFiles() {
  gulp.watch("./three-item-styles.css", css); // which file to watch, and which task to run
}

// Defines the tasks, can run on command line with gulp [task_name]
exports.css = css; // `gulp css` on command line will run the css task
exports.watch = watchFiles; // `gulp watch` will run watch task