<template>
  <div class="PlatformType">
      <span>{{lineName}}:</span>
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
      <el-button type="text" size="small" @click="clickButton" v-show="closeButton">
          {{state ? '展开' : '收起'}}
          <i :class="iconClass"></i>
      </el-button>
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
      iconClass:'el-icon-arrow-right el-icon--right',
      state:true,
    };
  },
  props:['closeButton','lineName'],
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
    clickButton() {
        console.log(lineName)
        this.state =  !this.state;
        this.state ? this.iconClass='el-icon-arrow-right el-icon--right' : 
        this.iconClass='el-icon-arrow-down el-icon--right'
        this.$emit('isShow',this.state)
    }
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
      flex-grow: 1;
    }
  }
}
</style>
