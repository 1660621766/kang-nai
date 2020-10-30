<template>
  <div class="header">
    <FirstLine  ref="firstLine" @isShow="updateVisible" :defaultData="platformType" ></FirstLine>
    <el-divider></el-divider>
    <div v-show="dialog_visible">
      <SecondLine></SecondLine>
      <el-divider></el-divider>
      <FirstLine ref="twoLine" :defaultData="tendencies"></FirstLine>
      <el-divider></el-divider>
      <FourLine></FourLine>
      <el-divider></el-divider>
    </div>
     <div class="search">
    <span>时间:</span>
    <div class="radioBox">
      <el-date-picker
        v-model="query.times"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="width:230px;margin-right:10px"
      >
      </el-date-picker>

      <el-select v-model="query.select" placeholder="请选择" style="width:100px;margin-right:10px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="query.content"  placeholder="请输入内容" style="width:150px;margin-right:10px"></el-input>
      <el-button type="primary" size="small" @click="search" icon="el-icon-search">搜索</el-button>
      <el-button size="small" icon="el-icon-wallet">保存</el-button>
      <el-button size="small" icon="el-icon-menu">全部数据</el-button>
    </div>
  </div>

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
      dialog_visible :true,
      platformType:{
        types:[
          "上海", "北京", "广州", "深圳"
        ],
        title:"平台类型",
        closeButton:true,
      },
      options:[],
      input:'',
      query:{
        platformType:"",
        tendencies:"",
        InfoSources:"",
        four:"",
        times:"",
        select:"",
        content:""
      },
      tendencies:{
        types:[
          "红烧", "清真", "水煮", "烧烤"
        ],
        title:"倾向性",
        closeButton:false,
      },
      allData:[]
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
    },
    search(){
      this.query.platformType = this.$refs.firstLine.getChecctData()
      this.query.tendencies= this.$refs.twoLine.getChecctData()
      this.$axios.get('../static/detail.json',{
        params:{
          data:this.query
        }
      }).then((res) => {
        this.$store.commit('increment',res.data.data)
        console.log(this.$store.state.containerObj)
      })
    }
    
  },
};
</script>

<style  lang="less" scoped>
.el-divider--horizontal {
  margin: 0;
}
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
