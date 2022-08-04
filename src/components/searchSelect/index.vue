<template>
  <div class="searchSelect-container">
    <slot />:
    <el-select
      clearable
      v-model="value"
      filterable
      size="medium"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.statusId"
        :label="item.statusName"
        :value="item.statusId"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
      
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.searchSelect-container {
  margin-right: 22px;
}
::v-deep .el-input {
  margin-left: 12px;
}
</style>
