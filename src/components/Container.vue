<template>
  <div class="container">
    <div class="container-left">\
      <div v-for="(item, index) in list" :key="index" @click="clickCom(index)">
        <ContainerLeft :con="item" @message="getIndex"></ContainerLeft>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total=5
        :page-size=1>
      </el-pagination>
    </div>
    <div class="container-right"  v-show="index !== ''">
      <div>
         <ContainerRight :data="list[index]" ></ContainerRight>
      </div>
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
      list:[],
      index:''
    };
  },
  components:{
    ContainerLeft,
    ContainerRight
  },
  methods:{
    clickCom(index) {
      console.log(index)
      this.index = index
    }
  },
  mounted() {
    this.$axios.get('../static/detail.json').then(res =>{
      
      this.list=res.data.data
      console.log(this.list)
    })
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
