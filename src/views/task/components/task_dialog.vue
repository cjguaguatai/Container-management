<template>
  <div>
    <el-dialog title="新增工单" :center="true" :visible="show">
      <!-- 表单 -->
      <slot />
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},

  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="less"></style>
