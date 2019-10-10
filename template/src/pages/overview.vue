<template>
  <div>
    <div class="justify" v-if="target=='null'">目前还没有项目，来<a>创建项目</a>吧</div>
    <div v-else>项目总览</div>
  </div>
</template>
<script>
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  data() {
    return {
    }
  }
}
</script>
<style>
.justify {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 55px);
  /*height: 100vh;*/
  background-color: bisque;
}
</style>
