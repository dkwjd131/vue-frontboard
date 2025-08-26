<template>
  <div :id="chart3dId" style="width: 650px; height: 400px;">3D Chart</div>
</template>

<script>
import { lightningChart, LUT, PalettedFill, emptyLine, AxisScrollStrategies, AxisTickStrategies, regularColorSteps, Themes } from '@lightningchart/lcjs';
import audio2ch from '../assets/data/audio2ch.json';

export default {
    name: 'LightningChart',
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
            })
                .Dashboard({
                    container: `${this.chart3dId}`,
                    numberOfColumns: 2,
                    numberOfRows: 2,
                    theme: Themes.lightNature
                })
                .setRowHeight(0, 1)
                .setRowHeight(1, 2);

            let labelLoading = this.dashboard.addUIElement().setText('Loading example data ...');

            // Load example data from file.

            labelLoading.dispose();
            labelLoading = undefined;

            // Define value -> color lookup table.
            const theme = this.dashboard.getTheme();
            const lut = new LUT({
                steps: regularColorSteps(0, 255, theme.examples.spectrogramColorPalette),
                units: 'dB',
                interpolate: true
            });

            const rowStep = 40;
            const intensityValueToDb = (value) => -100 + (value / 255) * (-30 - -100);

            let channelList = [
                {
                    name: 'Channel 1',
                    data: audio2ch.ch1,
                    columnIndex: 0
                },
                {
                    name: 'Channel 2',
                    data: audio2ch.ch2,
                    columnIndex: 1
                }
            ];

            // eslint-disable-next-line no-unused-vars
            channelList = channelList.map((channel, iii) => {
                const rows = channel.data[0].length;
                const chart2D = this.dashboard
                    .createChartXY({
                        legend: { visible: false },
                        columnIndex: channel.columnIndex,
                        rowIndex: 0
                    })
                    .setTitle(`${channel.name} | 2D audio spectrogram`);
                chart2D.axisX
                    .setScrollStrategy(AxisScrollStrategies.scrolling)
                    .setDefaultInterval((state) => ({ end: state.dataMax, start: (state.dataMax ?? 0) - historyMs, stopAxisAfter: false }));
                chart2D.axisY.setTitle('Frequency').setUnits('Hz');

                const chart3D = this.dashboard
                    .createChart3D({
                        legend: { visible: false },
                        columnIndex: channel.columnIndex,
                        rowIndex: 1
                    })
                    .setTitle(`${channel.name} | 3D audio spectrogram`);

                chart3D.axisX
                    .setScrollStrategy(AxisScrollStrategies.scrolling)
                    .setDefaultInterval((state) => ({ end: state.dataMax, start: (state.dataMax ?? 0) - historyMs, stopAxisAfter: false }));
                chart3D.axisY
                    .setTitle('Intensity')
                    .setUnits('dB')
                    .setTickStrategy(AxisTickStrategies.Numeric, (ticks) =>
                        ticks.setFormattingFunction((y) => intensityValueToDb(y).toFixed(0))
                    );
                chart3D.getDefaultAxisZ().setTitle('Frequency').setUnits('Hz');

                const heatmapSeries2D = chart2D
                    .addHeatmapScrollingGridSeries({
                        scrollDimension: 'columns',
                        resolution: rows
                    })
                    .setStep({ x: heatmapMinTimeStepMs, y: rowStep })
                    .setFillStyle(new PalettedFill({ lut }))
                    .setWireframeStyle(emptyLine)
                    .setDataCleaning({ maxDataPointCount: 10000 });

                const surfaceSeries3D = chart3D
                    .addSurfaceScrollingGridSeries({
                        scrollDimension: 'columns',
                        columns: Math.ceil(historyMs / heatmapMinTimeStepMs),
                        rows
                    })
                    .setStep({ x: heatmapMinTimeStepMs, z: rowStep })
                    .setFillStyle(new PalettedFill({ lut, lookUpProperty: 'y' }))
                    .setWireframeStyle(emptyLine);

                return { ...channel, chart2D, chart3D, heatmapSeries2D, surfaceSeries3D };
            });

            let tFirstSample;
            const handleIncomingData = (channel, timestamp, sample) => {
                if (!tFirstSample) {
                    tFirstSample = timestamp;
                    channelList.forEach((ch) => {
                        ch.chart2D.axisX.setTickStrategy(AxisTickStrategies.DateTime, (strategy) =>
                            strategy.setDateOrigin(new Date(tFirstSample))
                        );
                        ch.chart3D.axisX.setTickStrategy(AxisTickStrategies.DateTime, (strategy) =>
                            strategy.setDateOrigin(new Date(tFirstSample))
                        );
                    });
                }
                // Calculate sample index from timestamp to place sample in correct location in heatmap.
                const iSample = Math.round((timestamp - tFirstSample) / heatmapMinTimeStepMs);
                channel.heatmapSeries2D.invalidateIntensityValues({
                    iSample,
                    values: [sample]
                });
                channel.surfaceSeries3D.invalidateValues({
                    iSample,
                    yValues: [sample]
                });
            };

            // Setup infinite streaming from static data set.
            let iData = 0;
            let tPrev = Date.now();
            let dModulus = 0;
            const streamData = () => {
                const tNow = Date.now();
                let addDataPointCount = ((tNow - tPrev) * sampleRateHz) / 1000 + dModulus;
                dModulus = addDataPointCount % 1;
                addDataPointCount = Math.floor(addDataPointCount);
                channelList.forEach((channel) => {
                    for (let i = 0; i < addDataPointCount; i += 1) {
                        const timestamp = tPrev + ((i + 1) / addDataPointCount) * (tNow - tPrev);
                        const sample = channel.data[(iData + i) % channel.data.length];
                        handleIncomingData(channel, timestamp, sample);
                    }
                });
                iData += addDataPointCount;
                tPrev = tNow;
                requestAnimationFrame(streamData);
            };
            streamData();
        }
    }
};

</script>
