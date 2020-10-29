<template>
  <div class="search">
    <span>时间:</span>
    <div class="radioBox">
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="width:230px;margin-right:10px"
      >
      </el-date-picker>

      <el-select v-model="value" placeholder="请选择" style="width:100px;margin-right:10px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="input"  placeholder="请输入内容" style="width:150px;margin-right:10px"></el-input>
      <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
      <el-button size="small" icon="el-icon-wallet">保存</el-button>
      <el-button size="small" icon="el-icon-menu">全部数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options:[],
      input:''
    };
  },
  methods: {
  
  },
};
</script>

<style  lang="less">
.header {
  .el-checkbox__label {
    font-size: 12px !important;
  }
}
</style>
<style  lang="less" scoped>
  .search {
    display: flex;
    align-items: center;
    padding: 4px;
    span {
      color: #ccc;
      margin-right: 10px;
      font-size: 12px;
      margin-bottom: 2px;
    }
    .radioBox {
      display: flex;
      align-items: center;
      // width: 240px;
    }
  }
</style>
