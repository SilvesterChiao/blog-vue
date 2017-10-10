<template>
  <div class="entry">
    <h3>
      <span>{{ msg }}</span>
    </h3>
    <form>
      <div class="control-group">
        <label for="username">
          用户名
        </label>
        <div class="controls">
          <input id="username" type="text" v-model="username">
        </div>
      </div>
      <div class="control-group">
        <label for="password">
          密码
        </label>
        <div class="controls">
          <input id="password" type="password" v-model="password">
        </div>
      </div>
      <div class="control-group">
        <div class="controls">
          <button v-on:click.prevent="login">登陆</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'login',
  data () {
    return {
      msg: '登陆页',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.get('http://localhost:3000/user?username=' + this.username)
        .then(function(response){
          console.log(response.data[0]);
          if(response.data[0].password === this.password){
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
