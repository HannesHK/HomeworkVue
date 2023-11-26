<template>
  <div class="home">
    <header-vue></header-vue>
    <p>This is an about page</p>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderVue from '@/components/Header.vue'
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'SignUpView',
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

