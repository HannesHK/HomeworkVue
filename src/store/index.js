import { createStore } from 'vuex'

export default createStore({
  state: {
    postsList:[
      {
         "author": "Tom Doe",
         "postId": 0,
         "postBody": "What time is the practice session today?",
         "createTime": "Nov 2, 2023",
         "imageLink": "",
         "likes": 0
      },
      {
          "author": "John Doe",
          "postId": 1,
          "postBody": "Dude, it started 10 minutes ago...",
          "createTime": "Nov 2, 2023",
          "imageLink": "https://images.thequint.com/thequint%2F2021-08%2Fadcdc6fe-9513-4663-b7d5-ade6c543b4d4%2FUntitled_design__50_.png",
          "likes": 0
       },
       {
          "author": "Tom Doe",
          "postId": 2,
          "postBody": "Well, I won't be late if I don't show up!",
          "createTime": "Nov 2, 2023",
          "imageLink": "https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg",
          "likes": 0
       },
       {
          "author": "John Doe",
          "postId": 3,
          "postBody": "My man, that's the fifth practice session you have missed in a row! Do you even know what we are studying?",
          "createTime": "Nov 2, 2023",
          "imageLink": "",
          "likes": 0
       },
       {
          "author": "Tom Doe",
          "postId": 4,
          "postBody": "Sure, we're making web pages or sth like that.",
          "createTime": "Nov 2, 2023",
          "imageLink": "",
          "likes": 0
       },
       {
          "author": "John Doe",
          "postId": 5,
          "postBody": "Anyways, I should pay attention in class now.",
          "createTime": "Nov 2, 2023",
          "imageLink": "",
          "likes": 0
       },
       {
          "author": "Tom Doe",
          "postId": 6,
          "postBody": "Alright, see you next week then!",
          "createTime": "Nov 2, 2023",
          "imageLink": "",
          "likes": 0
       },
       {
          "author": "John Doe",
          "postId": 7,
          "postBody": "",
          "createTime": "Nov 2, 2023",
          "imageLink": "https://i.kym-cdn.com/entries/icons/facebook/000/023/021/e02e5ffb5f980cd8262cf7f0ae00a4a9_press-x-to-doubt-memes-memesuper-la-noire-doubt-meme_419-238.jpg",
          "likes": 0
       },
       {
          "author": "Tom Doe",
          "postId": 8,
          "postBody": "Hey guys, what time was the practice session again?",
          "createTime": "Nov 9, 2023",
          "imageLink": "",
          "likes": 0
       },
       {
          "author": "John Doe",
          "postId": 9,
          "postBody": "I'm speechless...",
          "createTime": "Nov 9, 2023",
          "imageLink": "",
          "likes": 0
       }
  ]
  },
  getters: {
    
  },
  mutations: {
    IncreaseLikes: (state, {id}) => {
      state.postsList.forEach(post => {
        if(post.postId==id){
          post.likes++;
        }
      })
    },
    resetLikes: state => {
      state.postsList.forEach(post => {
        post.likes = 0;
      })
    }
  },
  actions: {
    increaseLikes: (act,{id}) => {
      setTimeout(function() {
          act.commit("IncreaseLikes",{id})
      }, 100)
    },
    resetLikes: act => {
      setTimeout(function() {
        act.commit("resetLikes")
    }, 100)
    }
  },
  modules: {
  }
})
