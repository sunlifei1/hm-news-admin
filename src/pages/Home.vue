<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <div class="logo">黑马头条</div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">文章列表</span>
          </el-menu-item>
          <el-menu-item index="/post-publish">
            <i class="el-icon-menu"></i>
            <span slot="title">文章发布</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 页面头部 -->
        <el-header>
          <img :src="$axios.defaults.baseURL + user.head_img" alt />
          <span>{{ user.nickname }}</span>
          <a href="javascript:;" @click="exit">退出</a>
        </el-header>

        <!-- 页面主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.user = user;
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    exit() {
      this.$confirm("确定要退出吗?", "温馨提示")
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("/login");
          this.$message.success("推出成功");
        })
        .catch(() => {
          this.$message.warning("操作取消");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  .el-container {
    width: 100%;
    height: 100%;
  }
}
.el-aside {
  background-color: pink;
  .logo {
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: #000;
    color: white;
  }
}
.el-header {
  background-color: skyblue;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span {
    margin: 0 10px;
  }
}
.el-main {
  background-color: orange;
}
</style>
