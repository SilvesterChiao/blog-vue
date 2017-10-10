<template>
  <div class="app">
    <header>
      <div class="header-inner">
        <nav>
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <template v-if="message">
              <li class="entry">
                <a href="#" @click="logout">退出</a>
                <!-- <router-link to="/logout">退出</router-link> -->
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
            <!-- <li v->

            </li> -->
          </ul>
        </nav>
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
      msg: 'hello'
    }
  },
  methods: {
    logout: function(){
      localStorage.removeItem('userInfo');
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/index.scss';
.app {
  padding-bottom: 40px;
  min-width: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
