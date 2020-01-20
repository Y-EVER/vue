<template>
  <div>
    <div class="add">
      <h1 class="m_b_15">添加商品</h1>
      <div class="add_f">
        <el-form class="flex flex_a_c" ref="form" :model="good" label-width="80px">
          <el-input placeholder="商品名称" v-model="good.name" clearable></el-input>
          <div class="flex img_div">
            <el-input placeholder="图片路径" v-model="good.img_url" clearable></el-input>
            <el-upload class="upload-demo" action :on-change="handleChange" :file-list="fileList">
              <el-button type="primary">上传</el-button>
            </el-upload>
          </div>
          <el-select v-model="good.mold" allow-create filterable default-first-option clearable placeholder="商品类型">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
          <el-input placeholder="商品规格" v-model="good.specs" clearable></el-input>
          <el-input placeholder="商品单位" v-model="good.unit" clearable></el-input>
          <el-input placeholder="商品单价" v-model="good.price" clearable></el-input>
          <el-input placeholder="商品折扣价" v-model="good.discount" clearable></el-input>
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
          <el-table-column label="商品名称" prop="name"></el-table-column>
          <el-table-column label="图片" prop="img_url">
              <template>
              <el-button size="mini">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column label="商品类型" prop="mold"></el-table-column>
          <el-table-column label="商品规格" prop="specs"></el-table-column>
          <el-table-column label="商品单位" prop="unit"></el-table-column>
          <el-table-column label="商品单价" prop="price"></el-table-column>
          <el-table-column label="商品折扣价" prop="discount">
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
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
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

<style lang="less" scoped>
h1 {
  font-size: 16px;
  color: #181818;
}
.add_f {
  .el-input,
  .el-select {
    width: 11.5%;
    margin-right: 1%;
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
</style>