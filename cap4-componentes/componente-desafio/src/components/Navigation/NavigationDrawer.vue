<template>
    <v-navigation-drawer app>
      <nav-toolbar/>
      <v-divider></v-divider>
      <nav-menu-items/>        
    </v-navigation-drawer>
</template>

<script>
import Toolbar from './NavigationToolbar.vue';
import MenuItems from './MenuItems/MenuItems.vue';

export default {
  components: {
    'nav-toolbar': Toolbar ,
    'nav-menu-items': MenuItems,        
  }
}
</script>

<style>

</style>