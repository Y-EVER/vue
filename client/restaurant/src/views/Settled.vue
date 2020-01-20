<template>
  <div>
      <div class="head bg_c">
          <span>店铺认证</span>
          <span>申请认证后获得管理工具</span>
      </div>
    <van-cell-group>      
      <div class="f_group">
            <span>商品名</span>
            <van-field v-model="data.name" placeholder="请输入商品名"></van-field>
      </div>  
      <div class="f_group r_l_two">
            <div class="flex flex_b">
                <span>门店图</span>
                <span>营业执照</span>
            </div>
            <div class="pad_w_94 flex flex_b">
                <van-uploader v-model="data.fileList" multiple :max-count="1" />
                <van-uploader v-model="data.fileList_t" multiple :max-count="1" />
            </div>
      </div>  
      <div class="f_group">
            <span>社会编码</span>
            <van-field v-model="data.name" placeholder="请输入社会编码"></van-field>
      </div>  
      <div class="f_group">
            <span>地址</span>
            <van-field v-model="data.name" placeholder="请输入地址"  @click="showPopup"></van-field>
            <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      </div>  
      <div class="f_group">
            <span>详细地址</span>
            <van-field v-model="data.name" placeholder="请输入详细地址"></van-field>
      </div>  
      <div class="f_group">
            <span>法人</span>
            <van-field v-model="data.name" placeholder="请输法人"></van-field>
      </div>  
      <div class="f_group">
            <span>身份证号</span>
            <van-field v-model="data.name" placeholder="请输入身份证号"></van-field>
      </div>
      <div class="f_group">
            <span>手机号</span>
            <van-field v-model="data.name" placeholder="请输手机号"></van-field>
      </div>  
      <div class="f_group">
            <span>身份证照片</span>
            <div class="pad_w_94 flex flex_b">
                <van-uploader v-model="data.fileList_r" multiple :max-count="2" image-fit/>
            </div>
      </div>
    </van-cell-group>
    <van-button class="bg_c sub_mit" type="primary" block>确认提交</van-button>
    <!-- 地址弹出框 -->
    <van-popup v-model="show" position="bottom">
        <van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" title="标题" />
    </van-popup>
  </div>
</template>
<style lang="less" scoped>
    .head{height: 6rem;}
    .head > span{color: #fff;display: block;margin-left: 4%;}
    .head > span:first-child{padding-top: 2rem;}
    .sub_mit{background-color: brown;border: none;position: fixed;width: 100%;bottom: 0;left: 0;font-size: 1rem;}
    .sub_mit{border-radius: 0}
</style>
<script>
import { Field, CellGroup, Cell, Button, Toast ,Uploader , AddressEdit , Popup ,Area  } from "vant";
import AreaList from '../assets/js/area.js'
export default {
  name: "Demo",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Uploader.name]: Uploader,
    [AddressEdit.name]: AddressEdit,
    [Popup.name]: Popup,
    [Area.name]: Area,


  },
  data() {
    return {
      areaList: AreaList,
      countdown: 0,
      show: false,
      data: {
          name:'',
          fileList: [],
          fileList_t: [],
          fileList_r:[],
          areaList:'',
          searchResult: []
      }
    };
  },
   methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>