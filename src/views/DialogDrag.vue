<template>
  <div>
    <el-button class="modal-btn" type="success" round @click="dragModalBtnClick()">Dialog Drag Modal</el-button>
    <BaseModal v-if="dragDialogVisible" />
  </div>
</template>

<script>
import BaseModal from '../components/BaseModal.vue';

export default {
  name: 'DialogDrag',
  components: { BaseModal },
  data() {
    return {
      dragDialogVisible: false };
    },
  methods: {
    dragModalBtnClick() {
      this.dragDialogVisible = !this.dragDialogVisible;
    }
  }
};
</script>
