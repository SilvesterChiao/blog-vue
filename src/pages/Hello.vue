<template>
  <div class="main">
    <div class="left">
      <div class="concent">
        <!-- <h3>{{ msg }}</h3> -->
        <div class="article-list">
        <!-- <transition-group name="article-list" tag="div" class="article-list"> -->
          <div v-if="articles.length === 0" :key="0">
            暂无文章
          </div>
          <div class="article-content" v-else v-for="(article, index) in articles" :key="article.id" v-on:mouseover.capture="showCloseButton($event)" v-on:mouseout.capture="hideCloseButton">
            <div class="article-header">
              <!-- 头像，用户名等 -->
              <router-link :to="'/people/' + article.user.id">{{article.user.username}}</router-link>
              <span>{{ article.user.constellation }}</span>
              <!-- <span class="close" v-on:click="close(index)"></span> -->
            </div>
            <div class="article-text">
              <!-- 正文内容 -->
              <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
            </div>
            <div class="article-footer">
              <!-- 时间，统计信息，点赞回复等 -->
              {{ article.time | moment }}
              {{ article.type }}
              阅读（{{ article.visitedAmount }}）
            </div>
          </div>
        <!-- </transition-group> -->
        </div>
      </div>
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
import {config} from '../assets/scripts/config.js';
import axios from 'axios';
import TodoList from '../components/TodoList';
import Navbar from '../components/Navbar';
import logo from './../assets/images/logo.png';
import banner1 from './../assets/images/banner_1.jpg';
import banner2 from './../assets/images/banner_2.jpg';
import banner3 from './../assets/images/banner_3.jpg';
import banner4 from './../assets/images/banner_4.jpg';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logo: logo,
      articles: [],
      banners: [
        banner1,
        banner2,
        banner3,
        banner4
      ]
    }
  },
  methods: {
    getArticles(){
      var _this = this;
      console.log(config);
      axios.get('http://' + config.host + ':'+ config.port +'/articles/?_expand=user')
        .then(function(response){
          this.articles = response.data;
          console.log(this.articles);
        }.bind(this))
        .catch(function(error){
          console.log(error);
          console.log(_this.articles.length);
        });
    },
    banner(){
      console.log('banner');
    },
    showCloseButton(event){
      // console.log(event.target.getElementsByClassName('close'));
      // event.target.getElementsByClassName('close')[0].style.display = 'inline-block';
    },
    hideCloseButton(event){
      // event.target.getElementsByClassName('close')[0].style.display = 'none';
    },
    close(index){
      this.articles.splice(index, 1);
    }
  },
  created(){
    this.getArticles();
    window.fn();
  },
  components: {
    TodoList,
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/styles/base.scss';
@import './../assets/styles/articles.scss';

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.main {

  .left {
    float: left;
    box-sizing: border-box;
    // width: 640px;

    .concent {
      // margin-top: 20px;
    }
  }
}
</style>
