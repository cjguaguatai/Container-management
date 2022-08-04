<template>
  <div class="searchInput-container">
    <span
      ><slot />:
      <el-input
        v-model="input"
        size="medium"
        placeholder="请输入内容"
      ></el-input
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.searchInput-container {
  margin-right: 10px;
}
.el-input {
  width: 205px;
  height: 36px;
  margin-left: 12px;
}
</style>
