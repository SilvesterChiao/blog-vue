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
          <button v-on:click.prevent="register">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'register',
  data () {
    return {
      msg: '注册页',
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      var newUser = {
        username: this.username,
        password: this.password
      };

      axios.post('http://localhost:3000/user', newUser)
        .then(function(response){
          console.log(response);
        }).catch(function(error){
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
