<template>
  <div class="app">
    <header>
      <div class="header-inner">
        <span class="header-title">首页</span>
        <div class="header-tool">
          <i class="fa fa-search"></i>
        </div>
        <!-- <nav>
          <ul>
            <li>
              <router-link to="/" exact>首页</router-link>
            </li>
            <li>
              <div class="search-box">
                <form v-on:submit.prevent="search">
                  <el-input size="small" v-model="searchString" placeholder="搜索你感兴趣的内容..."></el-input>
                  <el-button type="primary" size="small">搜索</el-button>
                </form>
              </div>
            </li>
            <template v-if="message">
              <li class="entry">
                <a href="#" @click="logout">退出</a>
                <router-link to="/logout">退出</router-link>
              </li>
              <li class="entry">
                <router-link to="/addArticle">发布</router-link>
              </li>
            </template>
            <template v-else>
              <li class="entry">
                <router-link to="/register">注册</router-link>
              </li>
              <li class="entry">
                <router-link to="/login">登陆</router-link>
              </li>
            </template>
          </ul>
        </nav> -->
      </div>
    </header>
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
