<template>
  <div id="app">
    <div class="container">
      <vNavigationVue />
    </div>
  </div>
</template>

<script>
import vNavigationVue from './components/v-navigation.vue';

export default {
  components: { vNavigationVue}
}
</script>

<style>
@import url(./assets/style/normalize.css);
@import url(./assets/style/style.css)
</style>
