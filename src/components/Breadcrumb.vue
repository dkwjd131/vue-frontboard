<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="title in this.breadcrumb" :key="title">{{ title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Breadcrumb',
  computed: {
    ...mapGetters(['breadcrumb'])
  }
};
</script>

<style>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
