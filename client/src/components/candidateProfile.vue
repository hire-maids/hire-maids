<template>
  <div class="my-10">
    <br /><br />
    <v-snackbar v-model="snackbar" :multi-line="multiLine"
      >{{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
    <v-container fluid id="offer" style="max-width: 920px; position: relative">
      <div>
        <v-card flat outlined class="py-3">
          <v-toolbar flat>
            <strong>Filter option</strong>
            <v-spacer></v-spacer>
            <v-icon color="black" class="mr-2" @click="filterIcon = !filterIcon"
              >mdi-chevron-down</v-icon
            >
          </v-toolbar>
          <v-card-txt v-if="windowWidth > 960 || filterIcon">
            <v-row align="center">
              <v-col cols="6" style="padding: 0 12px !important">
                <v-select
                  :items="jobTypeMenu"
                  label="select job type"
                  dense
                  outlined
                  v-model="jobType"
                ></v-select>
              </v-col>
              <v-col cols="6" style="padding: 0 12px !important">
                <v-select
                  :items="nationalityMenu"
                  label="select nationality"
                  dense
                  outlined
                  v-model="nationality"
                ></v-select>
              </v-col>
              <v-col cols="6" style="padding: 0 12px !important">
                <v-select
                  :items="religionMenu"
                  label="select religion"
                  dense
                  outlined
                  v-model="religion"
                ></v-select>
              </v-col>
              <v-col cols="6" style="padding: 0 12px !important">
                <v-select
                  :items="ageMenu"
                  label="select age"
                  dense
                  outlined
                  v-model="age"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-txt>
          <div
            class="text-xs-center primary"
            v-if="windowWidth > 960 || filterIcon"
          >
            <v-btn text @click="searchByCatagory" block
              ><span class="text-capitalize white--text">Search</span></v-btn
            >
          </div>
        </v-card>
      </div>

      <v-card tile class="mx-1 my-3" flat>
        <v-row class="pt-5">
          <v-col cols="12">
            <v-sheet class="pa-3" v-if="loading">
              <v-skeleton-loader
                v-bind="attrs"
                type="list-item-three-line, card-heading, list-item-three-line, card-heading"
              ></v-skeleton-loader>
            </v-sheet>

            <v-sheet class="pa-3" v-if="loading">
              <v-skeleton-loader
                v-bind="attrs"
                type="divider, list-item-three-line, card-heading, list-item-three-line, card-heading"
              ></v-skeleton-loader>
            </v-sheet>

            <v-row>
              <v-col
                cols="12"
                sm="4"
                v-for="(pro, proindex) in books"
                :key="proindex"
              >
                <v-card class="my-10 py-8 px-8">
                  <v-row>
                    <v-row>
                      <v-img
                        :src="pro.imageUrl"
                        :lazy-src="`../assets/img/back.jpg`"
                        height="120"
                        max-width="120"
                        style="margin: auto; border-radius: 50%"
                      ></v-img>
                    </v-row>
                    <v-col cols="12">
                      <div class="d-flex flex-column my-5 text-center">
                        <h3 class="blue--text">
                          <i>{{ pro.fullName }}</i>
                        </h3>
                        <h3 class="grey--text">
                          <i>{{ pro.age }}</i>
                        </h3>
                        <!-- <h4>
                          <i>{{ pro.nationality }}</i>
                        </h4> -->
                        <h4>
                          <i>
                            <span>worked for {{ pro.experience }} </span></i
                          >
                        </h4>
                      </div>
                    </v-col>
                    <v-row>
                      <v-col>
                        <v-btn depressed color="primary" style="width: 100%;">
                          Shop
                        </v-btn>
                      </v-col>
                      <v-col cols="12">
                        <v-btn depressed @click="detail(pro._id)" style="width: 100%;">
                          See details
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <br /><br />
    <div class="svg-border-waves text-white">
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
      jobTypeMenu: ["Full time", "Part time"],
      nationalityMenu: ["Ethiopian", "Philippines"],
      religionMenu: ["Muslim", "Christian", "Others"],
      ageMenu: ["18-25", "26-30", "31-40", "> 40"],
    };
  },
  async mounted() {
    this.searchError = false;
    const res = await book.getCustomers();
    var allBooks = res.data;

    this.books = [...allBooks];

    this.loading = false;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    resetOption() {
      this.jobType = "";
      this.nationality = "";
      this.religion = "";
      this.age = "";
    },
    async detail(id) {
      this.$router.push({ name: "customerDetail", params: { id: id } });
      window.scrollTo(0, 0);
    },
    async searchByCatagory() {
      if (
        this.jobType === "" &&
        this.nationality === "" &&
        this.religion === "" &&
        this.age === ""
      ) {
        this.searchError = true;
      } else {
        this.loading = true;
        this.books = [];
        this.searchError = false;
        var counter = 0;
        var allCustomers = "";
        if (this.jobType != "") {
          const responseJobType = await book.customerJobType(this.jobType);
          allCustomers = responseJobType.data;
          for (counter = 0; counter < allCustomers.length; counter++) {
            this.books.push(allCustomers[counter]);
          }
          this.loading = false;
        } else if (this.nationality != "") {
          const responseNationality = await book.customerNationality(
            this.nationality
          );
          allCustomers = responseNationality.data;
          for (counter = 0; counter < allCustomers.length; counter++) {
            this.books.push(allCustomers[counter]);
          }
          this.loading = false;
        } else if (this.religion != "") {
          const responseReligion = await book.customerReligion(this.religion);
          allCustomers = responseReligion.data;
          for (counter = 0; counter < allCustomers.length; counter++) {
            this.books.push(allCustomers[counter]);
          }
          this.loading = false;
        } else if (this.age != "") {
          this.datePageNumber++;
          const responseAge = await book.customerAge(this.age);
          allCustomers = responseAge.data;
          for (counter = 0; counter < allCustomers.length; counter++) {
            this.books.push(allCustomers[counter]);
          }
          this.loading = false;
        }
      }
    },
  },
};
</script>
<style lang="scss">
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
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
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
