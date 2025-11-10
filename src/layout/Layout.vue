<template>
  <div class="app-wrapper">
    <Header @menuClick="handleCollapse" />
    <div class="app-body">
      <div class="sidenav">
        <SideNav :isCollapse="isCollapse" />
      </div>
      <div class="main">
        <Breadcrumb />
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue';
import AppMain from './components/AppMain.vue';
import Header from './components/Header.vue';
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  name: 'Layout',
  components: { SideNav, AppMain, Header, Breadcrumb },
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
