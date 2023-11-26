<template>
  <div class="home">
    <header-vue></header-vue>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderVue from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeaderVue
  }
}
</script>
