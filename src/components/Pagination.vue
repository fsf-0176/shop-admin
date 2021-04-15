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
    {{ query }}
  </el-pagination>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    search: {
      type: String,
      default: ''
    },
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
  computed: {
    query() {
      if (this.name !== this.search) {
        console.log(123)
        this.$store.dispatch(this.action, {
          page: this.cur,
          size: this.size,
          name: this.search
        })
        const { path, query } = this.$route
        this.$router.push(
          `${path}?${query.type ? 'type=' + query.type + '&' : ''}page=${
            this.cur
          }&size=${this.size}${this.search ? '&name=' + this.search : ''}`
        )
        this.name = this.search
      }
      return this.search
    }
  },
  methods: {
    change(cur) {
      this.cur = cur
      const { path, query } = this.$route
      this.$store.dispatch(this.action, {
        page: cur,
        size: this.size,
        name: this.query
      })
      this.$router.push(
        `${path}?${
          query.type ? 'type=' + query.type + '&' : ''
        }page=${cur}&size=${this.size}${
          this.query ? '&name=' + this.query : ''
        }`
      )
    },
    sizeChange(size) {
      this.size = size
      this.$store.dispatch(this.action, {
        page: this.cur,
        size: size,
        name: this.query
      })
      const { path, query } = this.$route
      this.$router.push(
        `${path}?${query.type ? 'type=' + query.type + '&' : ''}page=${
          this.cur
        }&size=${size}${this.query ? '&name=' + this.query : ''}`
      )
    }
  }
}
</script>
