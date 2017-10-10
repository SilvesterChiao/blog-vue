<template>
  <div class="article-box">
    <!-- {{ $route.params.id }} -->
    <div class="article-content">
      <div class="article-header">
        <!-- 头像，用户名等 -->
        <router-link :to="'/people/' + article.author.id">{{ article.author.username }}</router-link>
        <span>{{ article.author.constellation }}</span>
      </div>
      <div class="article-text">
        <!-- 正文内容 -->
        <router-link :to="'/'">{{ article.title }}</router-link>
      </div>
      <div class="article-footer">
        <!-- 时间，统计信息，点赞回复等 -->
        2017.08.20
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'article',
  data(){
    return {
      msg: 'article',
      article: {
        author: {

        }
      }
    }
  },
  methods: {
    getArticle(){
      axios.get('http://localhost:3000/article?id=' + this.$route.params.id)
        .then(function(response){
          this.article = response.data[0];
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    }
  },
  created(){
    this.getArticle();
  }
}
</script>

<style lang="scss" scoped>
.article-box {
  margin: 0 auto;
  padding: 12px;
  width: 1000px;

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
</style>
