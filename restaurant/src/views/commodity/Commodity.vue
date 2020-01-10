<template>
  <div id="sections">
    <header class="bor_bottom">
      <img src="../../assets/images/1.jpg" />
      <div class="introduce">
        <span>乡小酒馆（南坪万达）</span>
        <span class="notice m_t_b_5 col_b">公告：亲，本店乃小本生意，还请不要浪费，吃多少拿多少，感谢支持！</span>
        <img src="../../assets/images/6.jpg" alt />
        <div class="discount">
          <van-button plain size="mini">满100减10</van-button>
          <van-button plain size="mini">满200减25</van-button>
          <van-button plain size="mini">满250减40</van-button>
          <van-button plain size="mini">满300减60</van-button>
        </div>
      </div>
    </header>
    <div class="flex flex_b">
      <!-- <van-sidebar v-model="activeKey" >
        <van-sidebar-item  v-for="item in sidebar_l" :key="item.id" :name="item.id" :title="item.name" :info='item.info_n'>
       
          <div class="good_all">
            <van-card v-for='item_t in sidebar_l.children_g' :key="item_t.id" v-show="shows" :price="item_t.price" :desc="item_t.desc" :title="item_t.title" >
                <div class="img_p_h" slot='thumb'>
                  <img class="van-image__img" :src='item_t.imgs' /> 
                </div>
                <div slot='num'>
                    <van-stepper :v-model="item_t.nums" integer />
                </div>
            </van-card>
          </div>
        </van-sidebar-item>
      </van-sidebar> -->
      <van-tree-select :items="items" :main-active-index.sync="activeIndex" >
        <template slot="content">
            <van-card price="2.00" desc="大份的" title="大肥鼠" >
                <div class="img_p_h" slot='thumb'>
                  <img class="van-image__img" :src='imgs' /> 
                </div>
                <div slot='num'>
                    <van-stepper :v-model="nums" integer />
                </div>
            </van-card>
        </template>
      </van-tree-select>
    </div>
    <foot />
    <router-view />
  </div>
</template>

<script>
import foot from "../../components/Footer.vue";
import { Image, Button, Sidebar, SidebarItem, Card ,TreeSelect,Stepper  } from "vant";
export default {
  name: "sections",
  components: {
    foot,
    [Image.name]: Image,
    [Button.name]: Button,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Card.name]: Card,
    [TreeSelect.name]: TreeSelect,
    [Stepper.name]: Stepper,
  },
  data() {
    return {
      activeKey: 0,
      imgs: require("../../assets/images/3.jpg"),
      nums:1,
      shows:true,
      items:[
        {
          id:1,
          text:'商品1',
          info_n:1,
          children_g:[{
            id:1,
            price:'2.00',
            desc:'描述信息',
            title:'商品标题',
            imgs:require("../../assets/images/3.jpg"),
            nums:1
          },
          {
            id:2,
            price:'2.00',
            desc:'描述信息2',
            title:'商品标题2',
            imgs:require("../../assets/images/4.jpg"),
            nums:1
          }]
        },{
          id:2,
          text:'商品2',
          info_n:22
        }
      ],
      activeIndex: 0,
    };
  }
};
</script>

<style lang="less" scoped>
#sections{height: 100%;}
header {
  height: 12rem;
  position: relative;
}
header img {
  width: 100%;
  height: 8rem;
}
.introduce {
  position: absolute;
  background: #fff;
  border-radius: 5px;
  width: 92%;
  padding: 0.5rem 2%;
  top: 3.5rem;
  left: 2%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
}
.introduce > span {
  display: block;
}
.introduce > span:first-child {
  margin-top: 0.5rem;
}
.introduce img {
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 3px;
  right: 4%;
  top: -25%;
}
.discount .van-button {
  font-size: 0.7rem !important;
  padding: 0 4px;
  color: brown;
  border-color: brown;
}
.van-sidebar-item--select {
  border-color: #fff !important;
  background-color: #fff !important;
}
.van-sidebar-item {
  background-color: #f2f2f2;
}

.van-sidebar {
  width: 23% !important;
}
.good_all {
  width: 77%;
}
.van-card {
  background-color: #fff !important;
}
.good_all .van-image__img {
  object-fit: cover;
}
.img_p_h {
  height: 100%;
}
.van-tree-select__nav{background-color: #fff !important;}
.van-tree-select{width: 100%}
</style>