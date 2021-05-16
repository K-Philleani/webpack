<template>
  <div id="app" class="title">{{message}}</div>
</template>
<script>
export default {
  data() {
    return {
      message: "Helldddddddo, Vue"
    }
  },
  mounted() {
    this.log()
  },
  methods: {
    log() {
      console.log('1111000');
    }
  }
}
</script>
<style lang="less" scoped>
  .title {
    color: red;
  }
</style>