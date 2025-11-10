<template>
  <div>
    <div id="chartdiv" ref="chartdiv" class="card" style="width: 650px; height: 400px; padding: 0px" />
  </div>
</template>

<script>
import { columnAmChart } from '../assets/js/columnAmChart';
import { mapMutations } from 'vuex';

export default {
  name: 'ColumnChart',
  created() {
    console.log(this.$route.matched);
    var newBreadcrumb = this.$route.matched.map(item => {
      return item.name;
    });
    this.SET_BREADCRUMB(newBreadcrumb);
  },
  mounted() {
    columnAmChart(this.$refs.chartdiv);
  },
  methods: {
    ...mapMutations('app', ['SET_BREADCRUMB'])
  }
};

</script>
