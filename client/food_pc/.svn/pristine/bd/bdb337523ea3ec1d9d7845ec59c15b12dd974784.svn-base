<template>
  <div class="left_sty" style="height:100%">
  <el-tabs :tab-position="tabPosition" style="height: 100%;background:#fff;">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-s-home"></i>首页</span>
      <div>
        <p class="left_c_tit">管理首页</p>
          <ul class="ul_l_bg">
              <li><el-link href="/home/menu" :underline="false">管理首页</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页</el-link></li>
          </ul>
      </div>
    </el-tab-pane>
      <el-tab-pane>
      <span slot="label"><i class="el-icon-s-order"></i>订单</span>
      <div>
        <p class="left_c_tit">订单管理</p>
          <ul>
              <li @click="bg_change(index)" :class='{bg_change:index==isactive}'><el-link href="/home/menu" :underline="false">订单管理</el-link></li>
              <li><el-link href="/home/menu" :underline="false">订单管理</el-link></li>
              <li><el-link href="/home/menu" :underline="false">订单管理</el-link></li>
              <li><el-link href="/home/menu" :underline="false">订单管理</el-link></li>
              <li><el-link href="/home/menu" :underline="false">订单管理</el-link></li>
          </ul>
      </div>
    </el-tab-pane>
      <el-tab-pane>
      <span slot="label"><i class="el-icon-s-data"></i>财务</span>
      <div>
        <p class="left_c_tit">财务管理</p>
          <ul>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
          </ul>
      </div>
    </el-tab-pane>
      <el-tab-pane>
      <span slot="label"><i class="el-icon-s-custom"></i>会员</span>
      <div>
        <p class="left_c_tit">会员管理</p>
          <ul>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
              <li><el-link href="/home/menu" :underline="false">管理首页2</el-link></li>
          </ul>
      </div>
    </el-tab-pane>
      <el-tab-pane>
      <span slot="label"><i class="el-icon-menu"></i>系统</span>
      <div>
        <p class="left_c_tit">系统管理</p>
          <ul>
              <li><el-link href="/staff/staff_manage" :underline="false">员工管理</el-link></li>
              <li><el-link href="/staff/wages" :underline="false">工资管理</el-link></li>
              <li><el-link href="/staff/leave" :underline="false">请假奖惩</el-link></li>
          </ul>
      </div>
    </el-tab-pane>
      <el-tab-pane>
      <span slot="label"><i class="el-icon-s-operation"></i>基础</span>
      <div>
        <p class="left_c_tit">基础管理</p>
          <ul>
              <li><el-link href="/set/vegetables" :underline="false">菜品管理</el-link></li>
              <li><el-link href="/set/board" :underline="false">餐桌管理</el-link></li>
              <li><el-link href="/set/store" :underline="false">店面管理</el-link></li>
          </ul>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tabPosition: 'left',
      isactive:0,
      index:0
    }
 },
 methods: {
   bg_change (index) {
      //点击切换 变量的值 赋值为 index
      this.isactive=index;
      console.log(index);
    }

 }
}
</script>
<style lang="less">
.left_sty i{display: block !important;text-align: center;font-size: 1.6rem;}
.left_sty .el-tabs__item{width:61px;height: 61px !important;line-height: 30px !important;width: #626262 !important;padding: 10px 0 !important;text-align: center !important;}
.left_sty .el-tabs__item.is-active{background: #2086ee;color: #fff !important;}
.left_sty .el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after {
    width: 1px !important;
}
.left_sty .el-tabs--left .el-tabs__header.is-left{margin-right: 0 !important;}
.el-link{line-height: 45px;text-align: center;width: 100%;color: #626262;}
.ul_l_bg li:hover{background: #e0e0e0;}
.ul_l_bg li:hover .el-link--inner{color: #626262;}
.bg_change{background: #e0e0e0;}
</style>