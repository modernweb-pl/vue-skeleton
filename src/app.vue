<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-brand use-router :to="{ name: 'home' }" exact>NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mr-auto">
          <b-nav-item use-router :to="{ name: 'home' }" exact>Home</b-nav-item>
          <b-nav-item use-router :to="{ name: 'about' }">About</b-nav-item>
          <b-nav-item use-router :to="{ name: 'contact' }">Contact</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-nav-item-dropdown id="dropdown01" text="Dropdown">
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" variant="outline-primary" class="my-2 my-sm-0" type="submit"
            >Search
          </b-button>
        </b-nav-form>
      </b-collapse>
    </b-navbar>

    <main role="main">
      <router-view />
    </main>

    <hr />
    <footer class="container">
      <p>&copy; Company {{ date }}</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pkg from '../package.json';

export default Vue.extend({
  data: () => ({
    date: new Date().getFullYear(),
  }),
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'version', content: process.env.VUE_APP_VERSION },
    ],
    link: [{ rel: 'icon', href: `${process.env.BASE_URL}favicon.ico` }],
    titleTemplate: (chunk) => (chunk ? `${chunk} | ${pkg.description}` : pkg.description),
  },
});
</script>
