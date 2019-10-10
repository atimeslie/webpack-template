<template>
  <el-row class="tac">
    <el-col>
      <!--default-active="1"-->
      <el-menu
        :default-active="$route.path"
        :router="true"
        class="el-menu-vertical-demo"
        background-color="#325157"
        text-color="#FFF"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item :index="'/overview/'+target">
          <i class="el-icon-menu"></i>
          <span slot="title">项目总览</span>
        </el-menu-item>
        <el-menu-item :index="'/result/'+target" >
          <i class="el-icon-document"></i>
          <span slot="title">测评结果</span>
        </el-menu-item>
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>测试管理</span>
          </template>
          <el-menu-item :index="'/testM/application/'+target">应用管理</el-menu-item>
          <el-menu-item :index="'/testM/example/'+target">用例管理</el-menu-item>
          <el-menu-item :index="'/testM/task/'+target">任务管理</el-menu-item>
        </el-submenu>
        <el-menu-item :index="'/deviceM/'+target">
          <i class="el-icon-setting"></i>
          <span slot="title">设备管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // target: 'null',
      currentRoute: ''
    }
  },
  create() {
    // this.target = '注音'
  },
  computed: {
    ...mapGetters(['target'])
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-menu-vertical-demo {
  overflow-x: hidden;
}
.tac >>> .el-menu{
  border-right: 0px;
}
</style>
