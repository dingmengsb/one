<template>
    <div class="box">
      <div class="head">
        <img src="../../../static/images/my.png" alt="">
        <div>{{phone}}</div>
      </div>
      <div @click="mySite" class="actionDiv">
          <icon type="waiting" />
          <label for="">我的面试</label>
          <img src="../../../static/images/arrow.svg" alt="">
      </div>
        <div @click="clickService" class="actionDiv">
          <icon type="waiting" />
          <label for="">客服中心</label>
          <img src="../../../static/images/arrow.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          phone:"####"
      }
  },
  created() {
      wx.login({    
        success:(res)=>{
              console.log('loginCode:', res);
              wx.request({
                  url: 'https://sign.jasonandjay.com/user/code2session',
                  data: {
                      code: res.code
                  },
                  method: 'POST',
                  success: (result)=>{
                    let start=result.data.data.phone.substr(0,3);
                    let end=result.data.data.phone.substr(-4);
                    this.phone=start+"****"+end
                  }
              });
            }
       });
  },
  methods: {
      clickService(){
        wx.showModal({
        title: '模拟进入客服会话',
        content: '开发者工具暂不支持打开客服会话,请使用真机调试',
        showCancel:false,
        confirmText:"返回",
        confirmColor:"#07c160",
        success (res) {
            if (res.confirm) {
            console.log('用户点击确定')
            }
        }
        })
      },
      mySite(){
          wx.navigateTo({
              url: "/pages/mySite/main",
              success: (result)=>{
                  
              },
              fail: ()=>{},
              complete: ()=>{}
          });
      }
  },
}
</script>

<style>
.box{
    width: 100%;
    height: 100%;
}
.head{
   background:#f4f6f9;
    width:100%;
    height:350rpx;
    box-sizing:border-box;
    padding:50rpx 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

}
.head img{
    width:100rpx;
    height:100rpx;
    background:#fff;
    text-align:center;
    padding:20rpx;
    border-radius:50%;
}
.actionDiv{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    padding:30rpx 40rpx;
    border-bottom:1rpx solid #eee;
}
.actionDiv img{
    width: 40rpx;
    height: 40rpx;
}
.actionDiv label{
    flex:1;
    margin-left:40rpx;
    color:#666;
    font-size:36rpx;
    background:transparent;
    text-align:left;
}

</style>
