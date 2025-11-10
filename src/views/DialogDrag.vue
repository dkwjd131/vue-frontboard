<template>
  <div>
    <el-button class="modal-btn" type="success" round @click="dragModalBtnClick()">Dialog Drag Modal</el-button>
    <BaseModal v-if="dragDialogVisible" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BaseModal from '../components/BaseModal.vue';

export default {
  name: 'DialogDrag',
  components: { BaseModal },
  data() {
    return {
      dragDialogVisible: false };
  },
  created() {
    var newBreadcrumb = this.$route.matched.map(item => {
      return item.name;
    });
    this.SET_BREADCRUMB(newBreadcrumb);
  },
  methods: {
    dragModalBtnClick() {
      this.dragDialogVisible = !this.dragDialogVisible;
      console.log('drat', this.$route);
    },
    ...mapMutations('app', ['SET_BREADCRUMB'])
  }
};
</script>
