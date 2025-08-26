<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#009749"
    text-color="#fff"
    active-text-color="#fff"
    :collapse="isCollapse"
    @select="handleSelect"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location" />
        <span>Components</span>
      </template>
      <el-menu-item index="1-1">2D amchart</el-menu-item>
      <el-menu-item index="1-2">2D ligntning chart</el-menu-item>
      <el-menu-item index="1-3">3D ligntning chart</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title">Dialog</template>
        <el-menu-item index="1-4-1">Dialog Drag</el-menu-item>
        <el-menu-item index="1-4-2">Element UI</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu" />
      <span>Dash Board</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['isCollapse'],
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
      } else if (key == '2') {
        this.$router.push('/dashboard');
      }
    }
  }
};
</script>

<style>
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
}
.el-menu-vertical-demo.el-menu--collapse {
  width: 100%;
  height: 100%;
}
.el-icon-location, .el-icon-menu ,.el-submenu__title i {
  color: #ffffff !important;
}
.el-menu-item-group {
  color: #fff;
}
</style>
