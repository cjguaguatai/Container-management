<template>
  <div class="footCase-container">
    <div class="pagination">
      共{{ SearchObj.totalCount }}条记录 第 {{ SearchObj.pageIndex }}/{{
        SearchObj.totalPage
      }}
      页
    </div>
    <div class="pages">
      <el-button-group>
        <el-button
          type="primary"
          size="small"
          class="last_page"
          :class="{ disabled: lastDisabled }"
          :disabled="lastDisabled"
          @click.native="$emit('lastPageIndex')"
          >上一页</el-button
        >
        <el-button
          type="primary"
          size="small"
          class="next_page"
          :class="{ disabled: lastDisabled }"
          :disabled="nextDisabled"
          @click.native="$emit('addPageIndex')"
          >下一页</el-button
        >
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerCase",
  data() {
    return {};
  },

  props: {
    SearchObj: {
      type: Object,
      required: true,
    },
  },

  created() {},

  methods: {},

  computed: {
    lastDisabled() {
      let flag = this.SearchObj.pageIndex == 1 ? true : false;
      return flag;
    },
    nextDisabled() {
      let flag =
        this.SearchObj.pageIndex == this.SearchObj.totalPage ? true : false;
      return flag;
    },
  },
};
</script>

<style scoped lang="scss">
.footCase-container {
  background: #fff;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .pagination {
    font-size: 16px !important;
    color: #dbdfe5 !important;
  }
  .last_page,
  .next_page {
    border-radius: 2px;
    background-color: #d5ddf8;
    border: none;
    margin: 0 16px;
  }
  .disabled {
    color: #d8dde3;
    background: #edf0f9;
  }
}
</style>
