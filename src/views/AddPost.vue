<template>
    <div class="form">
      <h3>Add a Post</h3>
      <label for="Author">Author: </label>
      <input name="Author" type="text" id="author" required v-model="post.author" />
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <button @click="addPost" class="addPost">Add Post</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddPost",
    data() {
      return {
        post: {
          author: "",
          createtime: new Date().toDateString().slice(3),
          body: "",
        },
      };
    },
    methods: {
      addPost() {
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.post),
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(167, 154, 154);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    color: rgb(8, 110, 110);
  }
  label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: blue;
  }
  button {
    background: rgb(8, 110, 110);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    align-items: center;
    text-align: center;
  }
  </style>