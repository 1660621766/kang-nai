<template>
  <div class="container">
    <div class="container-left">\
      <div v-for="(item, index) in list" :key="index" @click="clickCom(index)">
        <ContainerLeft :con="item" @message="getIndex"></ContainerLeft>
      </div>
      <el-pagination
        v-show="pageStatus" 
        background
        layout="prev, pager, next"
        :total=5
        :page-size=1>
      </el-pagination>
    </div>
    <div class="container-right"  v-show="index !== ''">
         <ContainerRight :data="list[index]" ></ContainerRight>
    </div>
  </div>
</template>

<script>
import ContainerLeft from './container/ContainerLeft'
import ContainerRight from './container/ContainerRight'
export default {
  data() {
    return {
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
    },
    getIndex(){

    }
  },
  mounted() {
    // this.$axios.get('../static/detail.json').then(res =>{
    //   this.list=res.data.data;
    //   this.pageStatus = this.list.length ? true : false
    //   console.log(this.list)
    // })
  },
  computed :{
    list: function(){
      return this.$store.state.containerObj.listData
    },
    pageStatus() {
      return this.$store.state.containerObj.listData.length ? true : false
    }
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
