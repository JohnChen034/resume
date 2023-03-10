<template>
  <router-view/>
</template>

<script setup>
import {isMobile} from "./utils/isMobile.js"
import {useRouter} from "vue-router"
const router = useRouter()
if (isMobile()) {
  router.replace("/mobile")
} else {
  router.replace("/")
}
</script>

<script>
export default {
  name: "App"
}
</script>

<style scoped lang="less">
</style>