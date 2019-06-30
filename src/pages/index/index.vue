<template>
  <div class="box">
   <map id="map" 
   :longitude="longitude"
   :latitude="latitude"
   scale="16" 
   subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
   show-location style="width: 100%; height: 100%;">
      <div class="foot">
       <div>
          <div @click="mySite">
           <img src="../../../static/images/location.png" alt="">
          </div>
          <div @click="myDeilt">
              <img src="../../../static/images/user.png" alt="">
          </div>
       </div>
       <button @click="addInterview">添加面试</button>
    </div>
   </map>
  </div>
</template>

<script>
import QQMapWX from "@/utils/qqMap"
import {mapState,mapActions} from "vuex"
export default {
   computed: {
     ...mapState({
       longitude:state=>state.index.longitude,
       latitude:state=>state.index.latitude,
     })
   },
  created() {
   let qqmapsdk = new QQMapWX({
            key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
      });
      this.getLocation();
  }, 
  methods: {
    addInterview(){ // 点击跳转到添加面试
      wx.navigateTo({
        url: '/pages/addInterview/main',
      });
    },
    ...mapActions({ // 获取store 中的值 解构出来
       getLocation:"index/getLocation"
    }),
    mySite(){ //点击获取当前位置
       this.getLocation();
    },
    myDeilt(){ //点击跳转到my的首页
        wx.navigateTo({
        url: '/pages/my/main',
      });
    }
  },
}
</script>

<style scoped>
.box{
   width: 100%;
   height: 100%;
   position: relative;
 }
 .box .foot{
   box-sizing: border-box;
   width: 100%;
   position: fixed;
   bottom: 0;
   padding: 0px 5rpx;
   z-index: 9999999999;
 }
 .box .foot button{
   background:#000;
   color: #fff;
 }
 .box .foot>div{
   display: flex;
   justify-content: space-between;
   margin-bottom: 80rpx;
 }
 .box img{
   width: 100rpx;
   height: 100rpx;
   border-radius: 100%;
   box-sizing: border-box;
   padding: 10rpx;
 }
</style>

