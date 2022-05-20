<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary color="white">
      <div class="text-center mt-3">
        <a>
          <v-avatar color="grey lighten-3" size="100">
            <!-- <v-img src="@/assets/img/logo.jpg"></v-img> -->
          </v-avatar>
        </a>
      </div>
      <div class="text-center mt-3" @click="navigator({ name: 'home' })">
        <span class="primary--text">Hire maids</span>
      </div>
      <v-divider />
      <v-list dense v-if="!$store.state.isUserLoggedIn">
        <v-list-item
          v-for="([icon, text, link], i) in itemsOne"
          :key="i"
          link
          @click="navigator({ name: link })"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        dense
        v-if="
          $store.state.isUserLoggedIn && $store.state.user.role == 'customer'
        "
      >
        <v-list-item
          v-for="([icon, text, link], i) in itemsTwo"
          :key="i"
          link
          @click="navigator({ name: link })"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()">
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        dense
        v-if="$store.state.isUserLoggedIn && $store.state.user.role == 'admin'"
      >
        <v-list-item
          v-for="([icon, text, link], i) in itemsThree"
          :key="i"
          link
          @click="navigator({ name: link })"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()">
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="navColor px-15 primary--text"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <!-- <v-img src="@/assets/img/agaLogo.png" max-width="100px" /> -->
        <v-btn text @click="navigator({ name: 'home' })">
          <h2 class="text-capitalize white--text">Hire maids</h2>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4 secondary--text"
        v-if="isXs"
      />
      <div v-else>
        <div
          v-if="!$store.state.isUserLoggedIn"
          class="hidden-sm-only hidden-xs-only"
        >
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'home' });
                active = 'home';
              "
              :color="active === 'home' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Home</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'candidateProfile' });
                active = 'profile';
              "
              :color="active === 'profile' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Candidate profile</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'services' });
                active = 'services';
              "
              :color="active === 'services' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Services</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'about' });
                active = 'about';
              "
              :color="active === 'about' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">About us</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'contact' });
                active = 'contact';
              "
              :color="active === 'contact' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Contact us</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              rounded
              outlined
              text
              @click="
                navigator({ name: 'login_page' });
                active = 'log';
              "
              v-if="!$store.state.isUserLoggedIn"
              :color="active === 'log' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize">Signin/SignUp</span>
            </v-btn>
          </v-hover>
        </div>
        <div
          class="hidden-sm-and-down"
          v-if="
            $store.state.isUserLoggedIn && $store.state.user.role == 'admin'
          "
        >
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'home' });
                active = 'home';
              "
              :color="active === 'home' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Home</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'viewBooks' });
                active = 'view';
              "
              :color="active === 'view' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">View books</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'addBook' });
                active = 'add';
              "
              :color="active === 'add' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Add customer</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'candidateProfile' });
                active = 'view_customers';
              "
              :color="active === 'view_customers' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">View customers</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'adminRegistration' });
                active = 'add_admin';
              "
              :color="active === 'add_admin' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Add admin</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              rounded
              outlined
              text
              v-if="$store.state.isUserLoggedIn"
              @click="
                logout();
                active = 'logout';
              "
              class="mx-2"
              :color="active === 'logout' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Logout</span>
            </v-btn>
          </v-hover>
        </div>
        <div
          class="hidden-sm-and-down"
          v-if="
            $store.state.isUserLoggedIn && $store.state.user.role == 'customer'
          "
        >
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'home' });
                active = 'home';
              "
              :color="active === 'home' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Home</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'candidateProfile' });
                active = 'profile';
              "
              :color="active === 'profile' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Candidate profile</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'services' });
                active = 'services';
              "
              :color="active === 'services' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Services</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'about' });
                active = 'about';
              "
              :color="active === 'about' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">About us</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              text
              @click="
                navigator({ name: 'contact' });
                active = 'contact';
              "
              :color="active === 'contact' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Contact us</span>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              rounded
              outlined
              text
              v-if="$store.state.isUserLoggedIn"
              @click="
                logout();
                active = 'logout';
              "
              class="mx-2"
              :color="active === 'logout' ? 'secondary' : ''"
              :style="{ 'background-color': hover ? '#0011B1' : '#0086F9' }"
            >
              <span class="text-capitalize mr-1">Logout</span>
            </v-btn>
          </v-hover>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>
<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 60px !important;
  padding-top: 1px;
}
</style>
<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    active: "home",
    itemsOne: [
      ["mdi-home-outline", "Home", "home"],
      ["mdi-account", "Candidate profile", "candidateProfile"],
      ["mdi-toolbox-outline", "Services", "services"],
      ["mdi-information-outline", "About us", "about"],
      ["mdi-account-box", "Contact us", "contact"],
      ["mdi-login-variant ", "Signin/Signup", "login_page"],
    ],
    itemsTwo: [
      ["mdi-briefcase-outline ", "Home", "home"],
      ["mdi-account", "Candidate profile", "candidateProfile"],
      ["mdi-toolbox-outline", "Services", "services"],
      ["mdi-information-outline", "About us", "about"],
      ["mdi-account-box", "Contact us", "contact"],
    ],
    itemsThree: [
      ["mdi-home ", "Home", "home"],
      ["mdi-book-multiple", "View books", "viewBooks"],
      ["mdi-account-plus", "Add customer", "addBook"],
      ["mdi-account-multiple", "View customers", "candidateProfile"],
      ["mdi-account-plus ", "Add admin", "adminRegistration"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
    textColor: String,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    navigator(route) {
      this.$router.push(route);
      window.scrollTo(0, 0);
    },
    logout() {
      this.$store.dispatch("setUser", null);
      this.$store.dispatch("setToken", null);
      this.$router.push({ name: "home" });
      window.scrollTo(0, 0);
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style scoped>
#titleColorOne {
  color: white;
}
#titleColorTwo {
  color: #2d5976;
}
</style>
