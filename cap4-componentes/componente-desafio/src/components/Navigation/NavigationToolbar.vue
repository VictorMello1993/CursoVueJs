<template>
  <v-toolbar flat>        
    <nav-list/>
  </v-toolbar>
</template>

<script>
import List from './NavigationList.vue'
export default {
  components: {
    'nav-list': List
  }
}
</script>

<style>

</style>