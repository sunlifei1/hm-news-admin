<template>
  <div class="login">
    <!-- //element-ui的输入框内容 -->
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 6,
            message: '长度在 3 到 6 个字符',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },

  methods: {
    async login() {
      console.log('登录')
      try {
        await this.$refs.form.validate()
        //如果校验通过发送ajax请求进行登录
        console.log('校验通过')
        //发送ajax强求
        const res = await this.$axios.post('/login', this.form)
        const { statusCode, data } = res.data
        if (statusCode === 200) {
          this.$message.success('登陆成功')
          console.log(data)
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          this.$router.push('/')
        } else {
          this.$message.error('用户名或密码错误')
        }
      } catch {
        console.log('检验失败')
      }
    },
    reset() {
      console.log('重置')
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.el-form {
  margin: 120px auto;
  border: 1px solid #ccc;
  padding: 10px;
  width: 400px;
}
</style>
