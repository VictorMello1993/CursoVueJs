<template>
  <v-list>
    <nav-list-title/>      
  </v-list>
</template>

<script>
import MenuItemTitle from './MenuItems/MenuItemTitle.vue';
export default {
  components: {
    'nav-list-title': MenuItemTitle
  }
};
</script>

<style>
</style>