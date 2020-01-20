<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="top_fix flex flex_b_c">
          <div class="top_left d_fix">
            <img src="@/assets/images/logo.png" alt />
          </div>
          <div class="top_right d_fix flex_b_c">
            <ul class="top_ul_one d_fix">
              <!-- <li><el-link href="/console" :underline="false">控制台</el-link></li> -->
            </ul>
            <ul class="top_ul_two d_fix">
              <li>
                <img src="@/assets/images/tx.jpg" alt />
              </li>
              <li>
                <span>退出登录</span>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="50%" style="background:#fff;border-right: 1px solid #f2f2f2;">
          <el-table class :data="tableData" border style="width: 98%;margin: 20px auto;">
            <el-table-column prop="name" label="品名" width="180"></el-table-column>
            <el-table-column prop="num" label="桌号" width="180"></el-table-column>
            <el-table-column prop="time" label="下单时间"></el-table-column>
            <el-table-column width="150" label="操作" prop="discount">
              <template>
                <el-button type="text" size="mini">已完成</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-aside>
        <el-main width="50%" style="background:#fff;">
          <el-table class :data="tableData" border style="width: 100%;margin: 0 auto;">
            <el-table-column prop="name" label="品名" width="180"></el-table-column>
            <el-table-column prop="num" label="桌号" width="180"></el-table-column>
            <el-table-column prop="time" label="下单时间"></el-table-column>
            <el-table-column width="150" label="操作" prop="discount">
              <template>
                <el-button type="text" size="mini">修改</el-button>
                <el-button type="text" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <el-footer>
        <div class="foot flex flex_b_c">
          <span>©2019 微虎信息. All Rights Reserved.</span>
          <span>常见问题</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "麻婆豆腐",
          num: "1份",
          time: "2020/01/16"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.container,
.el-container {
  width: 100%;
  height: 100%;
}
.top_fix {
  background: #fff;
}
.top_fix,
.top_left {
  height: 100%;
}
.top_left {
  width: 214px;
  border-right: 1px solid #ddd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
}
.top_left img {
  height: 76%;
  width: 90%;
}
.top_right {
  height: 100%;
}
.top_right > ul {
  display: flex;
}
.top_ul_one {
  border-right: 1px solid #f2f2f2;
  padding-right: 10px;
  height: 100%;
}
.top_ul_one > li {
  margin-left: 8px;
}
.top_ul_one > li > i {
  font-size: 20px;
  color: black;
}
.top_ul_two {
  margin-left: 10px;
}
.top_ul_two > li {
  margin-right: 10px;
}
.top_ul_two > li img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
}
.top_ul_two > li span {
  color: #181818;
}

.el-footer {
  padding: 0;
}
.foot {
  width: 98%;
  height: 100%;
  border-top: 1px solid #f2f2f2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
  padding: 0 1%;
}
.foot span {
  color: #181818;
}
.el-aside .el-table td {
  padding: 8px 0;
}
</style>