<template>
  <div class="textBox">
    <div class="textBox-left">
      <div v-for="(element, i) in con.tag" :key="i"><el-tag type="" size="small" effect="dark" >{{element}}</el-tag></div>
    </div>
    <div class="textBox-right">
      <div><p>
        {{con.title}}
        </p>
      </div>
      <div>
        <p>
        {{con.content}}
        </p>
      </div>
      <div>
        <span v-for="(element, i) in con.logo" :key="i">
          {{ element }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props:['con'],
  data() {
    return {
      msg: "a",
    };
  },
  methods: {
    clickLine(index) {
      this.$emit('message', index)
    }
  },
  mounted(){
    this.con
  }
};
</script>

<style lang="less" scoped>
.textBox {
  display: flex;
      border-bottom: 1px solid #cccccc;
  .textBox-left {
    padding: 15px;
    div {
      margin-bottom: 5px;
    }
  }
  .textBox-right {
    padding: 15px;
    flex: 1;
    div {
      width: 100%;
      padding: 5px 0;
      text-align: start;
    }
    div p{
      text-align: start;
      // display: inline-block;
      // white-space: nowrap;
      // width: 60%;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // -webkit-line-clamp: 2;
      margin: 0%;
    }
  }
}
</style>
