<template>
  <div class="navbar">
    <div class="navbar-nav">
      <i class="fa fa-home"></i>
      <router-link to="/" exact>
        首页
      </router-link>
    </div>
    <div class="navbar-nav">
      <i class="fa fa-home"></i>
      <router-link to="/articleTypes">
        发现
      </router-link>
    </div>

    <div class="navbar-nav">
      <i class="fa fa-home"></i>
      <router-link to="/photos">
        消息
      </router-link>
    </div>
    <div class="navbar-nav">
      <i class="fa fa-home"></i>
      <router-link to="/mine">
        我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data(){
    return {
      msg: 'navbar'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    border-top: 1px solid #e7e7e7;
    width: 100%;
    height: 45px;
    background-color: #fff;

    .navbar-nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20%;
      line-height: 45px;
      text-align: center;
      color: #5d656b;

      i {
        font-size: 24px;
      }

      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-decoration: none;
        font-size: 12px;
        color: #5d656b;
      }
    }
  }
</style>
