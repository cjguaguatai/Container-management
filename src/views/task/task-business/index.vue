<template>
  <div>
    <!-- 头部 -->
    <el-card class="box-card" body-style="display: flex">
      <searchInput>工单编号</searchInput>
      <searchSelect :options="allTaskStatus">工单状态</searchSelect>
      <el-button
        type="primary"
        size="small "
        icon="el-icon-search"
        class="searchBtn"
        >搜索</el-button
      >
    </el-card>

    <!-- main -->
    <el-card class="main_box">
      <div class="edit">
        <el-button
          type="primary"
          size="small"
          icon="el-icon-circle-plus-outline"
          class="addBtn"
          >新建</el-button
        ><el-button type="primary" size="small" class="configureBtn"
          >工单配置</el-button
        >
      </div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column
          type="index"
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
          property="taskType"
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
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- footer -->
      <footerCase :pageIndex='SearchObj.pageIndex' :totalPage='SearchObj.totalPage' :totalCount='SearchObj.totalCount'/>
    </el-card>
  </div>
</template>

<script>
import searchInput from "@/components/searchInput";
import searchSelect from "@/components/searchSelect";
import footerCase from "@/components/footerCase";
import { getAllTaskStatus, getTaskSearchList } from "@/api/task";
import dayjs from "dayjs";
export default {
  name: "task-business",
  data() {
    return {
      tableData: [],
      currentRow: null,
      allTaskStatus: [], //工单状态列表
      SearchObj: {}, //工单搜索返回的全部内容
    };
  },

  created() {
    this.getAllTaskStatus();
    this.getTaskSearchList();
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleClick(row) {
      console.log(row);
    },
    // 获取工单状态列表
    async getAllTaskStatus() {
      try {
        const { data } = await getAllTaskStatus();
        this.allTaskStatus = data;
      } catch (error) {
        console.log(error);
      }
    },
    // 工单搜索
    async getTaskSearchList() {
      try {
        const { data } = await getTaskSearchList();
        // 更改数据
        this.SearchObj = data;
        this.changeTableData(data.currentPageRecords);
      } catch (error) {
        console.log(error);
      }
    },
    // 更改数据
    changeTableData(arr) {
      // console.log(this.tableData);
      let arr1 = arr;
      arr1.forEach((ele) => {
        // console.log(ele);
        if (ele.taskType.typeId === 2) {
          ele.taskType = "补货工单";
        }
        if (ele.createType === 0) {
          ele.createType = "自动";
        } else {
          ele.createType = "手动";
        }
        if (ele.taskStatus === 1) {
          ele.taskStatus = "待办";
        } else if (ele.taskStatus === 2) {
          ele.taskStatus = "进行";
        } else if (ele.taskStatus === 3) {
          ele.taskStatus = "取消";
        } else {
          ele.taskStatus = "完成";
        }

        dayjs(ele.createTime);
        ele.createTime = dayjs().format("YYYY.MM.DD HH.mm.ss");
        // console.log(ele.updateTime);
        // console.log(ele);
        this.tableData = arr1;
      });
    },
  },
  components: { searchInput, searchSelect, footerCase },
};
</script>

<style scoped lang="scss">
.searchBtn {
  background-color: #5f84ff !important;
}
.addBtn {
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
  border: none;
}
.configureBtn {
  background-color: #fbf4f0 !important;
  border: none;
  color: #655b56 !important;
}
.box-card {
  margin-bottom: 17px;
}
.edit {
  margin-bottom: 20px;
}
::v-deep .bgc {
  background: rgb(243, 246, 251) !important;
}
</style>
