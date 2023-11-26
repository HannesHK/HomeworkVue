<template>
  <div class="home">
    <header-vue></header-vue>
    <div id="postPage">
      <div v-for="post in postsList">
        <post  :content="post"></post>
      </div>
      <button :onClick="resetLikes" id="resetButton">
        Reset likes
      </button>
    </div>
    
    <footer-vue></footer-vue>
  </div>
</template>

<script>

import HeaderVue from '@/components/Header.vue'
import FooterVue from '@/components/Footer.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    FooterVue,
    Post
  },
  methods: {
    resetLikes() {
      this.$store.dispatch("resetLikes");
    }
  },
  computed: {
    postsList(){
      return this.$store.state.postsList
    }

  }
}
</script>

<style scoped>
#postPage {
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
}

#resetButton {
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgb(112, 183, 253);
  font-size: medium;
  font-weight: bold;
}
</style>