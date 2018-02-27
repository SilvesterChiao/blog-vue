<template>
  <div class="main">
    <h3>
      <span>{{ msg }}</span>
    </h3>
    <el-row :gutter="24">
      <el-col :span="8" :offset="2">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input size="small" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input size="small" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'register',
  data () {
    return {
      msg: '注册页',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      var newUser = {
        username: this.form.username,
        password: this.form.password
      };

      axios.post('http://localhost:3000/users', newUser)
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
