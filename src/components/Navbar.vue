<template>
  <div class="navbar">
    <div class="navbar-nav">
      关注
    </div>
    <div class="navbar-nav">
      发现
    </div>
    <div class="navbar-nav">
      消息
    </div>
    <div class="navbar-nav">
      我的
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
      width: 25%;
      line-height: 45px;
      text-align: center;
    }
  }
</style>
