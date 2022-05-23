<template>
  <v-footer dark padless>
    <v-container fluid id="features" class="navColor">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="space-around">
            <!-- <v-col cols="12" sm="4" class="text-center">
              <p><strong><b>Quick links</b></strong> </p>
               <v-btn text  @click="navigator({name:'terms'})" >
                <span class="text-capitalize" >Terms and polices</span >
              </v-btn>
            </v-col> -->
            <v-col cols="12" sm="4" class="text-center">
              <p>
                <strong><b> Follow us</b></strong>
              </p>
              <v-card flat tile class="navColor white--text text-center">
                <v-card-text>
                  <v-btn
                    v-for="(icon, i) in icons"
                    :key="i"
                    class="mx-4 white--text"
                    :href="icon.link"
                    target="_blank"
                    icon
                  >
                    <v-icon size="24px">{{ icon.text }}</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4" class="text-center">
              <p>
                <strong><b> Our address</b></strong>
              </p>
              <p class="mt-3"><strong>Arat kilo</strong></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-card flat tile class="navColor white--text text-center">
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Hire maids</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
    ],
  }),
  methods: {
    navigator(route) {
      this.$router.push(route);
      window.scrollTo(0, 0);
    },
  },
};
</script>
