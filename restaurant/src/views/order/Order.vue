<template>
  <div>
    <van-nav-bar title="订单" left-text="返回" right-text="管理" @click-left="onClickLeft"  @click-right="onClickRight" />
    <van-checkbox-group class="card-goods" v-model="checkedGoods" ref="checkboxGroup">
      <van-checkbox @click="d_click" class="card-goods__item" checked-color="#ee0a24" v-for="item in goods" :key="item.id" :name="item.id" >
        <van-card :title="item.title" :desc="item.desc" :num="item.num" :price="formatPrice(item.price)" :thumb="item.thumb" />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar v-show="show_s" :price="totalPrice" :disabled="!checkedGoods.length" :button-text="submitBarText" @submit="onSubmit" >
        <van-checkbox v-model="checked" @click="toggleAll">全选</van-checkbox>
    </van-submit-bar>
    <router-view/>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast ,NavBar} from 'vant';

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [NavBar.name]: NavBar,
    [CheckboxGroup.name]: CheckboxGroup
  },

  data() {
    return {
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }],
      checked:true,
      show_s:true,
    };
  },

  computed: {
      //结算数量
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },

    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },

  methods: {
    //   单价计算
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
      Toast('点击结算');
    },
    // 管理点击
    onClickRight() {
        this.show_s = !this.show_s
    },
    // 返回
    onClickLeft() {
        this.$router.history.push('../commodity/commodity')//返回商品页
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    d_click(){
    }
  }
};
</script>

<style lang="less">
.van-nav-bar__text{color: brown;}
.van-checkbox__icon--checked .van-icon{border-color: #ee0a24;background: #ee0a24;}
.card-goods{padding: 0 !important;}
.card-goods {
  padding: 10px 0;
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }

    .van-card__price {
      color: #f44;
    }
  }
}
</style>
