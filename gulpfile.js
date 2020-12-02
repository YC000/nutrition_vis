var gulp   = require('gulp');
var deploy = require('gulp-gh-pages');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

gulp.task('deploy', function () {
    return gulp.src("./src/**/*")
        .pipe(deploy({
            remoteUrl: "https://github.com/YC000/nutrition_vis.git",
            branch: "master"
        }))
});
exports.default = defaultTask
