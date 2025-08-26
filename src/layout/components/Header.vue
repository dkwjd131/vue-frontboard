<template>
  <div class="wrapper">
    <i class="el-icon-s-grid icon" @click="menuClick" />
    <div class="title">KEPCO</div>
    <i class="el-icon-bell icon" />
    <i class="el-icon-headset icon" />
    <i class="el-icon-user icon" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    menuClick() {
      this.$emit('menuClick');
    }
  }
};
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 50px;
  background: #ffffff;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.icon {
  color: #5a5a5a;
  font-size: 20px;
  cursor: pointer;
}

.title {
  color: #5a5a5a;
  font-weight: 500;
  width: 100%;
}
</style>
