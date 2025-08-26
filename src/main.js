import Vue from 'vue';
import App from './App.vue';
import router from './router';
/* eslint-disable */
import AmCharts from "amcharts3";
import AmSerial from "amcharts3/amcharts/serial";
import AMGantt from "amcharts3/amcharts/gantt";
import AMGauge from "amcharts3/amcharts/gauge";
import AMFunnel from "amcharts3/amcharts/funnel";
import AMPie from "amcharts3/amcharts/pie";
import AMRadar from "amcharts3/amcharts/radar";
import AMXy from "amcharts3/amcharts/xy";

// element-ui
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko';
import 'element-ui/lib/theme-chalk/index.css';

// css
import './assets/css/basic.css';

Vue.use(Element, { locale });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
