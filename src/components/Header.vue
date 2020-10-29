<template>
  <div class="header">
    <FirstLine @isShow="updateVisible" :closeButton='true' :lineName='"平台类型"'></FirstLine>
    <el-divider></el-divider>
    <div v-show="dialog_visible">
      <SecondLine></SecondLine>
      <el-divider></el-divider>
      <FirstLine :closeButton='false' :lineName='"倾向性"'></FirstLine>
      <el-divider></el-divider>
      <FourLine></FourLine>
      <el-divider></el-divider>
    </div>
    <FiveLine></FiveLine>
    <el-divider></el-divider>
    <div class="PlatformType">
      <span>xxxx:</span>
    </div>
  </div>
</template>

<script>
import FirstLine from "./header/FirstLine";
import SecondLine from "./header/SecondLine";
import ThreeLine from "./header/ThreeLine";
import FourLine from "./header/FourLine";
import FiveLine from "./header/FiveLine";
export default {
  data() {
    return {
      dialog_visible :true
    };
  },
  components: {
    FirstLine,
    SecondLine,
    ThreeLine,
    FourLine,
    FiveLine,
  },
  methods: {
    updateVisible(val) {
      this.dialog_visible=val
    }
  },
};
</script>

<style  lang="less" scoped>
.el-divider--horizontal {
  margin: 0;
}
.header {
  font-size: 12px !important;
  .PlatformType {
    display: flex;
    align-items: center;
    padding: 8px;
    span {
      color: #ccc;
      margin-right: 10px;
      font-size: 12px;
    }
    .radioBox {
      display: flex;
      align-items: center;
    }
  }
}
</style>
