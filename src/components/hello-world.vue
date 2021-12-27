<template>
  <div class="hello">
    <div class="jumbotron">
      <div class="container text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1 class="display-4 mb-4">{{ msg }}</h1>
        <b-button size="lg" variant="primary" href="https://vuejs.org/" target="_blank">
          Learn more <i class="fa fa-angle-double-right"></i>
        </b-button>
      </div>
    </div>

    <div class="container">
      <p class="lead">
        For a guide and recipes on how to configure / customize this project, check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>

      <div class="row">
        <div class="col-md">
          <h3>CLI Plugins</h3>
          <ul>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                target="_blank"
                rel="noopener"
                >babel</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
                target="_blank"
                rel="noopener"
                >pwa</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                target="_blank"
                rel="noopener"
                >router</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                target="_blank"
                rel="noopener"
                >vuex</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                target="_blank"
                rel="noopener"
                >eslint</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
                target="_blank"
                rel="noopener"
                >unit-jest</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
                target="_blank"
                rel="noopener"
                >e2e-cypress</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                target="_blank"
                rel="noopener"
                >typescript</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md">
          <h3>Essential Links</h3>
          <ul>
            <li>
              <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
            </li>
            <li>
              <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
            </li>
            <li>
              <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
            </li>
            <li>
              <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
            </li>
            <li>
              <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
            </li>
          </ul>
        </div>

        <div class="col-md">
          <h3>Ecosystem</h3>
          <ul>
            <li>
              <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
            </li>
            <li>
              <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-devtools#vue-devtools"
                target="_blank"
                rel="noopener"
                >vue-devtools</a
              >
            </li>
            <li>
              <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
            </li>
            <li>
              <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
                >awesome-vue</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>
