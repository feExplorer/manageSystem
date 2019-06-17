<template>
  <section class="app-container">
    <div class="table-container-main" :class="{'hidden-bar':hiddenState}" ref="tableContainerMain">
      <!--工具条-->
      <el-col :span="24" class="toolbar-origin" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters" @submit.native.prevent>
          <el-form-item>
            <el-input v-model="filters.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="a()">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters" @submit.native.prevent>
          <el-form-item>
            <el-input v-model="filters.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="a()">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--列表-->
      <el-table :data="users" highlight-current-row height="100%" style="width: 100%;" ref="table">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="sex" label="性别" width="120" :formatter="formatSex"></el-table-column>
        <el-table-column prop="age" label="年龄" width="120"></el-table-column>
        <el-table-column prop="birth" label="生日" width="120"></el-table-column>
        <el-table-column prop="addr" label="地址" min-width="160"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-button type="danger" :disabled="this.sels.length===0">批量删除</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        style="float:right;margin-top:5px"
      ></el-pagination>
    </el-col>

    <!--编辑界面-->
    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="editForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary">添加</el-button>
        <el-button v-else type="primary">修改</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import { mockdata } from "./mockdata";
// import util from "@/utils/table.js";
// import {
//   getUserListPage,
//   removeUser,
//   batchRemoveUser,
//   editUser,
//   addUser
// } from "@/api/userTable";

export default {
  data() {
    return {
      dialogStatus: "",
      textMap: {
        update: "Edit",
        create: "Create"
      },
      dialogFormVisible: false,
      filters: {
        name: ""
      },
      users: [],
      total: 0,
      page: 1,
      sels: [], // 列表选中列
      editFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      // 编辑界面数据
      editForm: {
        id: "0",
        name: "",
        sex: 1,
        age: 0,
        birth: "",
        addr: ""
      },

      addFormVisible: false, // 新增界面是否显示
      addFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      tableScrollTop: 0,
      hiddenState: false
    };
  },
  methods: {
    a() {
      console.log("11");
      this.hiddenState = !this.hiddenState;
    },
    // 监听滚动
    scrollListener: function() {
      // this.box = this.$refs.tableContainerMain;
      this.box = this.$refs.table.bodyWrapper;
      this.box.addEventListener(
        "scroll",
        () => {
          // this.tableScrollTop = this.$refs.tableContainerMain.scrollTop;
          this.tableScrollTop = this.$refs.table.bodyWrapper.scrollTop;
          console.log(this.$refs.table.bodyWrapper.scrollTop);
        },
        false
      );
    },
    // 性别显示转换
    formatSex: function(row, column) {
      return row.sex === 1 ? "男" : row.sex === 0 ? "女" : "未知";
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    // 获取用户列表
    getUsers() {
      this.total = mockdata().total;
      this.users = mockdata().users;
    },
    // 删除
    handleDel(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      })
        .then(() => {})
        .catch(() => {});
    },
    // 显示编辑界面
    handleEdit(index, row) {
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    // 显示新增界面
    handleAdd() {
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.editForm = {
        id: "0",
        name: "",
        sex: 1,
        age: 0,
        birth: "",
        addr: ""
      };
    },
    // 编辑
    updateData() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {})
            .then(() => {})
            .catch(e => {
              // 打印一下错误
              console.log(e);
            });
        }
      });
    },
    // 新增
    createData: function() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {})
            .then(() => {})
            .catch(e => {
              // 打印一下错误
              console.log(e);
            });
        }
      });
    },
    // 全选单选多选
    selsChange(sels) {
      this.sels = sels;
    },
    // 批量删除
    batchRemove() {
      this.$confirm("确认删除选中记录吗？", "提示", {
        type: "warning"
      })
        .then(() => {})
        .catch(() => {});
    }
  },
  mounted() {
    this.getUsers();
    this.scrollListener();
  },
  watch: {
    tableScrollTop: function(newVal, oldVal) {
      if (newVal > 62) {
        if (newVal > oldVal) {
          this.hiddenState = false;
        } else {
          this.hiddenState = true;
        }
      }
      console.log(this.hiddenState);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  height: calc(100vh - 85px);

  .table-container-main {
    height: calc(100vh - 125px);
    overflow: hidden;
    .toolbar-origin {
      height: 0px;
      background: #fff;
    }
    .toolbar {
      height: 62px;
      position: fixed;
      display: none;
      opacity: 0;
      z-index: 999;
      transition: all 0s;
      background: #fff;
    }
  }
  .hidden-bar {
    .toolbar {
      height: 0px;
      display: block;
      opacity: 0;
    }
    .toolbar-origin {
      height: 62px;
    }
  }
}
</style>
