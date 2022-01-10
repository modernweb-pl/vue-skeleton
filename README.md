# vue-skeleton

> Vue.js + TypeScript multi-page skeleton with pre-rendering

[![Verify](https://github.com/modernweb-pl/vue-skeleton/actions/workflows/verify.yml/badge.svg?branch=master)](https://github.com/modernweb-pl/vue-skeleton/actions/workflows/verify.yml)

What's included:
* [bootstrap-vue](https://bootstrap-vue.js.org/)
* [vue-meta](https://vue-meta.nuxtjs.org/)
* [font-awesome](https://fontawesome.com/)

Installed Vue CLI Plugins:
* [prerender-spa](https://github.com/SolarLiner/vue-cli-plugin-prerender-spa)
* [babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel)
* [typescript](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript)
* [pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)
* [router](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router)
* [vuex](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex)
* [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
* [unit-jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)
* [e2e-cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress)

## Project setup
```shell
yarn install
```

### Compiles and hot-reloads for development
```shell
yarn serve
```

### Compiles and minifies for production
```shell
yarn build
```

### Run your unit tests
```shell
yarn test
```

### Run your end-to-end tests
```shell
yarn test:e2e
```

### Lints and fixes files
```shell
yarn lint:fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker setup

Configure Docker registry in `package.json`:
```json
"docker": {
  "registry": "ghcr.io/modernweb-pl"
},
```

## Build & publish Docker image
```shell
yarn docker:build
yarn docker:push
```

## Docker Compose

Docker Compose is configured to work with [jwilder/nginx-proxy](https://hub.docker.com/r/jwilder/nginx-proxy) and publish production build at `http://vue-skeleton.localhost`

```shell
yarn docker:compose:build
yarn docker:compose:up
yarn docker:compose:down
```
