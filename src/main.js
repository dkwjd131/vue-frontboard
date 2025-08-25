import Vue from 'vue';
import App from './App.vue';

var STORAGE_KEY = 'todos-vuekr-demo';
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    );
    todos.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

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

Vue.use(Element, { locale });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
