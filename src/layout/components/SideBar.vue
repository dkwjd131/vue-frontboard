<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" default-openeds='["1","1-4"]' @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location" />
        <span>Components</span>
      </template>
      <el-menu-item-group title="2D Chart">
        <el-menu-item index="1-1">amchart</el-menu-item>
        <el-menu-item index="1-2">ligntning chart</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="3D Chart">
        <el-menu-item index="1-3">ligntning chart</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">Dialog</template>
        <el-menu-item index="1-4-1">Dialog Drag</el-menu-item>
        <el-menu-item index="1-4-2">Element UI</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu" />
      <span>Todo board</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    handleSelect(key, keyPath) {
      if (key == '1-1') {
        this.$router.push('/home/2dchart/amchart');
      } else if (key == '1-2') {
        this.$router.push('/home/2dchart/lightningChart');
      } else if (key == '1-3') {
        this.$router.push('/home/3dchart/lightningChart');
      } else if (key == '1-4-1') {
        this.$router.push('/home/dialog/dialog-drag');
      } else if (key == '1-4-2') {
        this.$router.push('/home/dialog/elementUI');
      }
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
}
</style>
