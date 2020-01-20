<template>
  <div>
    <img class="user-poster" src="../../assets/images/11.jpg">
    <!-- <img class="head_img" src="../../assets/images/1.jpg" alt=""> -->
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        已付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待上菜
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已上菜
      </van-col>
    </van-row>

    <!-- <van-cell-group class="user-group">
    </van-cell-group> -->

    <van-cell-group>
      <van-cell icon="records" title="店铺入驻" is-link url='/settled/settled'/>
      <van-cell icon="records" title="全部订单" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link url='/coupon/coupon'/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
    <foot />
    <router-view />
  </div>
</template>

<script>
import foot from "../../components/Footer.vue";
import { Row, Col, Icon, Cell, CellGroup } from 'vant';

export default {
  components: {
    foot,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="less" scoped>
.head_img{position: absolute;width: 3rem;height: 3rem;border-radius: 50%;left: 50%;transform: translateX(-50%);top: 20%}
.user {
  &-poster {
    width: 100%;
    height: 10rem;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
