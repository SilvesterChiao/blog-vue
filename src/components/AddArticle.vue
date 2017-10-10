<template>
  <div class="add-article-box">
    <div class="add-article-form">
      <h3>
        <span>发表文章</span>
      </h3>
      <!-- <input id="articleTitle" type="text" v-model="articleTitle" placeholder="请填写标题"> -->
      <textarea name="articleTitle" id="articleTitle" cols="30" rows="10" v-model="articleTitle"></textarea>
      <button @click="publishArticle">发表</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'addActicle',
  data(){
    return {
      msg: 'addAcricle',
      articleTitle: ''
    }
  },
  methods: {
    publishArticle: function(){
      var userInfo = JSON.parse(localStorage.userInfo);
      console.log(userInfo);
      var newArticle = {
        title: this.articleTitle,
        author: userInfo
      };

      axios.post('http://localhost:3000/article', newArticle)
        .then(function(response){
          console.log(response);
        }).catch(function(error){
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.add-article-box {
  margin: 0 auto;
  padding: 12px;
  width: 1000px;

  .add-article-form {

    h3 {
      margin-top: 20px;
      margin-bottom: 36px;
      height: 40px;
      border-bottom: 2px solid #ccc;

      span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #0f88eb;
        font-size: 20px;
        font-weight: 500;
      }
    }

    textarea {
      padding: 12px 16px;
      box-sizing: border-box;
      width: 100%;
    }

    button {
      margin-top: 16px;
      padding: 0 16px;
      line-height: 32px;
      border: 0;
      border-radius: 3px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      background-color: #0f88eb;
    }
  }
}
</style>
