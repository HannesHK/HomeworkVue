<script>
export default  {
    name:"header",
    props: ["content"],
    methods: {
        like() {
            this.$store.dispatch("increaseLikes",{id : this.content.postId});
        }
    }
}
</script>

<template>
    <article>
          <div class="articleTop">
            <img src="@/assets/profile.jpg" alt="" class="profilePicture">
            <p>{{ content.author }}</p>
            <p> {{ content.createTime }}</p>
          </div>
          <img :src="content.imageLink" v-if="content.imageLink" alt="">
          
          <div class="articleBottom">
            <p>{{ content.postBody }}</p>
            <div class="likes">
                <button :onClick="like" class="likeButton">
                    <img src="@/assets/like.png" alt="">
                </button>
                <p>Likes: {{ content.likes }}</p>
            </div>
            
          </div>
    </article>
</template>



<style scoped>
article {
    background-color: whitesmoke;
    width: 400px;
    margin:20px;
    border-radius: 10px;
    border: 1px black solid;
    padding: 8px;
    box-shadow: 5px 5px 10px gray; 
}
.articleTop {
    display: flex;
    justify-content: space-between;
    padding: 3px;
    border-bottom: 1px gray solid;
}

.articleBottom {
  padding-top: 20px ;
  display: flex;
  padding-left: 5px;
  padding-right: 10px;
  flex-direction: column;
  align-items: baseline;
}

.articleBottom p {
  margin: 0px;
}

.likeButton {
    height:50px;
    width: 50px;
    border: 0;
    background-color: transparent;
    position: relative;
}

.likeButton img {
  height: 50px;
  width: auto;
  position: absolute;
  top:5px;
  left:-10px;
}

.profilePicture {
    height: 40px;
    margin-right: 20px;
    border-radius: 50%;
}

.likes {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-between;
}

.likes p {
    font-size: 18px;
    padding-bottom: 5px;
}
</style>