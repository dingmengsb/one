<template>
    <div class="box">
        <div class="head">面试信息</div>
        <div>
            <div>
                 <label>公司名称</label>
                 <input type="text" placeholder="请输入公司名称">
            </div>
             <div>
                 <label>公司电话</label>
                 <input type="text" placeholder="请输入面试联系人电话">
            </div>
             <div>
                 <label>面试时间</label>
              <picker mode="time" v-model="time" start="07:00" end="21:00" @change="change1">
                    <view class="picker">
                     {{newDate}} {{time}}
                    </view>
                </picker>
                <icon type="info" @click="iconChange"></icon>
            </div>
             <div>
                 <label>面试地址</label>
                 <input @click="addMian" type="text" disabled="none" placeholder="请输入面试地址">
            </div>
        </div>
        <div class="head">备注信息</div>
        <div class="textA">
           <textarea  placeholder="备注信息(可选,100个子内)" />
        </div>
        <button>确认</button>
    </div>
</template>

<script>
export default {
    computed: {
        newDate(){
            let date=new Date();
            let tiem=date.getFullYear()+'-'+(date.getMonth()+1)+"-"+date.getDate();
            return tiem;
        }
    },
  data() {
      return {
          time:"07:00", 
      }
  },
  methods: {
      change1(e){
          this.time=e.mp.detail.value
      },
      showToast(detail){
         detail=detail==="show"?"在面试前一个小时我们会通知你哦":null
         wx.showToast({
            title: detail,
            icon:"none",
        })  
      },
      iconChange(){
       this.showToast("show")
      },
      addMian(){
          wx.navigateTo({
              url: '/pages/addSite/main',
          });
      }
  },
}
</script>

<style scoped>
 .box{
   width: 100%;
   height: 100%;
   font-size: 32rpx;
 }
 .box>div.head{
    width: 100%;
    padding:15rpx 0 15rpx 30rpx;
    background:#f6f6f6;
     
 }
 .box>div:nth-child(2)>div{
     display: flex;
     height: 80rpx;
     align-items: center;
     padding: 0px 30rpx;
     border-bottom: 2rpx solid #f6f6f6;
     margin-bottom: 18rpx;
 }
 .box>div:nth-child(2)>div>label{
     color: #999;
     margin-right: 40rpx;
 }
 .textA{
     margin-top: 20rpx;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 textarea{
     border:1rpx solid silver;
     height: 200rpx;
     width: 90%;
 }
 button{
    margin-top:50rpx;
    color:#fff;
    /* background:#197dbf; */
    background:#999;
 }
 .picker{
     width: 470rpx;
 }
</style>
