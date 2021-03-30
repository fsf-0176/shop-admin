<template>
  <router-view v-if="page != 'Login' || page != 'Register'" />
  <wrap v-else>
    <router-view />
  </wrap>
</template>
<script>
import Wrap from './components/Wrap'
export default {
  components: { Wrap },
  name: 'App',
  data() {
    return {
      page: ''
    }
  },
  watch: {
    $route(val) {
      this.page = val.name
    }
  }
}
</script>
