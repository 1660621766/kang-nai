<template>
  <div class="detailBox">
    <div class="detailBox-top">
      <el-button
        type="text"
        size="small"
        @click="clickButton"
        v-clipboard:copy="data.content"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        复制
        <i class="el-icon-copy-document el-icon--down"></i>
      </el-button>
    </div>
    <div class="detailBox-center" id="copyEle">
      <p>{{ data.content }}</p>
      <el-link type="primary">https://sdafsadf/#/zh-CN/component/link</el-link>
    </div>
    <div class="detailBox-bottom"></div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      msg: "a",
    };
  },
  methods: {
    onCopy(e) {
      console.log(e);
    },
    onError(e) {},
  },
};
</script>

<style lang="less" scoped>
.el-main {
  padding: 0;
  .detailBox {
    .detailBox-left {
    }
  }
}
</style>
