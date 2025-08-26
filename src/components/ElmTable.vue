<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :header-cell-style="headerCellStyle"
    :cell-style="cellStyle"
  >
    <el-table-column prop="no" label="No" width="40" align="center" />
    <el-table-column prop="date" label="Date" header-align="center" />
    <el-table-column label="재생" width="50" header-align="center" align="center">
      <template>
        <el-button icon="el-icon-video-play" size="mini" circle />
      </template>
    </el-table-column>
    <el-table-column label="수정" header-align="center" align="center">
      <template>
        <el-button size="mini">수정</el-button>
      </template>
    </el-table-column>
    <el-table-column label="삭제" header-align="center" align="center">
      <template>
        <el-button size="mini">삭제</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        no: 1,
        date: '2016-05-03'
      }, {
        no: 2,
        date: '2016-05-02'
      }, {
        no: 3,
        date: '2016-05-04'
      }, {
        no: 4,
        date: '2016-05-01'
      }, {
        no: 4,
        date: '2016-05-01'
      }, {
        no: 4,
        date: '2016-05-01'
      }, {
        no: 4,
        date: '2016-05-01'
      }, {
        no: 4,
        date: '2016-05-01'
      }, {
        no: 4,
        date: '2016-05-01'
      }, {
        no: 4,
        date: '2016-05-01'
      }]
    };
  },
  methods: {
    headerCellStyle({ row, rowIndex }) {
      if (rowIndex == 0) {
        return {
          background: '#a6bca7',
          color: '#fff',
          fontWeight: 400
        };
      }
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        return {
          fontSize: '11px'
        };
      }
    }
  }
};
</script>
