<template>
  <div class="main">
    <!-- {{ $route.params.id }} -->
    <div class="article-content">
      <div class="article-header">
        <!-- 头像，用户名等 -->
        <router-link :to="'/people/' + article.user.id">{{ article.user.username }}</router-link>
        <span>{{ article.user.constellation }}</span>
        <!-- <span>{{ aritcle.type }}</span> -->
      </div>
      <div class="article-text">
        <!-- 正文内容 -->
        <!-- <router-link :to="'/'">{{ article.title }}</router-link> -->
        <p>
          {{ article.title }}
        </p>
      </div>
      <div class="article-footer">
        <!-- 时间，统计信息，点赞回复等 -->
        {{ article.time | moment }}
        {{ article.type }}
        阅读（{{ article.visitedAmount }}）
      </div>
    </div>
    <div class="comment-area">
      <div class="comment-publish" v-if="logined">
        <div class="comment-publish-header">
          <router-link :to="'/people/' + userInfo.id">{{ userInfo.username }}</router-link>
          <span>{{ userInfo.word }}</span>
        </div>
        <textarea name="comment-publish-text" id="comment-publish-text" v-model="commentPublishText" @focus="conmmentFocus"></textarea>
        <button class="primary" v-on:click="publishComment">提交</button>
      </div>
      <div v-else>
        <router-link :to="'/login'">去登陆</router-link>
      </div>
      <div class="comment-list">
        <div class="comment-list-title">
          {{ comments.length }}条评论
        </div>
        <div class="comment-content" v-for="comment in comments" :key="comment.id">
          {{ comment.user.username }}
          {{ comment.time | moment }}
          {{ comment.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {config} from '../assets/scripts/config.js';

export default {
  name: 'article',
  data(){
    return {
      msg: 'article',
      logined: false,
      userInfo: {},
      article: {
        user: {}
      },
      comments: [],
      commentPublishText: '写下你的观点...'
    }
  },
  methods: {
    getArticle(){
      this.$ajax.get('http://' + config.host + ':' + config.port +'/articles?id=' + this.$route.params.id + '&_expand=user')
        .then(function(response){
          console.log('1');
          console.log(JSON.stringify(response.data));
          this.article = response.data[0];
          this.visitArticle();
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    },
    getComments(){
      this.$ajax.get('http://' + config.host + ':' + config.port + '/articles/' + this.$route.params.id + '/comments?&_expand=user')
        .then(function(response){
          this.comments = response.data;
          console.log(response.data);
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    },
    getUserInfo: function(){
      if(localStorage.userInfo){
        this.logined = true;
        this.userInfo = JSON.parse(localStorage.userInfo);
      }
    },
    publishComment: function(){
      var newComment = {
        time: Date.now(),
        text: this.commentPublishText,
        userId: Number(this.userInfo.id),
        articleId: Number(this.$route.params.id)
      };
      this.$ajax.post('http://'+ config.host + ':' + config.port + '/comments', newComment)
        .then(function(response){
          console.log(response);
          this.getComments();
        }.bind(this)).catch(function(error){
          console.log(error);
        });
      console.log(this.commentPublishText);
      // this.article.comments.push(this.commentPublishText);
    },
    visitArticle(){
      var _this = this;
      // 访问量增加1
      axios.patch('http://'+ config.host + ':' + config.port + '/articles/' + _this.$route.params.id, {
        visitedAmount: ++ _this.article.visitedAmount
      })
        .then(function(response){
          console.log(response);
        }.bind(this)).catch(function(error){
          console.log(error);
        });
    },
    conmmentFocus(){
      this.commentPublishText = '';
    }
  },
  created(){
    this.getArticle();
    this.getComments();
    this.getUserInfo();
  }
}
</script>

<style lang="scss" scoped>
.main {

  .article-content {
    margin-bottom: 24px;
    width: 640px;

    .article-header {
      margin-bottom: 12px;

      a {
        text-decoration-line: none;
        color: #2b2c2d;

        &+span {
          font-size: 12px;
          color: #888;
        }
      }
    }

    .article-text {
      margin-bottom: 10px;
      font-size: 14px;

      p {
        line-height: 1.75em;
        font-size: 15px;
        color: #262626;
      }
    }

    .article-footer {
      font-size: 12px;
      color: #888;
    }
  }

  .comment-area {
    width: 640px;

    .comment-publish {
      padding-top: 16px;
      border-top: 1px solid #888;

      .comment-publish-header {
        margin-bottom: 12px;

        a {
          text-decoration-line: none;
          color: #2b2c2d;
        }

        span {
          font-size: 12px;
          color: #888;
        }
      }

      textarea {
        display: block;
        padding: 12px 16px;
        box-sizing: border-box;
        width: 600px;
        height: 100px;
      }
    }
    .comment-list {

    }
  }
}
</style>
