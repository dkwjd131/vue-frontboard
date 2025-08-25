<template>
  <div>
    <el-button class="modal-btn" type="danger" round @click="elmDialogVisible = true">Element-UI Modal</el-button>
    <el-dialog title="Element UI Dialog" :visible.sync="elmDialogVisible" width="30%" :before-close="handleClose">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="elmDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="elmDialogVisible = fasle">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ElementUIDialog',
  data() {
    return {
      elmDialogVisible: false };
    },
  methods: {
    dragModalBtnClick() {
      this.dragDialogVisible = !this.dragDialogVisible;
    }
  }
};
</script>
