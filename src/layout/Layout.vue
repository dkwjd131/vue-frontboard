<template>
  <div class="app-wrapper">
    <div class="header">Vue Template</div>
    <div class="app-body">
      <div class="sidebar">
        <SideBar />
      </div>
      <div class="main">
        <section><app-main /></section>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'Layout',
  components: { SideBar, AppMain }
};
</script>

<style>
.app-wrapper {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 50px;
  background: #409eff;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
  padding-top: 15px;
}

.app-body {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
}

.sidebar {
  width: 200px;
  height: 100%;
}

.main {
  width: 100%;
  height: 100%;
  padding: 15px 30px;
}
</style>
