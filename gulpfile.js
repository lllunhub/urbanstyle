import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import posthtml from "gulp-posthtml";
import include from "posthtml-include";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import postcss from "gulp-postcss";
import sourcemap from "gulp-sourcemaps";
import pimport from "postcss-import";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import babel from "gulp-babel";
import concat from "gulp-concat";
import terser from "gulp-terser-js";
import svgstore from "gulp-svgstore";
import imagemin from "gulp-imagemin";
import webpconvert from "gulp-webp";
import del from "del";

export const html = () => {
  return gulp.src(`source/*.html`)
    .pipe(posthtml([include()]))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    })
    )
    .pipe(gulp.dest(`build`));
};

export const css = () => {
  return gulp
    .src(`source/css/style.css`)
    .pipe(sourcemap.init())
    .pipe(postcss([pimport, autoprefixer, csso]))
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(browsersync.stream());
};

export const js = () => {
  return gulp
    .src(`source/js/*.js`)
    .pipe(sourcemap.init())
    .pipe(babel({
      presets: [`@babel/preset-env`],
    })
    )
    .pipe(terser())
    .pipe(rename({
      suffix: `.min`,
    })
    )
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/js`));
};

export const jsconcat = () => {
  return gulp
    .src(`source/js/concat/*.js`)
    .pipe(sourcemap.init())
    .pipe(concat(`main.js`))
    .pipe(babel({
      presets: [`@babel/preset-env`],
    })
    )
    .pipe(terser())
    .pipe(rename({
      suffix: `.min`,
    })
    )
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/js`));
};

export const sprite = () => {
  return gulp
    .src(`source/img/icon-*.svg`)
    .pipe(svgstore({
      inlineSvg: true,
    })
    )
    .pipe(rename(`sprite.svg`))
    .pipe(gulp.dest(`build/img`));
};

export const images = () => {
  return gulp
    .src(`source/img/*.{jpg,png}`)
    .pipe(imagemin([
      imagemin.mozjpeg({
        quality: 100,
        progressive: true,
      }),
      imagemin.optipng({
        optimizationLevel: 3,
      }),
    ])
    )
    .pipe(gulp.dest(`source/img`));
};

export const svg = () => {
  return gulp
    .src(`source/img/*.svg`)
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [{
          removeViewBox: true,
        },
        {
          cleanupIDs: false,
        },
        ],
      }),
    ])
    )
    .pipe(gulp.dest(`source/img`));
};

export const webp = () => {
  return gulp
    .src(`source/img/*.{jpg,png}`)
    .pipe(webpconvert({
      quality: 100,
    })
    )
    .pipe(gulp.dest(`source/img`));
};

export const copy = () => {
  return gulp
    .src([
      `source/fonts/*.{woff,woff2}`,
      `source/img/*.{jpg,png,svg,webp}`,
      `source/img/favicons/*`,
    ], {
      base: `source`,
    }
    )
    .pipe(gulp.dest(`build`));
};

export const clean = () => {
  return del(`build`);
};

export const refresh = (done) => {
  browsersync.reload();
  done();
};

export const server = () => {
  browsersync.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(`source/css/**/*.css`, gulp.series(css));
  gulp.watch(`source/js/*.js`, gulp.series(js, refresh));
  gulp.watch(`source/img/icon-*.svg`, gulp.series(sprite, html, refresh));
  gulp.watch(`source/*.html`, gulp.series(html, refresh));
  gulp.watch(`source/img/*.{png,jpg,svg,webp}`, gulp.series(build, refresh));
  gulp.watch(`source/fonts/*.{woff,woff2}`, gulp.series(build, refresh));
};

export const build = gulp.series(clean, copy, css, sprite, html, js, jsconcat);
export const start = gulp.series(build, server);
