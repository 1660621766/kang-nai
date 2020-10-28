<template>
  <div class="main">
    <el-container class="main_box">
      <el-aside width="200px" class="aside">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header style="height:auto">
          <Header></Header>
        </el-header>
        <div class="divider"></div>
        <el-main>
          <Container></Container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Header from "./Header";
import Container from "./Container";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    Sidebar,
    Header,
    Container,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main {
  .main_box {
    background: #fff;
    .aside{
      border-right: 10px solid #f3f6f7;
      background: #f3f6f7;
    }
    .divider {
      height: 30px;
      background: #f3f6f7;
    }
  }
}
</style>
