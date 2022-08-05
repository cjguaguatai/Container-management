<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
      row-key="String "
    >
      <el-table-column
        property="id"
        width="50"
        label="序号"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="taskCode"
        label="工单编号"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="innerCode"
        label="设备编号"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="taskType.typeName"
        label="工单类型"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="createType"
        label="工单方式"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="taskStatus"
        label="工单状态"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="userName"
        label="运营人员"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        property="createTime"
        label="创建日期"
        label-class-name="bgc"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
        label-class-name="bgc"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="medium"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },

    handleClick(row) {
      console.log(row);
    },
  },

  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .bgc {
  background: rgb(243, 246, 251) !important;
}
</style>
