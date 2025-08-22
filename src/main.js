import Vue from 'vue'
import App from './App.vue'

/* eslint-disable */
import AmCharts from "amcharts3";
import AmSerial from "amcharts3/amcharts/serial";
import AMGantt from "amcharts3/amcharts/gantt";
import AMGauge from "amcharts3/amcharts/gauge";
import AMFunnel from "amcharts3/amcharts/funnel";
import AMPie from "amcharts3/amcharts/pie";
import AMRadar from "amcharts3/amcharts/radar";
import AMXy from "amcharts3/amcharts/xy";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
