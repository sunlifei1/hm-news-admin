<template>
  <div class="post-list">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/post-list' }">文章列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- ele的表格 -->
    <template>
      <el-table :data="postlist" style="width: 100% ">
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="user.nickname" label="作者"></el-table-column>
        <el-table-column prop="address" label="封面">
          <template v-slot="scope">
            <img :src="urlfixed(scope.row.cover[0].url)" alt />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template v-slot="scope">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- 分页系统 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[3, 6, 9, 12]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 3,
      postlist: [],
      total: 0
    };
  },
  methods: {
    async getpost() {
      const res = await this.$axios.get("/post", {
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
      });
      console.log(res.data);
      const { statusCode, data, total } = res.data;
      if (statusCode === 200) {
        this.postlist = data;
        this.total = total;
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getpost();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getpost();
    },
    indexMethod(index) {
      return index + 1 + this.pageSize * (this.pageIndex - 1);
    },
    urlfixed(val) {
      if (val.startsWith("http")) {
        return val;
      } else {
        return this.$axios.defaults.baseURL + val;
      }
    }
  },
  created() {
    this.getpost();
  }
};
</script>
<style lang="less" scoped>
.post-list {
  .el-table {
    margin-top: 20px;
  }
  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
  }
}
</style>