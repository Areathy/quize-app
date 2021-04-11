<template>
  <div id="app">
    <router-view v-if="appIsReady" />
    <div v-else class="wait">Please wait...</div>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: { Home },
  computed: {
    appIsReady() {
      return this.$root.isAppReady;
    }
  },
}
</script>


<style scoped lang="scss">
#app {
    height: 100vh;
  }
  .wait {
    color:green;
    font-size:16px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>
