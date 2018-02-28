<template>
  <div class="navbar">
    <div class="navbar-nav">
      <router-link to="/" exact>
        <i class="fa fa-home"></i>
        首页
      </router-link>
    </div>
    <div class="navbar-nav">
      <router-link to="/articleTypes">
        <i class="fa fa-compass"></i>
        发现
      </router-link>
    </div>

    <div class="navbar-nav">
      <router-link to="/photos">
        <i class="fa fa-bell"></i>
        消息
      </router-link>
    </div>
    <div class="navbar-nav">
      <router-link to="/mine">
        <i class="fa fa-user-secret"></i>
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
    border-top: 1px solid red;
    width: 100%;
    height: 45px;
    background-color: #fff;

    .navbar-nav {
      width: 20%;
      line-height: 45px;
      text-align: center;

      a {
        color: red;
        text-decoration: none;
      }
    }
  }
</style>
