<template>
  <div class="container">
    <div class="container-left">
      <ContainerLeft></ContainerLeft>
    </div>
    <div class="container-right">
      <ContainerRight></ContainerRight>
    </div>
  </div>
</template>

<script>
import ContainerLeft from './container/ContainerLeft'
import ContainerRight from './container/ContainerRight'
export default {
  data() {
    return {
      msg: "a",
    };
  },
  components:{
    ContainerLeft,
    ContainerRight
  }
};
</script>

<style lang="less" scoped>
.el-main{
  .container{
    display: flex;
    .container-left{
      flex-grow: 1;
      border-bottom: 1px solid #cccccc;
      border-right: 1px solid #dddddd;
    }
    .container-right{
      width: 40%;
    }
  }
}
</style>
