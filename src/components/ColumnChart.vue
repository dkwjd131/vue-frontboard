<template>
  <div id="chartdiv" style="width: 650px; height: 400px;" ref="chartdiv"></div>
</template>

<script>
import { columnAmChart } from '../assets/js/columnAmChart';

export default {
  mounted() {
    columnAmChart(this.$refs.chartdiv);
  }
}
</script>