<template>
  <wrap>
    <router-view />
  </wrap>
</template>
<script>
import Wrap from './components/Wrap'
export default {
  components: { Wrap },
  name: 'App'
}
</script>
