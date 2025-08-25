<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button class="modal-btn" type="primary" round @click="dragModalBtnClick()">Dialog Drag Modal</el-button>
    <el-button class="modal-btn" type="success" round @click="elmDialogVisible = true">Element-UI Modal</el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <TodoBoard />
    <div class="contain" style="display: flex; justify-content: center;">
      <BaseModal v-if="dragDialogVisible" />
      <el-dialog title="Element UI Dialog" :visible.sync="elmDialogVisible" width="30%" :before-close="handleClose">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="elmDialogVisible=false">Cancel</el-button>
          <el-button type="primary" @click="elmDialogVisible=fasle">Confirm</el-button>
        </span>
      </el-dialog>
      <ColumnChart />
      <LCJS :points="points" />
      <LightningChart />
    </div>
  </div>
</template>

<script>
import BaseModal from '../components/BaseModal.vue';
import ColumnChart from '../components/ColumnChart.vue';
import LCJS from '../components/LCJS.vue';
import LightningChart from '../components/LightningChart.vue';
import TodoBoard from './TodoBoard.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { BaseModal, ColumnChart, LCJS, LightningChart, TodoBoard },
  data() {
    return {
      dragDialogVisible: false,
      elmDialogVisible: false,
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 7 },
        { x: 2, y: 3 },
        { x: 3, y: 10 },
        { x: 4, y: 12 },
        { x: 5, y: 9 },
        { x: 6, y: 15 }
      ]
    };
  },
  methods: {
    dragModalBtnClick() {
      this.dragDialogVisible = !this.dragDialogVisible;
    },
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
