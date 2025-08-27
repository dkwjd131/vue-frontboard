<template>
  <div class="flex dashboard">
    <div class="card table">
      <ElmTable />
    </div>
    <div class="card">
      <LightningChart1 />
    </div>
    <div class="card">
      <div class="filter">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="~"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="mini"
          prefix-icon="el-icon-date"
          :clearable="false"
          style="max-width: 300px;"
        />
        <el-button type="success" @click="handleDateClick()">조회</el-button>
      </div>
      <div>시작일 : {{ startDate }}</div>
      <div>종료일 : {{ endDate }}</div>
    </div>
  </div>
</template>

<script>
import ElmTable from '../components/ElmTable.vue';
import LightningChart1 from './LightningChart1.vue';
import { getFullDateToString } from '../utils/dateFormat';

export default {
  name: 'DashBoard',
  components: { ElmTable, LightningChart1 },
  data() {
    return {
      value1: [new Date(), new Date()],
      startDate: '',
      endDate: ''
    };
  },
  mounted() {
      this.startDate = getFullDateToString(this.value1[0]);
      this.endDate = getFullDateToString(this.value1[1]);
  },
  methods: {
    handleDateClick() {
      var start = this.value1[0];
      var end = this.value1[1];
      this.startDate = getFullDateToString(start);
      this.endDate = getFullDateToString(end);
    }
  }
};
</script>

<style>
/* .el-date-editor--datetimerange.el-input__inner {
  max-width: 300px;
} */

.el-date-editor .el-range-input {
  flex-grow: 1;
}

.el-date-editor .el-range__close-icon {
  width: 0px;
}

.el-button {
  font-size: 10px;
  padding: 7px 5px;
  margin-left: 10px;
}
</style>
