<template>
  <div id="home">
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/images/2.jpeg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/4.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/5.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 有间隔的正方形格子 -->
    <van-grid class="bor_top pad_t_b_0_5" :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <foot />
    <router-view/>
  </div>
</template>
<style lang="less" scoped>
// 搜索背景色
.van-search {
  background: brown !important;
}
// 轮播
.van-swipe {
  height: 10rem;
}
.van-swipe-item {
  height: 100%;
  width: 100%;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
<script>
import foot from "../components/Footer.vue";
import { Search, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem } from "vant";
export default {
  name: "home",
  components: {
    foot,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },

  data() {
    return {
      value: ""
    };
  }
};
</script>
