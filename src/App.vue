<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 可以将dom缓存到内存中  不会多次放松请求 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import MHeader from "components/m-header/m-header";
import Tab from "components/tab/tab";
export default {
  components: {
    MHeader,
    Tab,
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
