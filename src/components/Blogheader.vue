<template>
  <header>
    <div class="header-inner">
      <slot>
        <span class="header-title">首页</span>
      </slot>
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
</template>

<script>
export default {
  name: 'Blogheader',
  data(){
    return {
      msg: 'header'
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  position: fixed;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid rgba(30,35,42,.06);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
  background-clip: content-box;
  background-color: #fff;

  .header-inner {
    margin: 0 auto;
    padding: 0 16px;
    width: 100%;
    height: 56px;
    box-sizing: border-box;

    .header-title {
      display: inline-block;
      height: 56px;
      line-height: 56px;
      // color: blue;
    }

    .header-tool {
      float: right;
      height: 56px;
      line-height: 56px;
    }

    nav{
      overflow: hidden;

      ul {
        overflow: hidden;
        list-style-type: none;

        li {
          float: left;
          height: 56px;
          line-height: 56px;

          &.entry {
            float: right;
          }

          &:first-child a {
            padding-left: 0;
          }

          a {
            padding: 10px;
            text-decoration: none;
            color: #8590a6;

            &:hover {
              color: #175199;
            }

            &.router-link-active {
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
