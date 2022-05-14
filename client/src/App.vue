<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0 ">
       <router-view></router-view>  
    </v-main>
    <v-scale-transition>
      <a style="text-decoration:none" href="https://wa.me/+251986551414" target="_blank">
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="green"
      >
        <v-icon large>mdi-whatsapp </v-icon>
      </v-btn>
      </a>
    </v-scale-transition>
    <foote />
  </v-app>
</template>
<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/Services";

export default {
  name: "App",
  components: {
    navigation,
    foote,
    home,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "white";
      this.flat = true;
    }
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "white";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 10;
    },
  },
};
</script>
