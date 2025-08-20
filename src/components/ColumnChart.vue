<template>
    <div id="chartdiv" style="width: 500px; height: 400px;" ref="chartdiv"></div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import { lineAmchart } from '@/assets/js/lineAmchart.js';

export default {
  mounted(){
     var root = am5.Root.new("chartdiv");
     this.root = root;

     var date = new Date();
     date.setHours(0, 0, 0, 0);
     var value = 100;

  function generateData() {
    value = Math.round((Math.random() * 10 - 5) + value);
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value
    };
  }

  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }
    var data = generateDatas(30);
    this.data = data;
    
    lineAmchart(this.root, this.data);
  }
}
</script>