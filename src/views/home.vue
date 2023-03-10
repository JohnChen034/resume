<template>
  <el-row>
    <home-hero/>
  </el-row>

  <el-row>
    <home-intro/>
  </el-row>
</template>

<script setup>
import HomeHero from "../components/home-hero.vue";
import HomeIntro from "../components/home-intro.vue";
</script>

<script>
export default {
  name: "Home"
}
</script>

<style scoped lang="less">
</style>