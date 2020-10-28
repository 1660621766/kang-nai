<template>
  <div class="header">
    <div class="PlatformType">
      <span>平台类型:</span>
      <div class="radioBox">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 10px"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="PlatformType">
      <span>平台类型:</span>
      <div class="radioBox">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 10px"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="PlatformType">
      <span>平台类型:</span>
      <div class="radioBox">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 10px"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="PlatformType">
      <span>平台类型:</span>
      <div class="radioBox">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 10px"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="PlatformType">
      <span>xxxx:</span>
    </div>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
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
