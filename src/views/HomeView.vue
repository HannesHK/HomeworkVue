<template>
  <div class="header">
    <div class="container">
    <button v-if = "authResult" @click="Logout" class="center">Logout</button>
    </div>
    <div>  
      <div @click="openPost" class="post" v-for="post in posts"  :key="post.id">
        <a class= 'singlepost' :href="'/#/apost/' + post.id">
        <div class="post-header">
          <h3> {{post.author}} </h3>
          <p> {{ post.createtime }}</p>
        </div>
        <p> {{post.body}} </p>
      </a>
      </div>
    </div>
    <div class="container">
      <button class="but" @click="AddPost">Add post</button>
      <button class="but" @click="deleteAll">Delete all</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    deleteAll() {
      fetch("http://localhost:3000/api/posts",{
        method: "DELETE"
      }).then((response) => {
        console.log(response.data);
        this.$router.go("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
      
    },
    AddPost() {
      this.$router.push("/addpost");
    },
    openPost(event) {
      console.log(event);
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
  mounted() {
        fetch('http://localhost:3000/api/posts/')
        .then((response) => response.json())
        .then(data => {this.posts = data
        console.log(data)})
        .catch(err => console.log(err.message))
    }
};
</script>

<style scoped>
body{
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}
.but{
  margin: 10px 80px;
}

a {
  text-decoration: none;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1, h2, h3, h4, ul, li, a, input, footer{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #b7dbfc;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
.post {
    width: 40%;
    background: rgb(197, 197, 197);
    position: relative;
    border-radius: 10px;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
    text-align: left;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 10%; 
}
.container {
  display: flex;
  justify-content: center;
}
</style>