<template>
  <div class="app-container">
    <hl-upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"></hl-upload-excel-component>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import hlUploadExcelComponent from "@/components/hl-upload-excel";

export default {
  name: "uploadExcel",
  components: { hlUploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 1;

      if (isLt2M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 2m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  }
};
</script>
