<template>
   <div class="login">
       <div class="container">
           <img src="@/assets/avatar.jpg" alt="" class="avatar">
<el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
  <el-form-item  prop="username" >
    <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="myicon myicon-user"></el-input>
  </el-form-item>
  <el-form-item  prop="password" >
    <el-input v-model="loginForm.password" placeholder="用户名" prefix-icon="myicon myicon-key"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" class="login-btn" @click="login">登录</el-button>
  </el-form-item>
</el-form>
       </div>

   </div>
</template>
<script>
// 引入当前页面的api接口文件
import { login } from '@/api/user_index.js'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
        //   console.log('gogogo')
        //   调用login方法，获取axios发送请求的数据
          login(this.loginForm)
            .then((res) => {
              if (res.data.meta.status === 200) {
                //    跳转到首页中
                this.$router.push({ name: 'home' })
              } else {
                //    提示用户
                this.$message({
                  message: res.data.meta.msg,
                  type: 'error'
                })
              }
            })
            .catch((err) => {
              console.log(err)
              this.$message({
                message: '登录失败',
                type: 'error'
              })
            })
        } else {
          // 给用户提示，用户名和密码不能为空
          this.$message({
            message: '用户名和密码不能为空',
            type: 'error'
          })
        }
      })
    }
  }

}
</script>
<style lang="less" scoped>
  .login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      margin-bottom: 20px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
