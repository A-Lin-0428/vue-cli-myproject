<template>
  <div class="users">
    <!-- 面包屑样式 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索内容开始 -->
    <div style="margin-top: 15px;">
      <el-input
        placeholder="请输入搜索内容"
        class="input-with-select"
        style="width:300px;margin-right:5px"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="success" plain>添加用户</el-button>
    </div>
    <!-- 表格样式开始 -->
    <el-table :data="userList" style="width: 100%" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="手机"></el-table-column>
      <el-table-column label="用户状态" width="180">
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="bottom-start">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="bottom-start">
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="权限" placement="bottom-start">
            <el-button type="primary" icon="el-icon-user"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 引入
import { getAllUserList } from '@/api/user_index.js'
export default {
  data() {
    return {
      value: true,
      userObj: {
        pagenum: 1,
        pagesize: 3
      },
      userList: [{}]
    }
  },
  mounted() {
    getAllUserList(this.userObj)
      .then(res => {
        if (res.data.meta.status === 200) {
          this.userList = res.data.data.users
        }
      })
      .catch(err => (
        console.log(err)
      ))
  }
}
</script>
<style lang="less" scoped>
</style>
