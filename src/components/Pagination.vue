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
      cur: 1,
      name: ''
    }
  },
  created() {
    const { page, size, name = '' } = this.$route.query
    this.size = +size > 0 ? +size : this.size
    this.name = name
    this.cur = +page
    const data = {
      page,
      size,
      name
    }
    this.$store.dispatch(this.action, data)
  },
  watch: {
    search(val) {
      console.log(val, this.name)
      if (this.name !== val) {
        console.log(123)
        this.name = val
        this.$store.dispatch(this.action, {
          page: this.cur,
          size: this.size,
          name: this.name
        })
        const { path, query } = this.$route
        this.$router.push(
          `${path}?${query.type ? 'type=' + query.type + '&' : ''}page=${
            this.cur
          }&size=${this.size}${this.name ? '&name=' + this.name : ''}`
        )
      }
    }
  },
  methods: {
    change(cur) {
      this.cur = cur
      const { path, query } = this.$route
      this.$store.dispatch(this.action, {
        page: cur,
        size: this.size,
        name: this.name
      })
      this.$router.push(
        `${path}?${
          query.type ? 'type=' + query.type + '&' : ''
        }page=${cur}&size=${this.size}${this.name ? '&name=' + this.name : ''}`
      )
    },
    sizeChange(size) {
      this.size = size
      this.$store.dispatch(this.action, {
        page: this.cur,
        size: size,
        name: this.name
      })
      const { path, query } = this.$route
      this.$router.push(
        `${path}?${query.type ? 'type=' + query.type + '&' : ''}page=${
          this.cur
        }&size=${size}${this.name ? '&name=' + this.name : ''}`
      )
    }
  }
}
</script>
