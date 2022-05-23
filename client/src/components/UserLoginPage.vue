<template>
  <div class="text-center mb-7">
    <div style="max-width: 920px; position: relative; margin: auto">
      <div class="mt-10"><br /><br /></div>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card class="elevation-6 mt-10">
            <v-window>
              <v-window-item>
                <v-form
                  enctype="multipart/form-data"
                  class="white pt-4"
                  autocomplete="off"
                  v-model="checkValidity"
                >
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h3 class="text-center primary--text">
                          Signin to your account
                        </h3>
                        <br />
                        <div class="text-center mt-4">
                          <span class="red--text" v-if="loginError">{{
                            loginErrorMessage
                          }}</span>
                        </div>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <v-text-field
                              label="Phone number"
                              outlined
                              dense
                              color="blue"
                              v-model="phoneNumber"
                            ></v-text-field>
                            <v-text-field
                              label="Password"
                              outlined
                              dense
                              color="blue"
                              :type="type"
                              v-model="password"
                            ></v-text-field>
                            <v-row class="hidden-md-and-up">
                              <v-col cols="12" sm="6">
                                <v-btn text @click="gotoSignup()"
                                  ><span class="text-capitalize primary--text"
                                    >Create Account</span
                                  >
                                </v-btn>
                              </v-col>
                              <!-- <v-col cols="12" sm="6">
                               <v-btn text @click="gotoSignup()"><span class="text-capitalize primary--text">Forgot password</span> </v-btn>
                              </v-col> -->
                            </v-row>
                            <br />
                            <v-btn
                              color="primary"
                              dark
                              block
                              tile
                              @click="userLogin"
                              :loading="loading"
                              >Log in</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      class="primary rounded-bl-xl hidden-sm-and-down"
                    >
                      <div style="text-align: center; padding: 180px 0">
                        <v-card-text class="white--text">
                          <h3 class="text-center">
                            Don't have an account yet?
                          </h3>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="gotoSignup()"
                            >SIGN UP</v-btn
                          >
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-form>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
      <br /><br />
    </div>
    <div class="svg-border-waves text-white" v-if="!$vuetify.theme.dark">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <br /><br />
  </div>
</template>
<script>
import authonticationService from "../service/authonticationService";
export default {
  data() {
    return {
      password: "",
      loginError: false,
      loginErrorMessage: "",
      phoneNumber: "",
      checkValidity: false,
      type: "password",
      toolTip: "Show password",
      loading: false,
      inputValidation: [
        (v) => v.length >= 5 || "Minimum length is 5 characters",
      ],
    };
  },
  props: {
    source: String,
  },
  methods: {
    async userLogin() {
      if (this.phoneNumber == "" || this.password == "") {
        this.loginError = true;
        this.loginErrorMessage = "Please fill all the requirements";
      } else {
        this.loading = true;
        const response = await authonticationService.userLogin({
          phoneNumber: this.phoneNumber,
          password: this.password,
        });
        if (response.data.error) {
          this.loading = false;
          this.loginError = true;
          this.loginErrorMessage = response.data.message;
        } else {
          this.$store.dispatch("setUser", response.data.user);
          this.$store.dispatch("setToken", response.data.token);
          this.$router.push({ name: "home" });
          window.scrollTo(0, 0);
          this.loading = false;
        }
      }
    },
    async gotoSignup() {
      this.$router.push({ name: "userRegistrationPage" });
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
#loginPageLayout {
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  max-width: 600px;
  margin: auto;
}
#adminLoginForm {
  font-family: sans-serif;
}
#helpBtn {
  float: right;
  clear: right;
}
#showHidePassword:hover {
  color: rgb(59, 59, 241);
}
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>