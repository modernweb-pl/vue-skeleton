/* eslint-disable @typescript-eslint/no-var-requires */

const pkg = require('./package');
const { GITHUB_PAGES } = process.env;

/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: GITHUB_PAGES ? `/${pkg.name}/` : '/',
  pluginOptions: {
    prerenderSpa: {
      renderRoutes: ['/', '/about', '/contact'],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true,
    },
  },
};
