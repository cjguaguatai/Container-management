<template>
  <div class="searchInput-container">
    <span
      ><slot />:
      <el-input
        v-model="value.taskCode"
        size="medium"
        clearable
        placeholder="请输入内容"
      ></el-input
    ></span>
    <!-- @input="$emit('update:value', value)" -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    value: {
      type: Object,
      required: true,
    },
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
