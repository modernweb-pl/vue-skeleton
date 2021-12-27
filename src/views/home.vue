<template>
  <div class="home">
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/hello-world.vue'; // @ is an alias to /src
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
