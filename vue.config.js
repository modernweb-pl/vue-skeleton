/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  pluginOptions: {
    prerenderSpa: {
      renderRoutes: ['/', '/about', '/contact'],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true,
    },
  },
};
