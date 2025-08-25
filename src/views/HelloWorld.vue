<template>
  <div class="hello">
    <el-button type="success" icon="el-icon-check" circle />
    <TodoBoard />
  </div>
</template>

<script>
import TodoBoard from './TodoBoard.vue';

export default {
  name: 'HelloWorld',
  components: { TodoBoard },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to colse this dialog?').then(_ => {
        done();
      }).catch(_ => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.contain {
  border: 1px solid rgb(0, 0, 0);
  min-height: 500px;
}

.modal-btn {
  margin-bottom: 20px;
}
</style>
