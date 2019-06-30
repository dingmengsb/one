<template>
    <div class="box">
        <div>
            <div :class="activIndex===index?'active':null" v-for="(item,index) in list " :key="index" @click="webIndex(index)" >{{item}}</div>
        </div>
        <div>
            <div class="fen">当前分类还没有面试!</div>
        </div>
    </div>
</template>

<script>
export default {
   data() {
       return {
           list:["未开始","已打卡","已放弃","全部"],
           activIndex:0,
       }
   },
   methods: {
       webIndex(index){
           this.activIndex=index;
       }
   },
}
</script>

<style>
.box{
    width: 100%;
    height: 100%;
}
.box>div:nth-child(1){
    box-sizing: border-box;
    padding: 0px 20rpx;
    display: flex;
    justify-content: space-between;
    height: 90rpx;
    border-top:2rpx solid #eee;
    align-items: center;
    line-height: 90rpx;
    font-weight: 500;
}
.active{
    color:#197dbf;
    font-weight:500;
    border-bottom:3rpx solid #197dbf;
}
.box>div:nth-child(2) .fen{
    padding:100rpx 0;
    text-align:center;
    font-size:30rpx;
    color:#666;

}
</style>
