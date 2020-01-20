<template>
  <div>
    <div>
        <el-table class :data="tableData" border style="width: 98%;margin: 20px auto;">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column width='150' label="操作" prop="discount">
            <template>
              <el-button type="text" size="mini">修改</el-button>
              <el-button type="text" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.el-tabs--border-card {
  box-shadow: none !important;
  border: none;
}
.el-row {
  margin-bottom: 20px;
  margin-left: 0 !important;
  margin-right: 0 !important;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  width: 20%;
}
.el-col:first-child {
  padding-left: 0 !important;
}
.el-col:last-child {
  padding-right: 0 !important;
}
.el-col > div {
  padding: 15px;
}
.bg-purple-dark {
  background: #f2f2f2;
}
.bg-purple {
  background: #f2f2f2;
}
.bg-purple-light {
  background: #f2f2f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bg_1 {
  background: #36a4fb;
}
.bg_2 {
  background: #729fda;
}
.bg_3 {
  background: #ffd25f;
}
.bg_4 {
  background: #38c4c5;
}
.bg_5 {
  background: #736bd8;
}
.tab_right > span {
  display: block;
}
.w_h_50 i {
  color: #fff;
  font-size: 32px;
  text-align: center;
  line-height: 50px;
}
.tab_right {
  margin-left: 4%;
}
.tab_right > span {
  display: block;
  line-height: 25px;
}
</style>