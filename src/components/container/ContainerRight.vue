<template>
  <div class="detailBox">
    <div class="detailBox-left">
       
      <el-button type="text" size="small" @click="clickButton" >
         复制
         <i class="el-icon-copy-document el-icon--down"></i>
      </el-button>
    </div>
    <div class="detailBox-right">
      <p>{{data.content}}</p>
        <el-link type="primary">https://sdafsadf/#/zh-CN/component/link</el-link>
    </div>
    <div class="detailBox-right"></div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      msg: "a",
    };
  },
  methods:{
    clickButton() {

    }
  }
};
</script>

<style lang="less" scoped>
.el-main{
  padding: 0;
  .detailBox{
    .detailBox-left{
    }
  }
}
</style>
