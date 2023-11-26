<template>
  <div class="home">
    <header-vue></header-vue>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderVue from '@/components/Header.vue'
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeaderVue,
    FooterVue
  }
}
</script>
