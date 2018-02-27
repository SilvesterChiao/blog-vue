<template>
<div class="main">
    <div class="people">
      <div class="user-info">
        <div class="banner">

        </div>
        <div class="user-info-content">
          <div class="user-info-header">
            <img :src="userInfo.portrait" alt="头像">
          </div>
          <div class="user-info-text">
            <span class="user-info-text-name">{{ userInfo.username }}</span>
            <span class="user-info-text-constellation">{{ userInfo.constellation }}</span>
            <br>
            <span class="user-info-text-word">{{ userInfo.word }}</span>
            <!-- <p>{{ $route.params.id }}</p> -->
          </div>
        </div>

      </div>
      <div class="article-info">
        <div class="article-info-type">
          <ul>
            <li>
              <a href="###">文章</a>
            </li>
          </ul>
        </div>
        <div class="article-info-content">
          <div class="article-list">
            <div class="article-content" v-for="article in userInfo.articles" :key="article.id">
              <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'people',
  data(){
    return {
      msg: 'people',
      userInfo: {}
    }
  },
  methods: {
    getInfo(){
      axios.get('http://localhost:9000/users?id=' + this.$route.params.id + '&_embed=articles')
        .then(function(response){
          this.userInfo = response.data[0];
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });

    }
  },
  created(){
    this.getInfo();
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: #f3f3f3;

  .people {
    margin: 0 auto;
    padding-bottom: 10px;
    width: 1000px;

    .user-info {
      border-radius: 4px;
      background-color: #fff;

      .banner {
        height: 135px;
        border-radius: 4px 4px 0 0;
        background-color: #96a1a9;
      }

      .user-info-content {
        padding-top: 12px;
        padding-bottom: 12px;
        overflow: hidden;

        .user-info-header {
          float: left;
          margin-left: 24px;
          padding: 4px;
          border-radius: 10px;
          z-index: 9;

          img {
            display: block;
            width: 125px;
            height: 125px;
            border-radius: 8px;
          }
        }
        .user-info-text {
          float: left;
          margin-top: 16px;
          margin-left: 20px;

          .user-info-text-name {
            font-size: 24px;
            font-weight: 600;
          }

          .user-info-text-constellation {
            font-size: 12px;
            color: #888;
          }
          .user-info-text-word {
            display: inline-block;
            margin-top: 10px;
          }
        }
      }
    }

    .article-info {
      margin-top: 10px;
      border-radius: 4px;
      background-color: #fff;

      .article-info-type {

        ul {
          overflow: hidden;
          list-style-type: none;
          border-bottom: 1px solid #f0f2f7;

          li {
            float: left;
            padding: 0 20px;

            a {
              display: inline-block;
              position: relative;
              padding: 14px 0;
              text-decoration: none;
              font-size: 16px;
              font-weight: 700;
              color: #333;
              border-bottom: 2px solid #0f88eb;

            }
          }
        }
      }

      .article-info-content {
        .article-list {
          .article-content {
            padding: 16px 20px;
            border-bottom: 1px solid #f0f2f7;

            a {
              text-decoration: none;
              line-height: 1.75em;
              color: #2b2c2d;

              &:hover {
                text-decoration-line: underline;
              }
            }
          }
        }
      }
    }
  }
}
</style>
