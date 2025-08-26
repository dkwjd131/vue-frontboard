<template>
  <div id="chartdiv" ref="chartdiv" class="card" style="width: 650px; height: 400px; padding: 0px" />
</template>

<script>
import { columnAmChart } from '../assets/js/columnAmChart';

export default {
  mounted() {
    columnAmChart(this.$refs.chartdiv);
  }
};

</script>
