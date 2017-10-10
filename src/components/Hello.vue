<template>
  <div class="main">
    <div class="left">
      <div class="banner">
        <!-- 图片写法 -->
        <!-- <img :src="logo" alt="banner"> -->
      </div>
      <div class="concent">
        <!-- <h3>{{ msg }}</h3> -->
        <div class="article-list">
          <div class="article-content" v-for="article in articles" :key="article.id">
            <div class="article-header">
              <!-- 头像，用户名等 -->
              <router-link :to="'/people/' + article.author.id">{{article.author.username}}</router-link>
              <span>{{ article.author.constellation }}</span>
            </div>
            <div class="article-text">
              <!-- 正文内容 -->
              <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
            </div>
            <div class="article-footer">
              <!-- 时间，统计信息，点赞回复等 -->
              2017.08.20
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <!-- <h3>站内公告等内容</h3>
      <div class="canvas">

      </div> -->
    </div>
  </div>
</template>

<script>
import logo from './../assets/logo.png';
import axios from 'axios';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logo: logo,
      articles: []
    }
  },
  methods: {
    getArticles(){
      axios.get('http://localhost:3000/article')
        .then(function(response){
          this.articles = response.data;
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    }
  },
  created(){
    this.getArticles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

a {
  color: #42b983;
}

.main {
  overflow: hidden;
  margin: 0 auto;
  width: 1000px;

  .left {
    float: left;
    box-sizing: border-box;
    padding: 16px 20px 0;
    width: 640px;

    .banner {
      width: 100%;
      height: 120px;
      border-radius: 8px;
      background-color: #ccc;
    }

    .concent {
      margin-top: 20px;

      .article-list {
        .article-content {
          margin-bottom: 24px;

          .article-header {
            margin-bottom: 12px;

            a {
              text-decoration-line: none;

              &+span {
                font-size: 12px;
                color: #888;
              }
            }
          }

          .article-text {
            margin-bottom: 10px;
            font-size: 14px;

            a {
              line-height: 1.75em;
            }
          }

          .article-footer {
            font-size: 12px;
            color: #888;
          }
        }
      }
    }
  }
  .right {
    float: right;
    width: 360px;

    .canvas {
      height: 200px;
    }
  }
}
</style>
