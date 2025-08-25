<template>
  <div :id="chartId" class="fill" />
</template>

<script>
import { lightningChart, emptyFill } from '@lightningchart/lcjs';

export default {
  name: 'LCJS',
  props: ['points'],
  data() {
    // Add the chart to the data in a way that Vue will not attach it's observers to it.
    // If the chart variable would be added in the return object, Vue would attach the observers and
    // every time LightningChart JS made a change to any of it's internal variables, vue would try to observe the change and update.
    // Observing would slow down the chart a lot.
    this.chart = null;
    return {
      chartId: null
    };
  },
  beforeMount() {
    // Generate random ID to us as the containerId for the chart and the target div id
    this.chartId = Math.trunc(Math.random() * 1000000);
  },
  mounted() {
    // Chart can only be created when the component has mounted the DOM because
    // the chart needs the element with specified containerId to exist in the DOM
    this.createChart();
  },
  methods: {
    createChart() {
      // Create chartXY
      this.lc = lightningChart({
        license: '0002-n9xRML+Glr3QwdvnJVsvK6cQVxjGKwDdUQmrn5+yxNjS6P3j9y5OhH9trO5ekaGLuGtbex7ogsCXLl9yKKX4HGcV-MEYCIQDv+5zIdiAu7CLpFCIwjTAfgzsKZUW8vcWsAYGlqWsNvgIhAPUML6w6txdfzdtl94qP69Wb9Lj1ijkB8+XuNjs0qzrn',
        licenseInformation: {
            appTitle: 'LightningChart JS Trial',
            company: 'LightningChart Ltd.'
        }
    });
      this.chart = this.lc.ChartXY({ container: `${this.chartId}` });
      // Set chart title
      this.chart.setTitle('Getting Started');
      // Add line series to the chart
      const lineSeries = this.chart
        .addPointLineAreaSeries({ dataPattern: 'ProgressiveX' })
        .setAreaFillStyle(emptyFill);
      // Set stroke style of the line
      lineSeries.setStrokeStyle((style) => style.setThickness(5));
      // Add data points to the line series
      lineSeries.appendJSON(this.points);
    }
  },
  beforeUnmount() {
    // "dispose" should be called when the component is unmounted to free all the resources used by the chart
    this.lc.dispose();
  }
};
</script>
<style scoped>
.fill {
  height: 500px;
  width: 500px
}
</style>
