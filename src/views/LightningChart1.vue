<template>
  <div :id="chart3dId" style="width: 100%; height: 100%;">3D Chart</div>
</template>

<script>
import { lightningChart, LUT, PalettedFill, emptyLine, AxisScrollStrategies, AxisTickStrategies, regularColorSteps, Themes } from '@lightningchart/lcjs';
import audio2ch from '../assets/data/audio2ch.json';

export default {
  name: 'LightningChart1',
  data() {
    // Add the chart to the data in a way that Vue will not attach it's observers to it.
    // If the chart variable would be added in the return object, Vue would attach the observers and
    // every time LightningChart JS made a change to any of it's internal variables, vue would try to observe the change and update.
    // Observing would slow down the chart a lot.
    this.dashboard = null;
    return {
      chart3dId: null
    };
  },
  beforeMount() {
    // Generate random ID to us as the containerId for the chart and the target div id
    this.chart3dId = Math.trunc(Math.random() * 1000000);
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const historyMs = 27 * 1000;
      // Sampling rate as samples per second.
      const sampleRateHz = 35;
      // Minimum time step that can be displayed by the heatmap. In this example, set to half of average interval between samples. In normal applications you can set this to some comfortably small value.
      // Smaller value means more precision but more RAM and GPU memory usage.
      const heatmapMinTimeStepMs = (0.5 * 1000) / sampleRateHz;

      // Create empty dashboard and charts.
      // NOTE: Using `Dashboard` is no longer recommended for new applications. Find latest recommendations here: https://lightningchart.com/js-charts/docs/basic-topics/grouping-charts/
      this.dashboard = lightningChart({
        license: '0002-n9xRML+Glr3QwdvnJVsvK6cQVxjGKwDdUQmrn5+yxNjS6P3j9y5OhH9trO5ekaGLuGtbex7ogsCXLl9yKKX4HGcV-MEYCIQDv+5zIdiAu7CLpFCIwjTAfgzsKZUW8vcWsAYGlqWsNvgIhAPUML6w6txdfzdtl94qP69Wb9Lj1ijkB8+XuNjs0qzrn',
        licenseInformation: {
          appTitle: 'LightningChart JS Trial',
          company: 'LightningChart Ltd.'
        }
      }).Chart3D({ container: `${this.chart3dId}`, theme: Themes.lightNature, legend: { visible: false }, columnIndex: audio2ch.ch2.columnIndex, rowIndex: 1 });

      const rowStep = 40;
      const intensityValueToDb = (value) => -100 + (value / 255) * (-30 - -100);

      this.dashboard.axisX
        .setScrollStrategy(AxisScrollStrategies.scrolling)
        .setDefaultInterval((state) => ({ end: state.dataMax, start: (state.dataMax ?? 0) - historyMs, stopAxisAfter: false }));
      this.dashboard.axisY
        .setTitle('Intensity')
        .setUnits('dB')
        .setTickStrategy(AxisTickStrategies.Numeric, (ticks) =>
          ticks.setFormattingFunction((y) => intensityValueToDb(y).toFixed(0))
        );
      this.dashboard.getDefaultAxisZ().setTitle('Frequency').setUnits('Hz');

      // Define value -> color lookup table.
      const theme = this.dashboard.getTheme();
      const lut = new LUT({
        steps: regularColorSteps(0, 255, theme.examples.spectrogramColorPalette),
        units: 'dB',
        interpolate: true
      });

      const rows = audio2ch.ch2[0].length;
      const surfaceSeries3D = this.dashboard
        .addSurfaceScrollingGridSeries({
          scrollDimension: 'columns',
          columns: Math.ceil(historyMs / heatmapMinTimeStepMs),
          rows
        })
        .setStep({ x: heatmapMinTimeStepMs, z: rowStep })
        .setFillStyle(new PalettedFill({ lut, lookUpProperty: 'y' }))
        .setWireframeStyle(emptyLine);

      let tFirstSample;
      const handleIncomingData = (channel, timestamp, sample) => {
        if (!tFirstSample) {
          tFirstSample = timestamp;
          this.dashboard.axisX.setTickStrategy(AxisTickStrategies.DateTime, (strategy) =>
            strategy.setDateOrigin(new Date(tFirstSample))
          );
        }
        // Calculate sample index from timestamp to place sample in correct location in heatmap.
        const iSample = Math.round((timestamp - tFirstSample) / heatmapMinTimeStepMs);
        surfaceSeries3D.invalidateValues({
          iSample,
          yValues: [sample]
        });
      };

      let iData = 0;
      let tPrev = Date.now();
      let dModulus = 0;
      const streamData = () => {
        const tNow = Date.now();
        let addDataPointCount = ((tNow - tPrev) * sampleRateHz) / 1000 + dModulus;
        dModulus = addDataPointCount % 1;
        addDataPointCount = Math.floor(addDataPointCount);
        for (let i = 0; i < addDataPointCount; i += 1) {
          const timestamp = tPrev + ((i + 1) / addDataPointCount) * (tNow - tPrev);
          const sample = audio2ch.ch2[(iData + i) % audio2ch.ch2.length];
          handleIncomingData(audio2ch.ch2, timestamp, sample);
        }
        iData += addDataPointCount;
        tPrev = tNow;
        requestAnimationFrame(streamData);
      };
      streamData();
    }
  }
};

</script>
