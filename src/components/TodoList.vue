<template>
  <div class="todo-list">
    <h3>todoList</h3>
    <!-- <el-input size="small" v-model="newTodoItem" @keydown.enter.native="addItem" placeholder="回车确认"></el-input> -->
    <div>
      <h5>已完成
        <span>{{ doneItemTotal }}</span>
      </h5>
      <div class="done-item" v-for="(todo, index) in todoList" :key="index" v-if="todo.done">
        <!-- <el-checkbox v-model="todo.done">
          {{ todo.title }}
        </el-checkbox> -->
      </div>
      <h5>进行中
        <span>{{ doingItemTotal }}</span>
      </h5>
      <div class="doing-item" v-for="(todo, index) in todoList" :key="index" v-if="!todo.done">
        <!-- <el-checkbox v-model="todo.done">
          {{ todo.title }}
        </el-checkbox> -->
      </div>
    </div>
  </div>
</template>

<script>

var mixin = {
  methods: {
    hello: function(){
      console.log('method from mixin');
    }
  },
  created: function(){
    this.hello();
  }
};

export default {
  name: 'todo',
  data: function(){
    return {
      msg: 'todolist',
      newTodoItem: '',
      todoList: [
        {
          title: '吃饭',
          done: true
        },
        {
          title: '睡觉',
          done: false
        }
      ]
    }
  },
  methods: {
    addItem: function(){
      if(this.newTodoItem === ''){
        return;
      }else{
        this.todoList.push({
          title: this.newTodoItem,
          done: false
        });
      }

      this.newTodoItem = '';
    }
  },
  mixins: [mixin],
  computed: {
    doneItemTotal(){
      var total = 0;
      this.todoList.forEach(function(item, index, array){
        if(item.done){
          total ++;
        }
      });

      return total;
    },
    doingItemTotal(){
      var total = 0;
      this.todoList.forEach(function(item, index, array){
        if(!item.done){
          total ++;
        }
      });

      return total;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

