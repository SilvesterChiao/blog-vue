<template>
  <div class="main">
    <div class="title">
      <h3>登陆</h3>
    </div>
    <div class="login-label">

      <form action="#">
        <div>
          <label for="user-name">
            <i class="fa fa-user"></i>
          </label>
          <input type="text" v-model="form.username">
        </div>
        <div>
          <label for="password">
            <i class="fa fa-lock"></i>
          </label>
          <input type="password" v-model="form.password">
        </div>
        <div>
          <button @click="login">登陆</button>
        </div>
      </form>
    </div>
    <div>
      <p>
        <router-link to="/register">新用户注册</router-link>
      </p>
    </div>
    <!-- <el-row :gutter="24">
      <el-col :span="8" :offset="2">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input size="small" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input size="small" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      msg: '登陆页',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios.get('http://localhost:9000/users?username=' + this.form.username)
        .then(function(response){
          console.log(response.data[0]);
          if(response.data[0].password === this.form.password){
            console.log("OK");
            var userInfo = {
              id: response.data[0].id,
              username: response.data[0].username,
              word: response.data[0].word,
              portrait: response.data[0].portrait,
              constellation: response.data[0].constellation,
              email: response.data[0].email
            };
            localStorage.userInfo = JSON.stringify(userInfo);
            this.$router.push({ path: '/' });
          }
        }.bind(this))
        .catch(function(error){
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './../assets/styles/entry.scss';
</style>
