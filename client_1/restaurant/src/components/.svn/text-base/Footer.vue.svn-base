<template>
    <div>
        <!-- 底部标签栏 -->
        <van-tabbar route v-model="active" active-color="brown" inactive-color="#000">
            <van-tabbar-item replace to="/" icon="search">首页</van-tabbar-item>
            <van-tabbar-item to="/commodity" icon="search">商品</van-tabbar-item>
            <van-tabbar-item to="/order" icon="photo-o">订单</van-tabbar-item>
            <van-tabbar-item to="/mine" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
        <router-view />
    </div>
</template>

<script>

import { Tabbar, TabbarItem } from "vant";
    export default {
        components:{
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
            active: 0
        }
    }
}
</script>

<style lang="less" scoped>

</style>