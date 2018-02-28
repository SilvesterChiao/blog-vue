<template>
  <div class="main">
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
          <i class="fa fa-lock"></i> 私密文章
          <span>5</span>
        </li>
        <li>
          <i class="fa fa-bookmark"></i> 收藏的文章
          <span>5</span>
        </li>
        <li>
          <i class="fa fa-heart"></i> 喜欢的文章
          <span>45</span>
        </li>
      </ul>
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
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
    Navbar
  }
}
</script>

<style lang="scss" scoped>

</style>
