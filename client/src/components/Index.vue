<template>
  <div class="my-10">
    <br />
    <v-snackbar v-model="snackbar" :multi-line="multiLine"
      >{{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
    <v-container
      fluid
      id="offer"
      class="mt-5"
      style="max-width: 920px; position: relative"
    >
      <v-img src="../assets/img/hero-image.png" max-height="200"></v-img>
      <!-- <div class="mb-15">
        <div
          class="
            text-h5 text-sm-h4 text-md-h4
            font-weight-black
            text-md-center
            mt-15
            mb-5
          "
        >
          Hire Professioal Maids all over the world
        </div>
        <div
          class="
            text-body-2 text-md-body-1
            font-weight-light
            text-md-center
            mx-auto
            w-1/2
          "
        >
          Hire Maids brings reliable and professional maids from all over the
          world to your door steps with out any hustle.
        </div>
        <div class="d-flex flex-sm-row flex-column justify-center mt-5">
          <v-btn depressed large color="primary mb-5 mb-md-0">
            Explore Maids
          </v-btn>
          <v-btn
            depressed
            large
            class="ml-md-5"
            @click="$router.push('/candidate_profile')"
          >
            Hire A Maid
          </v-btn>
        </div>
      </div> -->

      <v-row class="pt-5">
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <div style="position: sticky; top: 16px">
                <v-chip-group active-class="primary--text" mandatory column>
                  <v-chip
                    v-for="tag in categories"
                    :key="tag"
                    @click="category(tag)"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>

                <v-sheet class="pa-3" v-if="loading">
                  <v-skeleton-loader
                    v-bind="attrs"
                    type="list-item-three-line, card-heading, list-item-three-line, card-heading"
                  ></v-skeleton-loader>
                </v-sheet>

                <!-- <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in categories" :key="item"> -->
                <!-- <v-container
                      > -->
                <v-card
                  v-for="(pro, proindex) in books"
                  :key="proindex"
                  class="my-10 py-8 px-8"
                >
                  <v-row>
                    <v-col cols="12" sm="3" style="padding: 0 !important">
                      <v-card id="imageCard" style="background-color: #000">
                        <!-- <v-img
                            :src="pro.imageUrl"
                            :lazy-src="`../assets/img/back.jpg`"
                            max-height="180"
                          ></v-img> -->
                        <video
                          ref="videoRef"
                          :src="pro.videoUrl"
                          id="video-container"
                          height="180"
                          width="100%"
                          controls
                        ></video>
                      </v-card>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="8"
                      class="ml-md-8 mt-md-0 mt-5"
                      style="padding: 0 !important"
                    >
                      <v-row>
                        <v-col sm="8" cols="12" :style="align">
                          <h3 class="blue--text">
                            <i>{{ pro.fullName }}</i>
                          </h3>
                          <h4>
                            <i>{{ pro.nationality }}</i>
                          </h4>
                          <h4>
                            <i>
                              <span class="grey--text"
                                >worked for {{ pro.experience }}
                              </span></i
                            >
                          </h4>
                          <h4>
                            <i>Speaks {{ pro.language }}</i>
                          </h4>
                        </v-col>
                        <v-col class="d-flex flex-column" sm="4" cols="12">
                          <v-btn
                            depressed
                            color="primary"
                            class="mb-3"
                            @click="detail(pro._id)"
                          >
                            See details
                          </v-btn>
                          <v-btn depressed> Add to favorites </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
                <!-- </v-container> -->
                <!-- </v-tab-item>
                  </v-tabs-items> -->
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <div class="svg-border-waves text-white" v-if="!$vuetify.theme.dark">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <br /><br />
  </div>
</template>

<script>
import book from "../service/authonticationService";
export default {
  data() {
    return {
      books: [],
      tab: null,
      loading: true,
      filterIcon: false,
      windowWidth: window.innerWidth,
      multiLine: true,
      snackbar: false,
      text: "",
      loading: false,
      jobType: "",
      nationality: "",
      religion: "",
      age: "",
      searchError: false,
      nationalityMenu: ["Ethiopian", "Philippines"],
      categories: ["All", "Ethiopian", "Philippines", "Indonesian", "Ugandan"],
    };
  },

  async mounted() {
    this.searchError = false;
    const res = await book.getCustomers();
    var allBooks = res.data;
    console.log(allBooks);
    this.books = [...allBooks];

    this.loading = false;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    align() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "text-align: center";
        default:
          return "text-align: left";
      }
    },
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    async detail(id) {
      this.$router.push({ name: "customerDetail", params: { id: id } });
      window.scrollTo(0, 0);
    },
    async category(item) {
      this.books = [];
      this.loading = true;
      if (item === "All") {
        const res = await book.getCustomers();
        var allBooks = res.data;
        var c = 0;
        for (c = 0; c < allBooks.length; c++) {
          this.books.push(allBooks[c]);
        }
        this.loading = false;
      } else {
        const responseNationality = await book.customerNationality(item);
        var allCustomers = responseNationality.data;
        for (var counter = 0; counter < allCustomers.length; counter++) {
          this.books.push(allCustomers[counter]);
        }
        if (allCustomers.length > 0) this.loading = false;
      }
    },
    async searchNationality(nationality) {
      this.books = [];
      this.loading = true;
      const responseNationality = await book.customerNationality(nationality);
      var allCustomers = responseNationality.data;
      for (var counter = 0; counter < allCustomers.length; counter++) {
        this.books.push(allCustomers[counter]);
      }
      if (allCustomers.length > 0) this.loading = false;
    },
  },
};
</script>

<style lang="scss">
.v-tab {
  text-transform: none !important;
}
.v-tab:hover {
  background-color: #2196f3;
}
#imageCard {
  border-color: #010203;
}
#contact {
  background-color: rgb(3, 3, 3);
}
p.mission {
  font-size: 35px;
  color: #444444ba;
}

#backgroundImg .container,
#backgroundImg .row {
  height: 100%;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
h2.intro-text {
  font-size: 50px;
  font-weight: bold;
  color: #f69849;
}
p.description {
  font-size: 30px;
  color: #444444ba;
}
p.moto {
  font-size: 40px;
  color: white;
}
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease-in-out;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    transition: all 0.5s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }
  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;
      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
p.about {
  font-size: 18px;
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
