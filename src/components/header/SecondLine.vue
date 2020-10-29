<template>
  <div class="infoSource">
      <span>信息来源:</span>
      <div class="radioBox">
        <el-radio v-model="radio" label="false">境内</el-radio>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      radio: true,
    };
  },
  methods: {
    
  },
};
</script>

<style  lang="less" scoped>
.header {
  font-size: 12px !important;
  .infoSource {
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
      height: 30px;
    }
  }
}
</style>
