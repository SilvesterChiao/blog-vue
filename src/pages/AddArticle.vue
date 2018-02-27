<template>
  <div class="main">
    <div class="add-article-form">
      <h3>
        <span>发表文章</span>
      </h3>
      <!-- <input id="articleTitle" type="text" v-model="articleTitle" placeholder="请填写标题"> -->
      <textarea name="articleTitle" id="articleTitle" cols="30" rows="10" v-model="articleTitle"></textarea>
      <button class="primary" @click="publishArticle">发表</button>
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
      articleTitle: '',
      type: ''
    }
  },
  methods: {
    publishArticle: function(){
      var _this = this;
      var userInfo = JSON.parse(localStorage.userInfo);
      console.log(userInfo);
      var newArticle = {
        title: this.articleTitle,
        time: Date.now(),
        userId: userInfo.id,
        type: '前端',
        visitedAmount: 0
      };

      axios.post('http://localhost:9000/articles', newArticle)
        .then(function(response){
          console.log(response);
          _this.$message('发布成功');
          _this.$router.push({ path: '/' });
        }).catch(function(error){
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.main {

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

    // button {
    //   margin-top: 16px;
    //   padding: 0 16px;
    //   line-height: 32px;
    //   border: 0;
    //   border-radius: 3px;
    //   font-size: 14px;
    //   text-align: center;
    //   cursor: pointer;
    //   color: #fff;
    //   background-color: #0f88eb;
    // }
  }
}
</style>
