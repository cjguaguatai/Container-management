<template>
  <div class="footCase-container">
    <span class="pagination"
      >共{{ totalCount }}条记录 第 {{ pageIndex }}/{{ totalPage }} 页</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    pageIndex: {
      type: String,
      require: true,
    },
    totalPage: {
      type: String,
      require: true,
    },
    totalCount: {
      type: String,
      require: true,
    },
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.footCase-container {
  background: #fff;
  padding: 32px 16px;
  .pagination {
    font-size: 16px !important;
    color: #dbdfe5 !important;
  }
}
</style>
