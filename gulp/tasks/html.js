import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpif from 'gulp-if'
import include from 'gulp-file-include'
import config from '../config'

export function htmlBuild(){
    return gulp.src(`${config.src.root}/**.html`)
    .pipe(include({prefix:'@@'})) 
    .pipe(gulpif(config.isProd,htmlmin({collapseWhitespace:true})))
    .pipe(gulp.dest(config.dest.html))
    
}

export function htmlWatch(){
    gulp.watch(`${config.src.root}/*.html`, htmlBuild)
    gulp.watch(`${config.src.root}/**/*.html`, htmlBuild)
}