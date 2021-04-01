<template>
  <div class="wrap" v-if="page === 'Login' || page === 'Register'">
    <slot />
  </div>
  <div v-else>
    <Header />
    <Content> <slot /> </Content>
    <menus />
  </div>
</template>

<script>
import Menus from './Menus'
import Header from './Header'
import Content from './Content'
export default {
  name: 'Wrap',
  components: { Menus, Header, Content },
  data() {
    return {
      page: 'index'
    }
  },
  watch: {
    $route(val) {
      this.page = val.name
    }
  }
}
</script>
<style lang="less">
.wrap {
  height: 100%;
}
</style>
