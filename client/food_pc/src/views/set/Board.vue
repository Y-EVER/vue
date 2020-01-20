<template>
  <div class="v_g_tables">
    <div class="add">
      <h1 class="m_b_15">添加餐桌</h1>
      <div class="add_f">
        <el-form class="flex flex_a_c" ref="form" :model="good" label-width="80px">
          <el-input placeholder="餐桌数量" v-model="good.name" clearable></el-input>
          <el-select v-model="good.mold" allow-create filterable default-first-option clearable placeholder="餐桌类型" >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
          </el-select>
          <el-input placeholder="餐位费" v-model="good.specs" clearable></el-input>
          <el-button class="but_w" type="primary">添加</el-button>
        </el-form>
      </div>
    </div>
    <div class="sele">
      <h1 class="m_b_15 m_t_15">商品列表</h1>
      <div>
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
        >
          <el-table-column label="餐桌编号" prop="name"></el-table-column>
          <el-table-column label="餐桌类型" prop="mold"></el-table-column>
          <el-table-column label="餐位费" prop="specs"></el-table-column>
          <el-table-column label="操作" prop="discount" width='200'>
            <template>
              <el-button size="mini">修改</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      good: {
        name: "",
        img_url: "",
        mold: "",
        specs: "",
        unit: "",
        price: "",
        discount: ""
      },
      options: [
        {
          value: "01",
          label: "普通餐桌"
        },
        {
          value: "02",
          label: "雅间餐桌"
        },
      ],
      fileList: [],
      tableData: [
        {
          name: "豆腐脑",
          img_url: "../../assets/images/s1.jpg",
          mold: "素菜",
          specs: 200,
          unit: "g",
          price: 4,
          discount: 3.8
        },
        {
          name: "豆腐脑",
          img_url: "../../assets/images/s1.jpg",
          mold: "素菜",
          specs: 200,
          unit: "g",
          price: 4,
          discount: 3.8
        },
        {
          name: "豆腐脑",
          img_url: "../../assets/images/s1.jpg",
          mold: "素菜",
          specs: 200,
          unit: "g",
          price: 4,
          discount: 3.8
        }
      ],
      search: ""
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    }
  }
};
</script>

<style lang="less" >
.v_g_tables {
  background: #fff;
  padding: 20px 1%;
}
h1 {
  font-size: 16px;
  color: #181818;
}
.add_f {
  width:50%;
  .el-input,
  .el-select {
    width: 25%;
    margin-right: 1%;
  }
  .el-select .el-input {
    width: 100% !important;
  }
}
.add_f .img_div {
  width: 20%;
  margin-right: 1%;
}
.add_f .img_div .el-input {
  width: 80%;
  margin-right: 0;
}
.add_f .img_div {
  .el-button {
    border-radius: 0 2px 2px 0;
  }
}
// .but_w {
//   width: 4%;
// }
.sele .el-table {
  width: 99.9% !important;
  padding-bottom: 1px;
}
.sele thead tr th {
  border-top: 1px solid #ebeef5;
  background: #f4f8fd;
}
.sele thead tr th:first-child {
  border-left: 1px solid #ebeef5;
}
.sele thead tr th:nth-child(4) {
  border-right: 1px solid #ebeef5;
}
.sele tbody tr td {
  border-right: 1px solid #ebeef5;
}
.sele tbody tr td:first-child {
  border-left: 1px solid #ebeef5;
}
.sele tbody tr:last-child td {
  border-bottom: 1px solid #ebeef5;
}
</style>