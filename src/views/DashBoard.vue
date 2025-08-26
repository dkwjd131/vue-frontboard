<template>
  <div class="flex dashboard">
    <div class="card table"><ElmTable /></div>
    <div class="card">chart</div>
    <div class="card">date</div>
  </div>
</template>

<script>
import ElmTable from '../components/ElmTable.vue';
export default {
  name: 'DashBoard',
  components: { ElmTable }
};
</script>
