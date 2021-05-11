<template>
  <div id="app" class="title">{{message}}</div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello, VUe"
    }
  }
}
</script>
<style lang="less" scoped>
  .title {
    color: red;
  }
</style>