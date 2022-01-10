/* eslint-disable @typescript-eslint/no-var-requires */

const pkg = require('./package');
const path = require('path');
const { NODE_ENV, GITHUB_PAGES } = process.env;
const isDev = NODE_ENV !== 'production';

/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: GITHUB_PAGES ? `/${pkg.name}/` : '/',
  css: {
    sourceMap: isDev,
  },
  pluginOptions: {
    prerenderSpa: {
      renderRoutes: ['/', '/about', '/contact'],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true,
    },
    // https://cli.vuejs.org/guide/css.html#automatic-imports
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/imports.scss')],
    },
  },
  chainWebpack: (config) => {
    /** @see https://bootstrap-vue.org/docs/reference/images#vue-cli-3-support */
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        };

        return options;
      });
  },
};
