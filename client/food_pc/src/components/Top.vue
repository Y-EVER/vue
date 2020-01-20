<template>
  <div class="top_fix flex flex_b_c">
    <div class="top_left d_fix">
      <img src="@/assets/images/logo.png" alt />
    </div>
    <div class="top_right d_fix flex_b_c">
      <ul class="top_ul_one d_fix">
            <li><el-link href="/console" :underline="false">控制台</el-link></li>
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
</template>
<script>
export default {
  data() {
      return {
      };
    }
};
</script>

<style lang="less" scoped>
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
</style>