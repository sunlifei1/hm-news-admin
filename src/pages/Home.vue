<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <img :src="$axios.defaults.baseURL + user.head_img" alt="" />
          <span>{{ user.nickname }}</span>
          <a href="javascript:;">退出</a>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  created() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.user = user
  },
  data() {
    return {
      user: {}
    }
  }
}
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
