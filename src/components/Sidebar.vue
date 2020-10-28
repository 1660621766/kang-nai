<template>
  <div class="sidebar">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 2px" type="" icon="el-icon-plus"
          >添加</el-button
        >
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      msg: "a",
    };
  },
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
span {
  float: left;
  border-left: 2px solid blue;
  font-size: 14px;
  padding-left: 3px;
  border-radius: 2px;
}
</style>
