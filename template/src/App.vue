<template>
  <div id="app">
    <div class="header">
      <div class="logo">手机输入法评测平台</div>
      <div v-if="target!=='null'" class="target" >{{ target }}</div>
      <!--<Icon v-if="target!=='null'" type="ios-add-circle" color="#FFF" size="20"/>-->
      <i class="el-icon-setting"></i>
    </div>
    <div class="main">
      <div class="main-left">
        <navv></navv>
      </div>
      <div class="main-right">
        <router-view></router-view>
      </div>
    </div>
    <dialogg></dialogg>
  </div>
</template>

<script>
import nav from './components/nav'
import { mapMutations } from 'vuex'
import mixins from '@/mixins'
import dialog from '@/components/changePro'

export default {
  name: 'App',
  mixins: [mixins],
  data() {
    return {
      img: ''
    }
  },
  watch: {
    target() {
      this.$router.push('/overview/' + this.target)
    }
  },
  components: {
    navv: nav,
    dialogg: dialog
  },
  created() {
    this.$fetch('public.machineMarkAfterId', { 'name': 'zhang', id: 1 }).then(res => {
      // console.log(res)
    })
    this.SET_TARGET('注音')
    if (window.location.href.indexOf('overview') !== -1) {
      this.$router.push('/overview/' + this.target)
    }
  },
  methods: {
    ...mapMutations(['SET_TARGET'])
  }
}
</script>
<style scoped lang="less">
html, body, #app {
  width: 100%;
  margin: 0;
}
.header {
  background-color: rgb(31, 58, 61);
  color: #c0ccda;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.logo {
  display: inline-block;
  font-size: 25px;
  margin-left: 50px;
  line-height: 55px;
}
.target {
  display: inline-block;
  line-height: 55px;
  margin-left: 30px;
  margin-right: 10px;
}
.main {
  margin-top: 55px;
  width: 100%;
}
.main-left {
  width: 180px;
  position: fixed;
  top: 55px;
  left: 0px;
  bottom: 0px;
  background-color:#325157;
  /* bisque*/
}
.main-right {
  margin-left: 180px;
  width: calc(100% - 180px);
  height: auto;
}
</style>

