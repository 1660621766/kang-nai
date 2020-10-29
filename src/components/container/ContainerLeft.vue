<template>
  <div class="textBox">
    <div class="textBox-left">
      <div><el-tag type="" size="small" effect="dark">正面</el-tag></div>
      <div><el-tag type="" size="small" effect="dark">境内</el-tag></div>
      <div><el-tag type="" size="small" effect="dark">网站</el-tag></div>
    </div>
    <div class="textBox-right">
      <div><p>
        拉开距离喀什酱豆腐立刻简历库的撒就发了拉开距离零零会计理
        </p>
      </div>
      <div>
        <p>
        拉开距离喀什酱豆腐立刻简历库的撒就发了拉开距离零零会计理fffffffffffffffffffffffffff
        </p>
      </div>
      <div>
        <span v-for="item in items" :key="item.label">
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      msg: "a",
      items:[
          { type: 'time', label: '2020-10-1' },
          { type: 'text', label: '新浪微博' },
          { type: 'text', label: '标签三' },
          { type: 'text', label: '标签四' },
          { type: 'text', label: '标签五' }
        ]
    };
  },
};
</script>

<style lang="less" scoped>
.textBox {
  display: flex;
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
