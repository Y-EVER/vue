<template>
  <div class="fwt">
    <el-container>
      <el-header>
        <div class="top_fix flex flex_b_c">
          <div class="top_left d_fix"></div>
          <div class="top_right d_fix flex_b_c">
            <ul class="top_ul_one d_fix">
              <li>
                <i @click="drawer = true" class="el-icon-chat-dot-square"></i>
              </li>
              <li>
                <i @click="drawer_t = true" class="el-icon-message-solid"></i>
              </li>
              <li>
                <i @click="drawer_r = true" class="el-icon-s-grid"></i>
              </li>
            </ul>
            <ul class="top_ul_two d_fix">
              <li>
                <img src="../assets/images/s8.jpg" alt />
              </li>
              <li>
                <span>退出登录</span>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="310px" style="margin:15px 1% 0 1%">
          <div style="height:100%">
            <div class="s_suok">
              <el-input placeholder="请输入内容" v-model="input_cont"> <i slot="prefix" class="el-input__icon el-icon-search"></i> </el-input>
            </div>
            <div class="good_all" style="background:#fff">
              <div class="xiao_s">
                <span>销售时间：<span>2020/01/18</span></span>
                <span>销售单号：<span>123456789</span></span>
              </div>
              <div class="goods_list">
                <div style="margin: 15px 0;"></div>
                <div class="list_right_center">
                  <div class="d_fix">
                      <div class="check_t flex flex_b">
                        <div class="g_img">
                          <img src="../assets/images/cz2.jpg" alt="">
                        </div>
                        <div class="g_tit_money">
                          <div class="flex flex_b_c">
                            <span>香碰碰的白米饭</span>
                            <i class="el-icon-delete" style="color:#bbb;font-size: 20px;margin-top: -10px;"></i>
                          </div>
                          <div class="flex flex_b_c">
                            <span>2</span>
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="list_right_center">
                  <div class="d_fix">
                      <div class="check_t flex flex_b">
                        <div class="g_img">
                          <img src="../assets/images/cz2.jpg" alt="">
                        </div>
                        <div class="g_tit_money">
                          <div class="flex flex_b_c">
                            <span>香碰碰的白米饭</span>
                            <i class="el-icon-delete" style="color:#bbb;font-size: 20px;margin-top: -10px;"></i>
                          </div>
                          <div class="flex flex_b_c">
                            <span>2</span>
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="order-foot">
                <div class="order-foot-top">
                  <div class="data-warp flex flex_b_c">
                    <span>会员</span>
                    <div class="d_fix">
                      <el-tag type="warning" effect="dark" size="mini">余额</el-tag>
                      <span class="d_fix fw_bold" style="margin-left:4px;color:#bbb">￥<span>0.00</span></span>
                    </div>
                  </div>
                  <div class="data-warp flex flex_b_c">
                    <span>折扣</span>
                    <span class="fw_bold">100%</span>
                  </div>
                  <div class="data-warp flex flex_b_c">
                    <span>合计数量</span>
                    <span class="fw_bold">0</span>
                  </div>
                  <div class="data-warp flex flex_b_c">
                    <span>合计金额</span>
                    <span class="d_fix fw_bold">￥<span>0.00</span></span>
                  </div>
                  <div class="data-warp flex flex_b_c">
                    <span class="col_org">应收</span>
                    <span class="d_fix fw_bold col_org">￥<span>0.00</span></span>
                  </div>
                </div>
                <div class="order-foot-btm">
                  <el-button-group>
                    <el-button type="primary">选择会员</el-button>
                    <el-button type="primary">结算</el-button>
                  </el-button-group>
                </div>
              </div>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <!-- 右侧左边 -->
            <div class="navbtn-container">
              <el-tag type='' effect="dark">操作</el-tag>
              <div class="navbtns">
                  <el-tag type='' effect="plain">餐桌</el-tag>
                  <el-tag type='' effect="plain">开台</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible = true">合并台</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible = true">转台</el-tag>
                  <el-tag type='' effect="plain">清台</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible_t = true">预订</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible3 = true">会员</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible4 = true">充值</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible5 = true">统计</el-tag>
                  <el-tag type='' effect="plain" @click="dialogVisible6 = true">交易</el-tag>
              </div>
              <!-- 合并台桌 -->
              <el-dialog title="合并桌台" :visible.sync="dialogVisible" width="45%">
                <div class="merge">
                  <el-row>
                    <el-button type="text" size="small" v-for="(item,index) in category" :class="{'bg_btn':index == isactive_t}"  @click="bg_add_t(index)" :key='index'>{{item}}</el-button>
                  </el-row>
                  <div class="merge_tab">
                    <ul class="table-control">
                      <li v-for="(item,index) in desk_t" :class="{'xuanzhong':index == isactive_f}"  @click="bor_add_t(index)" :key="index">
                       <h2>{{item.desk_num}}</h2>
                        <span>消费：</span>
                        <span>￥<span>{{item.desk_money}}</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
              <!-- 预订位置 -->
              <el-dialog title="预订位置" :visible.sync="dialogVisible_t" width="30%">
                <div class="reserve">
                  <el-form :model="form_yd">
                    <div class="d_fix w_100">
                      <el-form-item label="预订单号：">
                        <span :v-model="form_yd.yd_num">f1234453s4535445</span>
                      </el-form-item>
                    </div>
                    <div class="d_fix w_45 xb_width">
                      <el-form-item label="顾客姓名：">
                        <el-input v-model="form_yd.name" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="顾客性别：">
                        <template>
                          <el-radio v-model="form_yd.sex" label="1">男</el-radio>
                          <el-radio v-model="form_yd.sex" label="2">女</el-radio>
                        </template>
                      </el-form-item> 
                    </div>
                    <div class="d_fix w_45">
                      <el-form-item label="联系电话：">
                        <el-input v-model="form_yd.phone" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="预订人数：">
                        <el-input v-model="form_yd.people" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                    <div class="d_fix w_45">
                      <el-form-item label="预订台桌：">
                        <el-select v-model="form_yd.tab" placeholder="请选择台桌">
                          <el-option label="001" value="001"></el-option>
                          <el-option label="002" value="002"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="预定时间：">
                        <el-input v-model="form_yd.time" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                    <div class="d_fix w_45">
                      <el-form-item label="预留时间：">
                        <el-select v-model="form_yd.reserve_time" placeholder="请选择">
                          <el-option label="半小时" value="半小时"></el-option>
                          <el-option label="一小时" value="一小时"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="预定押金：">
                        <el-input v-model="form_yd.deposit" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                    <div class="w_100 d_fix">
                      <el-form-item label="预定备注：">
                        <el-input v-model="form_yd.remarks" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                    <div class="w_100 d_fix">
                      <el-form-item label="预定菜品：">
                        <el-input v-model="form_yd.menu" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                  </el-form>
                  
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="dialogVisible_t = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="dialogVisible_t = false">确定预订</el-button>
                </span>
              </el-dialog>
              <!-- 会员管理 -->
              <el-dialog title="会员管理" :visible.sync="dialogVisible3" width="60%">
                <div class="member">
                  <div class="flex flex_b_c">
                    <div class="d_fix s_suo_k">
                      <el-input v-model="input" placeholder="输入手机号、卡号、姓名"></el-input>
                      <el-button type="primary">搜索</el-button>
                    </div>
                    <el-button type="primary" size="small" icon="el-icon-document-add">新增会员</el-button>
                  </div>
                  <div class="report">
                    <ul>
                      <li>
                        <div class="report-top flex flex_b_c">
                          <span>会员总数</span>
                          <span>储值总额：<span class="col_org">12215453</span></span>
                        </div>
                        <div class="report-center">
                          <span class="number">10</span>
                          <span class="unit">位</span>
                        </div>
                        <div class="report-bottom">
                          <span>平局每日新增 <span class="col_org">1</span> 位会员</span>
                        </div>
                      </li>
                      <li>
                        <div class="report-top flex flex_b_c">
                          <span>今日过生日的会员</span>
                        </div>
                        <div class="report-center">
                          <span class="number">10</span>
                          <span class="unit">位</span>
                        </div>
                        <div class="report-bottom">
                          <span>本月还有 <span class="col_org">1</span> 位会员过生日</span>
                        </div>
                      </li>
                      <li>
                        <div class="report-top flex flex_b_c">
                          <span>累计消费</span>
                          <span><span class="col_org">5</span> 位会员消费</span>
                        </div>
                        <div class="report-center">
                          <span class="number">1000</span>
                          <span class="unit">元</span>
                        </div>
                        <div class="report-bottom">
                          <span>本月消费订单 <span class="col_org">1</span> 笔，平均消费 <span class="col_org">120</span> 元</span>
                        </div>
                      </li>
                      <li>
                        <div class="report-top flex flex_b_c">
                          <span>会员总数</span>
                          <span>储值总额：<span class="col_org">12215453</span></span>
                        </div>
                        <div class="report-center">
                          <span class="number">10</span>
                          <span class="unit">位</span>
                        </div>
                        <div class="report-bottom">
                          <span>平局每日新增 <span class="col_org">1</span> 位会员</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="table_hy">
                    <el-table class :data="tableData" border style="width: 98%;margin: 20px auto;">
                      <el-table-column prop="code_num" label="卡号" width="180"></el-table-column>
                      <el-table-column prop="m_name" label="会员名" width="180"></el-table-column>
                      <el-table-column prop="m_phone" label="电话号码"></el-table-column>
                      <el-table-column prop="grade" label="等级"></el-table-column>
                      <el-table-column prop="integral" label="可以积分"></el-table-column>
                      <el-table-column prop="m_money" label="储值金额"></el-table-column>
                      <el-table-column prop="source" label="注册来源"></el-table-column>
                      <el-table-column width='150' label="操作" prop="discount">
                      <template>
                        <el-button type="text" size="mini">充值</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="dialogVisible3 = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="dialogVisible3 = false">确 定</el-button>
                </span>
              </el-dialog>
              <!-- 会员充值 -->
              <el-dialog title="会员充值" :visible.sync="dialogVisible4" width="20%">
                <div class="recharge">
                  <el-form v-model="recharge" :label-position='right'>
                    <div class="bor_top_r">
                      <div class="r_list_top">
                        <el-form-item class="d_fix" label="卡号:">
                          <el-input v-model="recharge.code_num" placeholder="请输入卡号"></el-input>
                        </el-form-item>
                      </div>
                      <div class="r_list_top">
                        <el-form-item class="d_fix disable" label="姓名:">
                          <el-input v-model="recharge.r_name"></el-input>
                        </el-form-item>
                      </div>
                      <div class="r_list_top">
                        <el-form-item class="d_fix disable" label="余额:">
                          <el-input v-model="recharge.r_balance"></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="p_method">
                      <el-radio-group v-model="payment">
                        <el-radio :label="1">现金</el-radio>
                        <el-radio :label="2">银行卡</el-radio>
                        <el-radio :label="3">微信</el-radio>
                        <el-radio :label="4">支付宝</el-radio>
                      </el-radio-group>
                    </div>
                    <div class="re_money">
                      <el-input v-model="input" placeholder="请输入充值金额/元"></el-input>
                      <el-input v-model="input" placeholder="请输入充值赠送金额/元"></el-input>
                    </div>
                  </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="dialogVisible4 = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="dialogVisible4 = false">确 定</el-button>
                </span>
              </el-dialog>
              <!-- 销售统计 -->
              <el-dialog title="销售统计" :visible.sync="dialogVisible5" width="60%">
                <div class="statistics">
                  <div class="statistics_tab">
                    <span class="phone">电话（个）</span>
                    <span class="item">项目（个）</span>
                    <span class="money">筹款（元）</span>
                  </div>
                  <el-calendar v-model="value"></el-calendar>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="dialogVisible5 = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="dialogVisible5 = false">确 定</el-button>
                </span>
              </el-dialog>
              <!-- 交易记录 -->
              <el-dialog title="交易记录" :visible.sync="dialogVisible6" width="65%">
                <div class="record">
                  <div class="flex flex_b_c">
                    <div class="d_fix sou_suo_k">
                      <el-input placeholder="请输入单号"></el-input>
                      <el-input placeholder="请输入时间（选填）"></el-input>
                      <el-button type='primary'>搜索</el-button>
                    </div>
                    <el-button type='primary'>打印</el-button>
                  </div>
                  <div class="order">
                    <el-table class :data="order" border style="width: 98%;margin: 20px auto;">
                      <el-table-column width='150' prop="o_code" label="订单编号"></el-table-column>
                      <el-table-column prop="o_desk_num" label="台桌号"></el-table-column>
                      <el-table-column prop="o_phone" label="人数"></el-table-column>
                      <el-table-column prop="o_member" label="会员"></el-table-column>
                      <el-table-column prop="o_discount" label="折扣"></el-table-column>
                      <el-table-column prop="o_amount" label="数量（份）"></el-table-column>
                      <el-table-column prop="o_total" label="总计（元）"></el-table-column>
                      <el-table-column prop="o_payment" label="实付（元）"></el-table-column>
                      <el-table-column prop="o_mode" label="结算方式"></el-table-column>
                      <el-table-column width='130' prop="o_time" label="结算时间"></el-table-column>
                      <el-table-column width='100' label="操作" prop="discount">
                        <template>
                          <el-button type="text" size="mini">充值</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button size="mini" @click="dialogVisible6 = false">取 消</el-button>
                  <el-button size="mini" type="primary" @click="dialogVisible6 = false">确 定</el-button>
                </span>
              </el-dialog>
            </div>
            <!-- 右侧右边 -->
            <div class="product-container">
              <div class="product-type flex flex_b">
                <div class="left_btn">
                  <el-button-group>
                    <el-button @click="left_btn" type="primary" icon="el-icon-arrow-left"></el-button>
                  </el-button-group>
                </div>
                <div class="product-center-cont">
                  <el-row ref='rowWidth' :style="{transform: `translate3d(${inputStyWidth}px, 0px, 0px)`}">
                    <el-button v-for="(item,index) in category" :class="{'bg_btn':index == isactive}"  @click="bg_add(index)" :key='index' ref='clientWidth'>{{item}}</el-button>
                  </el-row>
                </div>
                <div class="right_btn">
                  <el-button-group>
                    <el-button @click="right_btn" type="primary" icon='el-icon-arrow-right'></el-button>
                  </el-button-group>
                </div>
              </div>
              <!-- 桌子展示 -->
              <div class="product-tab">
                <div class="desk_all">
                  <ul>
                    <li v-for="(item,index) in desk" :class="{'xuanzhong':index == isactive_r}"  @click="bor_add(index)" :key="index">
                      <span class="desk_number gray">{{item.desk_num}}</span>
                      <div class="desk_pople">
                        <span class="d_fix"><i class="people_img"></i><span>{{item.z_people}}</span>/<span>{{item.g_people}}</span></span>
                        <span class="d_fix"><i class="time_img"></i><span>{{item.desk_time}}</span></span>
                        <span class="d_fix"><i class="money_img"></i><span>{{item.desk_money}}</span></span>
                      </div>
                      <div class="desk_no dis_none">
                        <span>可供10人</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-main>
          <el-footer>
            <div class="product-foot flex flex_b_c">
              <ul class="product-foot-state">
                <li>空闲<span class="gray">0</span></li>
                <li>预订<span class="yellow">0</span></li>
                <li>在用<span class="green">0</span></li>
                <li>待清<span class="cyan">0</span></li>
              </ul>
              <div class="product-foot-data">
                <span class="d_fix">当前就餐人数：<span>0</span>人</span>
                <span class="d_fix">今日总收入：<span>0</span>人</span>
                <span class="d_fix">今日总开桌数：<span>0</span>人</span>
              </div>
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
      input_cont:'',
      drawer: false,
      drawer_t: false,
      drawer_r: false,
      checkAll: false,
      isIndeterminate: true,
      num: 1,
      inputStyWidth:0,
      category:['所有桌类','大厅','包间','VIP包间','宴会厅','豪华包间','豪华包间2'],
      desk:[{
          desk_num:'001',
          z_people:10,
          g_people:8,
          desk_time:'2020/01/19 17:56',
          desk_money:1200
        },{
          desk_num:'002',
          z_people:12,
          g_people:9,
          desk_time:'2020/01/19 17:57',
          desk_money:1500
        }],
      desk_t:[{
          desk_num:'001',
          desk_money:1000
        },
        {
          desk_num:'002',
          desk_money:1200
        }],
      isactive:0,
      isactive_t:0,
      isactive_r:0,
      isactive_f:0,
      len:0,
      len_t:0,
      dialogVisible: false,
      dialogVisible_t: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      dialogVisible6: false,
      form_yd:{
        yd_num:'',
        name:'',
        sex:'1',
        phone:'',
        people:'',
        tab:'',
        time:'',
        reserve_time:'',
        deposit:'',
        remarks:'',
        menu:''
      },
      tableData: [
        {
          code_num: "A001145454545454",
          m_name: "王小虎",
          m_phone: "1510235454",
          grade: "普通会员",
          integral: 0,
          m_money: 1212,
          source: "店铺",
        },
      ],
      recharge:{
        code_num:'',
        r_name:'张三',
        r_balance:100
      },
      payment:1,
      value: new Date(),
      order:[
        {
          o_code:'',
          o_desk_num:'',
          o_phone:'',
          o_member:'',
          o_discount:'',
          o_amount:'',
          o_total:'',
          o_payment:'',
          o_mode:'',
          o_time:'',
        }
      ]
    }
  },
  created(){

  },
  methods: {
    handleChange() {
      },
    // 左边点击事件
    left_btn(){
      if(this.len !== this.category.length - 5){
          this.inputStyWidth = -(-this.inputStyWidth + this.$refs.clientWidth[0].$el.clientWidth + 10)//获取点击移动的宽度
          console.log(this.inputStyWidth)
          this.len++
      }else{
        this.$message({
          message: '已经是最后一条了',
          type: 'warning',
          duration:1000
        });
        return false
      }
    },
    // 右边点击事件
    right_btn(){
      if(this.len !== 0){
        this.inputStyWidth = this.inputStyWidth + this.$refs.clientWidth[6].$el.clientWidth  + 10//获取点击移动的宽度
        console.log(this.inputStyWidth)
        this.len--
      }else{
        this.$message({
            message: '已经是第一条了',
            type: 'warning',
            duration:1000
          });
          return false
          
      }
    },
    // 点击加背景
    bg_add(index){
      this.isactive=index;
      console.log(index);
    },
    bg_add_t(index){
      this.isactive_t=index;
      console.log(index);
    },
    bor_add(index){
      this.isactive_r=index;
      console.log(index);
    },
    bor_add_t(index){
      this.isactive_f=index;
      console.log(index);
    },
  }
};
</script>

<style lang="less">
.fwt {
  width: 100%;
  height: 100%;
  background: url("../assets/images/body_bg.jpg");
}
//交易记录
.sou_suo_k{}
.sou_suo_k .el-input{margin-right: 4%;}
.sou_suo_k .el-input input{border: 1px solid #2086ee;}
// 销售统计
.el-calendar-table .el-calendar-day{height: 80px;}
.el-calendar__body{padding: 12px 20px}
.statistics{position: relative;}
.statistics_tab{position: absolute; left: 50%; transform: translateX(-50%); top: 3%;}
.statistics_tab > span{margin-right: 20px;}
.statistics_tab .phone::before,.statistics_tab .item::before,.statistics_tab .money::before{content: ''; display: inline-block; width: 20px; height: 16px; border-radius: 2px; vertical-align: -3px; margin-right: 5px;}
.statistics_tab .phone::before{background-color: #72a7d3;}
.statistics_tab .item::before{background-color: #7de4be}
.statistics_tab .money::before{background-color: #95a5a6}
// 会员充值

.bor_top_r{border: 1px solid #ccc;border-radius: 4px;padding: 10px;}
.r_list_top{border-bottom: 1px solid #ccc}
.r_list_top .el-form-item{margin-bottom: 0;}
.r_list_top .el-form-item__content{width: 85%;}
.r_list_top .el-form-item__content .el-input input{border: none;}
.r_list_top:last-child{border-bottom: none}
.p_method{margin-top: 10px;}
.p_method .el-radio__inner{width: 20px;height: 20px;}
.el-radio__inner::after{width: 8px;height: 8px;}
.re_money{margin-top: 10px;}
.re_money .el-input{margin-bottom: 15px;}
.re_money .el-input input{border: 1px solid #ccc}
//会员弹框
.s_suo_k .el-input input{border: 1px solid #2086ee;border-radius: 2px 0 0 2px}
.s_suo_k .el-button{border-radius: 0 2px 2px 0}
.member > div > .el-button{padding: 10px}
.member > div > .el-button i{font-size: 16px;}
.report{margin-top: 20px;overflow: hidden;}
.report ul li{width: 24.2%;margin-right: 1%;border: 1px solid #e2e2e2;float: left;padding: 10px 1%;box-sizing: border-box}
.report ul li:nth-child(4){margin-right: 0;}
.report ul li .report-top{line-height: 25px}
.report ul li .report-center{line-height: 80px;text-align: center;}
.report ul li .report-center > .number{font-size: 34px;color: orangered}
.report ul li .report-center > .unit{font-size: 18px;color: orangered;margin-left: 5px;}
.report ul li .report-bottom span{font-size: 12px;}
//预订位置弹出框
.reserve .el-form > .w_45 .el-form-item{width: 45%;display: flex}
.reserve .el-form > .w_45 .el-form-item:first-child{margin-right: 10%;}
.reserve .el-form .el-form-item__label{width: 120px}
.w_100 .el-form-item{display: flex;width: 100%}
.w_100 .el-form-item__label{width: 88px !important;}
.w_100 .el-form-item__content{width: 84%}
.xb_width .el-form-item:last-child .el-form-item__label{width: 92px}
//合并台弹框
.el-dialog__header{padding: 10px;background: #f8f8f8;border-bottom: 1px solid #eee}
.el-dialog__title{font-size: 16px;}
.el-dialog__headerbtn{top: 13px;right: 10px;}
.el-dialog__body{padding: 15px 15px 0;}
.merge .el-row button{color: #666;padding: 10px}
.merge_tab{margin-top: 20px;height: 260px;overflow-y: auto;}
.table-control{overflow-y: hidden;}
.merge_tab::-webkit-scrollbar {
    display: none;
}
.table-control li{width: 15%;border: 1px solid #e0e0e0;position: relative;height: 115px;margin-right: 1.5%;margin-bottom: 1.5%;float: left;box-sizing: border-box;}
.table-control li:nth-child(6n){margin-right: 0;}
.table-control li h2{text-align: center;line-height: 55px}
.table-control li > span{display: block;text-align: center;}

// 右侧
.el-main{padding-left: 0 !important;padding: 15px}
.navbtn-container{float: left;}
.navbtn-container > .el-tag {width: 95px;height: 45px;line-height: 45px;font-size: 15px;text-align: center;border: none;border-radius: 0;background: #2086ee;}
.navbtns{width: 95px;margin-top: 7px;}
.navbtns>span{cursor: pointer;}
.navbtns .el-tag{width: 95px;height: 45px;line-height: 45px;font-size: 15px;text-align: center;border: none;border-radius: 0;color: #181818;margin-bottom: 3px;}
.navbtns .el-tag:hover{background: #2086ee;color: #fff;}
// 右侧右上
.product-container{float: left;margin-left: 24px;width: calc(100% - 119px);}
.product-container .left_btn .el-button-group button,.product-container .right_btn .el-button-group button{font-size: 30px;padding: 0 10px;height: 45px;border-radius: 0 !important;background: #3EB94E;border: none;}
.product-container .left_btn{margin-right: 5px;}
.product-container .right_btn{margin-left: 5px;}
.product-center-cont{width: 100%;overflow-x:hidden;}
.product-center-cont .el-row{overflow-x: scroll;height: 45px;width: 3000px;transition-duration:1s;}
.product-center-cont .el-row button{width: 8%;height: 45px;border: none;border-radius: 0;float: left;}
.product-center-cont .el-row button:hover,.product-center-cont .el-row button:focus{background: #fff;color: #181818}
.product-center-cont .el-row::-webkit-scrollbar {
    display: none;
}
.bg_btn{background: #2086ee !important;color: #fff !important;}
// 右侧右下
.gray { background: #b5b5b5; }
.yellow { background: #FBB320; }
.green { background: #85CB2D; }
.cyan { background: #6BCBCA; }
.product-tab{margin-top: 7px;}
.desk_all{}
.desk_all ul li{width: 13.4285%;margin-right: 1%;position: relative;;background: #fff;height: 158px;float: left;margin-bottom: 1%;box-sizing: border-box;}
.desk_all ul li:nth-child(7n){margin-right: 0;}
.xuanzhong{border: 2px solid #2086ee !important;}
.xuanzhong::after{content: ""; position: absolute; bottom: 0; right: 0; width: 30px; height: 30px; background: url('../assets/images/checked_eat.png') no-repeat; background-size: 100% 100%; }
.desk_number{display: block;line-height: 35px;text-align: center;font-weight: bold;font-size: 18px;color: #fff}
.desk_pople{padding: 10px;}
.desk_pople > span{line-height: 30px;}
.desk_pople > span > i{width: 18px;height: 18px;display: block;margin-right: 10px;}
.people_img{background: url('../assets/images/people.png') no-repeat;background-size: 100%;}
.time_img{background: url('../assets/images/time.png') no-repeat;background-size: 100%;}
.money_img{background: url('../assets/images/money.png') no-repeat;background-size: 100%;}
// 左侧
.s_suok{margin-bottom: 7px;}
.s_suok .el-input__inner{border-radius: 0;height: 45px;line-height: 45px;padding-left: 35px;color: #181818}
.s_suok .el-input__icon{font-size: 20px;line-height: 45px}
.good_all{position: relative;height: calc(100% - 52px);}
.xiao_s{border-bottom: 1px solid #bcbcbc;}
.xiao_s > span{display: block;line-height: 30px;padding-left: 3%;}
.fwt .g_img img{width: 50px;height:50px;vertical-align: bottom;}
.fwt .list_right_center{margin-bottom: 10px;}
.fwt .list_right_center div label{display: flex;align-items: center;margin-right: 0;width: 94%;margin: 10px auto;}
.fwt .el-input-number{width: 85px;line-height: 24px;}
.fwt .g_tit_money{width: 78%;display: inline-grid;}
.fwt .el-input-number span{height: 23px;line-height: 23px;width: 20px;}
.fwt .el-input-number .el-input input{height: 25px;line-height: 25px;padding: 0;width: 85px;}
.fwt .el-checkbox__inner{width: 20px;height: 20px;}
.fwt .el-checkbox__inner::after{height: 10px;width: 7px;}
.fwt .el-checkbox{margin: 0 3% !important; width: 7% !important;}
.fwt .check_t{box-shadow: 0 0 5px #eee; padding: 10px 3%; width: 90%;margin: auto;}
.fwt .goods_list{padding-bottom: 10px;max-height: 465px;overflow-y: auto;}
// 左侧合计
.order-foot{position: absolute;bottom: 0;left: 0;width: 100%;border-top: 1px solid rgb(211, 208, 203);background: #fff;z-index: 99;}
.order-foot-top{padding: 10px 2%}
.order-foot-top .data-warp{line-height: 30px}
.fw_bold{font-weight: bold;color: #242827}
.col_org{color: orangered !important;}
.order-foot-btm .el-button-group{width: 100%;display: flex;justify-content:space-between;}
.order-foot-btm .el-button-group button{width: 50%;border-radius: 0;padding: 18px 20px;}
.order-foot-btm .el-button-group .el-button--primary:last-child{border-left:none;}
.el-button-group>.el-button:not(:last-child){margin-right: 0;}
.order-foot-btm .el-button-group button span{font-size: 16px;}
// 底部
.el-footer{height: 53px !important;border-top: 2px solid #2086EE;width: calc(100% - 15px)}
.product-foot{height: 51px;}
.product-foot ul li{float: left;display: flex;margin-right: 20px;align-items: center}
.product-foot ul li > span{width: 25px;height: 25px;display: block;text-align: center;line-height: 25px;color: #fff;margin-left: 8px;}
.product-foot-data > span{float: left;}
.product-foot-data > span:nth-child(2){padding: 0 12px;margin: 0 12px;border-left: 1px solid #f2f2f2;border-right: 1px solid #f2f2f2}
// 头部
.el-header{border-bottom: none;height: 46px !important;}
.fwt .top_fix {
  background: #2086ee;
  padding: 0 10px;
}
.fwt .top_fix,
.fwt .top_left {
  height: 100%;
}
.fwt .top_left {
  width: 209px;
  // box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.14);
  border: none;
  box-shadow: none;
}
.fwt .top_left img {
  height: 70%;
  width: 90%;
}
.fwt .top_right {
  height: 100%;
}
.fwt .top_right > ul {
  display: flex;
}
.fwt .top_ul_one {
  border-right: 1px solid #f2f2f2;
  padding-right: 10px;
  height: 100%;
}
.fwt .top_ul_one > li {
  margin-left: 8px;
}
.fwt .top_ul_one > li > i {
  font-size: 20px;
  color: #fff;
}
.fwt .top_ul_two {
  margin-left: 10px;
}
.fwt .top_ul_two > li {
  margin-right: 10px;
}
.fwt .top_ul_two > li img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
}
.fwt .top_ul_two > li span {
  color: #fff;
}
</style>