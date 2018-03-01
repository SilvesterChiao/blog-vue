<template>
  <div class="main">
    <div class="article-type-list">
      <div class="article-type-list-box">
        <span>全部</span>
        <span v-for="(type, index) in types" :key="index" @click="getArticlesByType(type)">
          {{ type }}
        </span>
      </div>
    </div>
    <!-- <span>{{ articles.length }}</span> -->
      <div class="article-list">
        <div v-if="articles.length === 0" :key="0">
          暂无文章
        </div>
        <div class="article-content" v-else v-for="(article, index) in articles" :key="article.id">
          <div class="article-header">
            <!-- 头像，用户名等 -->
            <router-link target="_blank" :to="'/people/' + article.user.id">{{article.user.username}}</router-link>
            <span>{{ article.user.constellation }}</span>
            <span class="close" v-on:click="close(index)"></span>
          </div>
          <div class="article-text">
            <!-- 正文内容 -->
            <router-link target="_blank" :to="'/article/' + article.id">{{ article.title }}</router-link>
          </div>
          <div class="article-footer">
            <!-- 时间，统计信息，点赞回复等 -->
            {{ article.time | moment }}
            {{ article.type }}
            阅读（{{ article.visitedAmount }}）
          </div>
        </div>
      </div>
      <navbar></navbar>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar';
import {config} from '../assets/scripts/config.js';

export default {
  name: 'articleTypes',
  data(){
    return {
      msg: '话题',
      types: [],
      articles: []
    }
  },
  methods: {
    getArticlesByType(type){
      var _this = this;
      axios.get('http://' + config.host + ':'+ config.port +'/articles?type=' + type + '&_expand=user')
        .then(function(response){
          this.articles = response.data;
          console.log(response);
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    },
    getTypes(){
      axios.get('http://' + config.host + ':' + config.port + '/types')
        .then(function(response){
          this.types = response.data;
          console.log(response);
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    },
    close(index){
      this.articles.splice(index, 1);
    }
  },
  created(){
    this.getTypes();
    console.log(this.$router);
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/styles/articles.scss';

.main {
  .article-type-list {
    width: 100%;
    height: 40px;
    overflow: auto;

    .article-type-list-box {
      display: flex;
      flex-wrap: nowrap;
      height: 40px;
      width: 1000px;

      span {
        display: inline-block;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
