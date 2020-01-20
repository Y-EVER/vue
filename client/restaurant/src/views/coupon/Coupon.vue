<template>
  <div>
      <div class="mt_10">
        <div class="van-coupon van-coupon--disabled">
            <div class="van-coupon__content">
                <div class="van-coupon__head">
                    <h2 class="van-coupon__amount">1.5<span>元</span></h2>
                    <p class="van-coupon__condition">无使用门槛<br/>最多优惠12元</p>
                </div>
                <div class="van-coupon__body">
                    <p class="van-coupon__name">优惠券名称</p>
                    <p class="van-coupon__valid">2017.03.10 - 2017.12.30</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { CouponCell, CouponList } from "vant";
export default {
  components: {
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList
  },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
</style>