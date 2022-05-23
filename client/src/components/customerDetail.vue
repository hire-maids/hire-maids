<template>
  <div>
    <v-container class="my-10" style="max-width: 920px; position: relative">
      <br /><br />
      <v-row>
        <v-col cols="12" sm="4" class="mx-auto">
          <v-card align="center" flat>
            <v-img :src="detail.imageUrl" height="160">
              <v-card-title class="white--text mt-8">
                <v-avatar size="56">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <p class="ml-3">{{ detail.fullName }}</p>
              </v-card-title>
            </v-img>
            <div class="text-center mt-3">
              <h2>
                {{ detail.fullName ? detail.fullName.toUpperCase() : "" }}
              </h2>
              <v-card-subtitle>{{ detail.nationality }}</v-card-subtitle>
            </div>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" sm="6" class="pa-5 mx-auto">
          <v-card>
            <v-img :src="detail.imageUrl" cover>
              <v-card-title class="white--text mt-8">
                <v-avatar size="56">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <p class="ml-3">John Doe</p>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col> -->
        <v-col cols="12" sm="8" class="mx-auto">
          <!-- <v-card class="pa-2" align="center"> -->

          <video
            ref="videoRef"
            src=""
            id="video-container"
            height="250"
            width="100%"
            controls
          ></video>
          <!-- </v-card> -->
        </v-col>
      </v-row>

      <v-snackbar v-model="snackbar"
        >{{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>

      <br />

      <div
        class="d-flex justify-space-between mt-10 dataTable"
        style="flex-wrap: wrap"
      >
        <h3 style="flex: 1" class="mb-5">Basic Info</h3>
        <v-simple-table style="flex: 2">
          <template v-slot:default>
            <tbody>
              <tr>
                <td><h4>Name</h4></td>
                <td class="grey--text">{{ detail.fullName }}</td>
              </tr>
              <tr
                v-if="
                  $store.state.isUserLoggedIn &&
                  $store.state.user.role == 'admin'
                "
              >
                <td><h4>Phone number</h4></td>
                <td class="grey--text">{{ detail.phoneNumber }}</td>
              </tr>
              <tr>
                <td><h4>Designation</h4></td>
                <td class="grey--text">{{ detail.dwc }}</td>
              </tr>
              <tr>
                <td><h4>Age</h4></td>
                <td class="grey--text">{{ detail.age }}</td>
              </tr>
              <tr>
                <td><h4>Nationality</h4></td>
                <td class="grey--text">{{ detail.nationality }}</td>
              </tr>
              <tr>
                <td><h4>Availability</h4></td>
                <td class="grey--text">{{ detail.availability }}</td>
              </tr>
              <tr>
                <td><h4>Religion</h4></td>
                <td class="grey--text">{{ detail.religion }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div
        class="d-flex justify-space-between mt-10 dataTable"
        style="flex-wrap: wrap"
      >
        <h3 style="flex: 1" class="mb-5">Education and Experience</h3>
        <v-simple-table style="flex: 2">
          <template v-slot:default>
            <tbody>
              <tr>
                <td><h4>Experience</h4></td>
                <td class="grey--text">{{ detail.experience }}</td>
              </tr>
              <tr>
                <td><h4>Job Type</h4></td>
                <td class="grey--text">{{ detail.jobType }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div
        class="d-flex justify-space-between mt-10 dataTable"
        style="flex-wrap: wrap"
      >
        <h3 style="flex: 1" class="mb-5">Skills and Knowledge</h3>

        <v-simple-table style="flex: 2">
          <template v-slot:default>
            <tbody>
              <tr>
                <td><h4>Skills</h4></td>
                <td class="grey--text">{{ detail.skill }}</td>
              </tr>
              <tr>
                <td><h4>Language</h4></td>
                <td class="grey--text">{{ detail.language }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div
        class="d-flex justify-space-between mt-10 dataTable"
        style="flex-wrap: wrap"
      >
        <h3 class="mb-5" style="flex: 1">Booking</h3>

        <div style="flex: 2; display: flex; flex-direction: column">
          <v-text-field
            label="Full name"
            outlined
            dense
            color="primary"
            v-model="fullName"
            v-if="!$store.state.isUserLoggedIn"
          ></v-text-field>
          <v-text-field
            label="Phone number"
            outlined
            dense
            color="primary"
            v-model="phoneNumber"
            v-if="!$store.state.isUserLoggedIn"
          ></v-text-field>
          <div
            class="text-xs-center mx-3"
            v-if="
              !$store.state.isUserLoggedIn ||
              $store.state.user.role == 'customer'
            "
          >
            <v-btn
              block
              rounded
              outlined
              @click="addBooks(detail.fullName, detail.phoneNumber)"
              :loading="loading"
              class="primary"
              ><span class="text-capitalize white--text">Book Now</span></v-btn
            >
          </div>
          <div
            class="text-xs-center mx-3"
            v-if="
              $store.state.isUserLoggedIn && $store.state.user.role == 'admin'
            "
          >
            <v-btn
              block
              rounded
              outlined
              @click="deleteCustomerInfo(detail._id)"
              :loading="loading"
              class="primary"
              ><span class="text-capitalize white--text">Delete</span></v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
    <br /><br />
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <br /><br />
  </div>
</template>

<script>
import getdetail from "../service/authonticationService";
export default {
  data() {
    return {
      tab: 0,
      detail: {},
      snackbar: false,
      loading: false,
      fullName: "",
      phoneNumber: "",
      text: "",
      bookingError: false,
    };
  },
  async created() {
    try {
      const response = await getdetail.getDetailById(this.$route.params.id);
      this.detail = response.data;
      this.$refs.videoRef.src = this.detail.videoUrl;
    } catch (err) {
      console.log(err.response);
    }
  },
  methods: {
    async addBooks(fn, pn) {
      if (this.$store.state.isUserLoggedIn) {
        const response = await getdetail.addBooks({
          employeeName: fn,
          employeeNumber: pn,
          employeerName: this.$store.state.user.fullName,
          employeerNumber: this.$store.state.user.phoneNumber,
        });
        this.text = "booking finished successfully";
        this.snackbar = true;
        loading = false;
      } else {
        if (this.fullName == "" || this.phoneNumber == "") {
          this.bookingError = true;
        } else {
          this.bookingError = false;
          const response = await getdetail.addBooks({
            employeeName: fn,
            employeeNumber: pn,
            employeerName: this.fullName,
            employeerNumber: this.phoneNumber,
          });
          this.text = "booking finished successfully";
          this.snackbar = true;
          loading = false;
        }
      }
    },
    async deleteCustomerInfo(id) {
      this.loading = true;
      var r = confirm("Are you sure? the customer will be deleted permanetly!");
      if (r == true) {
        const responseDelete = await getdetail.deleteCustomer(id);
        if (!responseDelete.data.error) {
          this.$router.push({ name: "candidateProfile" });
          window.scrollTo(0, 0);
        }
      }
    },
  },
};
</script>
<style scoped lang="sass">
.selectextShadowHost
  display: none !important

.dataTable
  @media screen and (max-width: 500px)
    flex-direction: column
</style>