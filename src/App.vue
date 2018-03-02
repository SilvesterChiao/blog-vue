<template>
  <div class="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <footer>
      页脚
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['message'],
  data () {
    return {
      msg: 'hello',
      searchString: ''
    }
  },
  methods: {
    logout: function(){
      localStorage.removeItem('userInfo');
      this.$router.replace({ path: '/' })
    },
    search: function(){
      console.log(this.searchString);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/index.scss';
.app {
  padding-bottom: 46px;
  min-width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.search-box {
  // .el-input {
  //   width: auto;
  // }
}
</style>
