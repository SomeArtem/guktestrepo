import gulp from "gulp";
import gulpif from "gulp-if";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import gcmq from "gulp-group-css-media-queries";
import config from "../config";

export function sassBuild() {
  return gulp
    .src(`${config.src.sass}/main.scss`)
    .pipe(gulpif(config.isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpif(config.isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.dest.css));
}

export function sassWatch() {
  gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
}
