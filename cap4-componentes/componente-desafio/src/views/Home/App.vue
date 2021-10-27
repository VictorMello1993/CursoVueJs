<template>
  <v-app>    
    <app-nav />
    <app-content/>
    <app-caroulsel/>    
    <app-footer/>    
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/NavigationDrawer.vue";
import Content from '@/components/Content/Content.vue';
import Carousel from '@/components/Carousel/AppCarousel.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    'app-nav': Navigation,
    'app-content': Content,
    'app-caroulsel': Carousel,
    'app-footer': Footer
  },  
};
</script>
