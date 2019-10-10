<template>
  <div>
    <div class="zz">
      <el-dialog
        title="项目列表"
        :visible.sync="dialogVisible"
        top="55px"
        left="200px"
        width="400px"
        :show-close=false
        :before-close="handleClose">
        <span>项目列表</span>
        <div>当前选择</div>
        <div>可用选择</div>
        <div class="setting">
          <i class="el-icon-setting"></i>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
    }
  },
  props: []
}
</script>
<style scoped>
 .zz >>> .el-dialog {
    margin-left: 305px;
  }
 .setting {
   position: absolute;
   top: 20px;
   right: 20px;
 }
</style>
