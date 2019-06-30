<template>
    <div class="box">
      <div>
          <label for="">北京</label>
          <input type="text" placeholder="面试地点">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .box{
   width: 100%;
   height: 100%;
   font-size: 32rpx;
 }
 .box>div:nth-child(1){
     width: 100%;
     display: flex;
     height: 80rpx;
     font-size: 40rpx;
     align-items: center;
     border-top:2rpx solid #eee;
     border-bottom:2rpx solid #eee;
 }
 .box>div:nth-child(1)>label{
     width: 200rpx;
     display: flex;
     justify-content: center;
 }
</style>
