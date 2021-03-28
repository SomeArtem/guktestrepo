import gulp from "gulp";
import config from "../config";

function dataBuild() {
  return gulp.src(`${config.src.data}/**/*`).pipe(gulp.dest(config.dest.data));
}

function fontsBuild() {
  return gulp
    .src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts));
}

function imagesBuild() {
  return gulp
    .src(`${config.src.images}/**/*`)
    .pipe(gulp.dest(config.dest.images));
}

function iconsBuild() {
  return gulp
    .src(`${config.src.iconsMono}/**/*`)
    .pipe(gulp.dest(config.dest.images));
}

export const assetsBuild = gulp.parallel(
  fontsBuild,
  imagesBuild,
  iconsBuild,
  dataBuild
);

export function assetsWatch() {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  gulp.watch(`${config.src.images}/**/*`, imagesBuild);
  gulp.watch(`${config.src.iconsMono}/**/*`, iconsBuild);
  gulp.watch(`${config.src.data}/**/*`, dataBuild);
}
