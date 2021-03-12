<template>
  <div class="wrap">
    <Header />
    <Content> <slot/> </Content>
    <menus />
  </div>
</template>

<script>
import Menus from './Menus'
import Header from './Header'
import Content from './Content'
export default {
  name: 'Wrap',
  components: { Menus, Header, Content }
}
</script>
<style lang="less">
.wrap {
  height: 100%;
}
</style>
