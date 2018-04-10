<template>
  <div class="main">
    <Blogheader>
      <span class="header-title">我的</span>
    </Blogheader>
    <div class="mine-info">
      <div class="mine-info-person" v-if="logined">
        <div class="mine-info-person-header">
          <img src="" alt="">
        </div>
        <div class="mine-info-person-text">
          <span>SilvesterChiao</span>
          <span>巨蟹座</span>
          <span>我自横刀向天笑,笑完我就去睡觉</span>
        </div>
      </div>
      <div v-else>
        <router-link to="/login">点击登陆</router-link>
      </div>
      <div class="mine-info-article">
        <div>
          0
          <br>
          文章
        </div>
        <div>
          1
          <br>
          关注
        </div>
        <div>
          32
          <br>
          粉丝
        </div>
      </div>
    </div>
    <div class="mine-article-info">
      <ul>
        <li>
          <i class="fa fa-lock fa-fw"></i> 私密文章
          <span>5</span>
        </li>
        <li>
          <i class="fa fa-bookmark fa-fw"></i> 收藏的文章
          <span>5</span>
        </li>
        <li>
          <i class="fa fa-heart fa-fw"></i> 喜欢的文章
          <span>45</span>
        </li>
      </ul>
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
import Blogheader from '../components/Blogheader'
import Navbar from '../components/Navbar'

export default {
  name: 'mine',
  data(){
    return {
      msg: '我的',
      logined: false,
      userInfo: {}
    }
  },
  methods: {
    getUserInfo: function(){
      if(localStorage.userInfo){
        this.logined = true;
        this.userInfo = JSON.parse(localStorage.userInfo);
      }
    }
  },
  created(){
    this.getUserInfo();
  },
  components: {
    Blogheader,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .main {

    .mine-article-info {

      ul {
        list-style: none;

        li {
          padding: 0 10px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          border-bottom: 1px solid #e7e7e7;

          i {
            font-size: 20px;
          }

          span {
            float: right;
          }
        }
      }
    }
  }
</style>
