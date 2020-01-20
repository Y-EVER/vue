<template>
  <div class="kzt">
    <el-container>
      <el-header>
        <div class="top_fix flex flex_b_c">
          <div class="top_left d_fix">
            <img src="@/assets/images/logo.png" alt />
          </div>
          <div class="s_suo">
            <el-input placeholder="请输入会员账号" v-model="huiyuan" class="input-with-select">
              <el-button slot="append">搜索</el-button>
            </el-input>
          </div>
          <div class="top_right d_fix flex_b_c">
            <ul class="top_ul_one d_fix">
              <li>
                <el-link href="/console" :underline="false">查看订单</el-link>
              </li>
              <li>
                <el-link href="/console" :underline="false">会员开卡</el-link>
              </li>
              <li>
                <el-link href="/console" :underline="false">菜品管理</el-link>
              </li>
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
        <el-aside
          style="position: relative;width:500px;padding:0 20px;border-right: 1px solid #e0e0e0;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);background:#fff"
        >
        <el-button @click="btn_add" v-show="show_tab_o" type='primary' size="small" style="margin:20px 1%;float:right;background:#2086ee;">加菜</el-button>
        <el-button @click="btn_add" v-show="show_tab_t" type='primary' size="small" style="margin:20px 1%;float:right;background:#2086ee;">确定</el-button>
          <el-table v-show="show_tab_o" class :data="tableData" border style="width: 98%;margin: 20px auto;max-height:640px;overflow-y:auto" >
              <el-table-column prop="name" label="品名" width="133"></el-table-column>
              <el-table-column prop="num" label="数量" width="65"></el-table-column>
              <el-table-column prop="price" label="单价" width="65"></el-table-column>
              <el-table-column prop="total" label="总价" width="65"></el-table-column>
              <el-table-column width="120" label="操作" prop="discount">
                  <template>
                    <el-button type="text" size="mini">催菜</el-button>
                  </template>
              </el-table-column>
          </el-table>
          <el-table v-show="show_tab_t" :data="tableData" border style="width: 98%;margin: 20px auto;max-height:640px;overflow-y:auto" >
              <el-table-column prop="name" label="品名" width="113"></el-table-column>
              <el-table-column prop="num" label="数量" width="65"></el-table-column>
              <el-table-column prop="price" label="单价" width="65"></el-table-column>
              <el-table-column prop="total" label="总价" width="65"></el-table-column>
              <el-table-column width="140" label="操作" prop="discount">
                  <template  slot-scope="scope">
                       <el-input-number v-model="scope.row.numbs" style="width:110px;" size="mini" :min="1" :max="10"></el-input-number>
                  </template>
              </el-table-column>
          </el-table>
          <div class="pool">
            <ul>
              <li>
                <span>桌号：</span>
              </li>
              <li>
                <span>合计：</span>
              </li>
              <li>
                <span>优惠：</span>
              </li>
              <li>
                <span>结算：</span>
              </li>
            </ul>
          </div>
        </el-aside>
        <el-container>
          <el-main style>
            <div class="table_all">
              <el-row :gutter="12">
                <el-col :span="2" style="margin-bottom:12px;cursor: pointer;">
                  <el-card shadow="hover" style="height:100px;position: relative;">
                    <div class="mask"></div>
                    <div class="t_cont">
                      <span class="col_org">开桌</span>
                      <span class="col_org">1号</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="2" style="margin-bottom:12px;">
                  <el-card shadow="hover" style="height:100px;position: relative;">
                    <div class="mask"></div>
                    <div class="t_cont">
                      <span>空桌</span>
                      <span>2号</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-main>
          <el-footer>
            <div class="foot flex flex_b_c">
              <span>©2019 微虎信息. All Rights Reserved.</span>
              <span>常见问题</span>
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_tab_o:true,
      show_tab_t:false,
      huiyuan:'',
      tableData: [
        {
          name: "麻婆豆腐",
          num: "1份",
          price: 15,
          total: 15,
          numbs:1
        },
        {
          name: "麻婆豆腐",
          num: "1份",
          price: 15,
          total: 15,
          numbs:1
        },
        {
          name: "鱼香肉丝",
          num: "1份",
          price: 15,
          total: 15,
          numbs:1
        }
      ]
    };
  },
  methods: {
    btn_add(){
      this.show_tab_o = !this.show_tab_o
      this.show_tab_t = !this.show_tab_t
      console.log(123)
    }
    }
};
</script>

<style lang="less">
//开桌
.table_all {
  width: 98%;
  background: #fff;
  height: 96%;
  padding: 1%;
}
.table_all .el-card {
  background: url("../assets/images/cz2.jpg") no-repeat center;
  background-size: cover;
}
.table_all .el-card .t_cont {
  position: absolute;
  width: 100%;
}
.table_all .el-card .t_cont span {
  display: block;
  text-align: center;
  color: #fff;
}
.table_all .el-card .t_cont span:first-child {
  font-size: 25px;
  margin-top: 18px;
}
.table_all .el-card .t_cont span:last-child {
  margin-top: 4px;
}
.table_all .el-card__body {
  padding: 0;
  height: 100%;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
}
.col_org {
  color: #ff9800 !important;
}
//
.kzt {
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  width: 100%;
  height: 55px !important;
  color: #fff;
  padding: 0;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
}
.s_suo {
  margin-left: -54%;
}
.s_suo .el-input .el-button {
  background: #2086ee;
  color: #fff;
  border: 1px solid #2086ee;
  border-radius: 0 2px 2px 0;
  padding: 8px 20px;
}
.s_suo .el-input__inner {
  height: 32px !important;
  line-height: 32px !important;
}
.pool {
  width: 96%;
  border-top: 1px solid #ebeef5;
  padding-top: 15px;
  margin-top: 15px;
  position: absolute;
  bottom: 0;
  left: 4%;
}
.pool > ul > li {
  line-height: 40px;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow: hidden;
}
.el-table--border {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #fff !important;
}
// 底部
.el-footer {
  height: 45px !important;
  width: 100%;
  background: #fff;
}
.foot {
  width: 100%;
  height: 100%;
}
.foot span {
  color: #181818;
}
.top_fix {
  background: #fff;
}
// 头部
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
  margin-left: 20px;
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
</style>