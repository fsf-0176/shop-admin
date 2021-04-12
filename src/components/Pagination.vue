<template>
  <el-pagination
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="list.count"
    :current-page="cur"
    @current-change="change"
    @size-change="sizeChange"
    v-if="list.count / size > 1"
  >
  </el-pagination>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    list: {
      type: Object,
      default: function () {
        return { msg: '没有数据' }
      }
    },
    action: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      size: 10,
      cur: 1
    }
  },
  created() {
    const { page, size } = this.$route.query
    this.size = +size > 0 ? +size : this.size
    const data = {
      page,
      size,
      name: ''
    }
    this.$store.dispatch(this.action, data)
  },
  methods: {
    change(cur) {
      this.cur = cur
      const { path } = this.$route
      this.$store.dispatch(this.action, {
        page: cur,
        size: this.size,
        name: ''
      })
      this.$router.push(`${path}?page=${cur}&size=${this.size}`)
    },
    sizeChange(size) {
      this.size = size
      this.$store.dispatch(this.action, {
        page: this.cur,
        size: size,
        name: ''
      })
      const { path } = this.$route
      this.$router.push(`${path}?page=${this.cur}&size=${size}`)
    }
  }
}
</script>
