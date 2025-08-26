<template>
  <div class="app-wrapper">
    <Header @menuClick="handleCollapse" />
    <div class="app-body">
      <div class="sidebar">
        <SideNav :isCollapse="isCollapse" />
      </div>
      <div class="main">
        <section><app-main /></section>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue';
import AppMain from './components/AppMain.vue';
import Header from './components/Header.vue';

export default {
  name: 'Layout',
  components: { SideNav, AppMain, Header },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style>
.app-wrapper {
  width: 100%;
  height: 100%;
}
.app-body {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
}
.sidebar {
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  padding: 15px 30px;
  background: #f7f7f8;
}
</style>
