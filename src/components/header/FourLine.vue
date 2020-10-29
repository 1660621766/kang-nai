<template>
  <div class="onlyRadio">
      <div class="radioBox">
        <el-checkbox-group
          v-model="checkedCities"
          :max="1"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkedCities: [],
      cities: cityOptions,
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
.header {
  font-size: 12px !important;
  .onlyRadio {
    display: flex;
    align-items: center;
    padding: 8px;
    span {
      color: #ccc;
      margin-right: 10px;
      font-size: 12px;
      margin-bottom: 2px;
    }
    .radioBox {
      display: flex;
      align-items: center;
      height: 30px;
    }
  }
}
</style>
