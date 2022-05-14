<template>
  <div class="text-center mb-7">
       <div class="mt-10">
          <br><br>  
        </div>  
        <v-row align="center" justify="center" >
          <v-col cols="12" md="10" sm="6">
            <v-card class="elevation-6 mt-3">
             <v-window>
                <v-window-item>
                <v-form enctype="multipart/form-data" class="white  pt-1 " autocomplete="off" v-model="checkValidity">
                  <v-row>
                    <v-col cols="12" md="6" class="primary rounded-br-xl hidden-sm-and-down" >
                     <div style="  text-align: center; padding: 180px 50px;">
                      <v-card-text class="white--text">
                        <h3 class="text-center ">Alredy signed up?</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="gotoLogin()">Log in</v-btn>
                      </div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" >
                      <v-card-text class="mt-4">
                        <h3 class="text-center primary--text">Sign up for an account</h3>
                      <br>
                        <div class="text-center mt-2">
                         <span class="red--text" v-if="loginError">Try to enter necessary information</span>
                        </div>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                                  <v-text-field :rules="inputValidation" label="Full Name" outlined dense color="primary" v-model="fullName"></v-text-field>
                                  <v-text-field :rules="emailValidation" label="Email" outlined dense color="primary" v-model="email"></v-text-field>
                                  <v-text-field :rules="passValidation" label="Password"  outlined dense color="primary" v-model="password" type="password" ></v-text-field>
                                  <v-text-field :rules="phoneValidation" label="phone number" outlined dense color="primary"  v-model="phoneNumber"></v-text-field>
                                 <v-row class="hidden-md-and-up">
                                  <v-col cols="12" sm="6">
                                    Have an account?<v-btn text @click="gotoLogin()"><span class="text-capitalize primary--text">Signin</span> </v-btn> 
                                  </v-col>
                                  <!-- <v-col cols="12" sm="6">
                                  <v-btn text @click="gotoSignup()"><span class="text-capitalize primary--text">Forgot password</span> </v-btn>
                                  </v-col> -->
                                </v-row>
                                 <v-btn color="primary" dark block tile @click="userRegister" :loading="loading">Sign up</v-btn>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-form>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
      <br><br>
      <div class="svg-border-waves text-white">
       <v-img src="~@/assets/img/borderWavesBlue.svg"/>
      </div>
      <br><br>
    </div> 
</template>
<script>
import authonticationService from "../service/authonticationService";
export default {
  data() {
    return {
      file: null,
      loading: false,
      fullName: "",
      email:"",
      phoneNumber:"",
      password: "",
      step:1,
      checkValidity: false,
      loginError: false,
      inputValidation: [v => v.length >= 5 || "Minimum length is 5 characters"],
      phoneValidation: [
        input =>
          /^[+]{1}[0-9]{12,13}$/.test(input) ||
          "Invalid phone number. it contains country code and followed by phone number"
      ],
      passValidation: [
        input =>
          /^[a-zA-Z0-9 .]{2,32}$/.test(input) ||
          "Invalid password. it contains a-z" + ",A-Z, 0-9, , and . "
      ],
      emailValidation: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    };
  },
  methods: {
    async userRegister() {
      window.scrollTo(0, 0);
      this.loading=!this.loading
      if (this.checkValidity ) {
        try {
          const response = await authonticationService.userRegister({
            fullName: this.fullName,
            email:this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            role:'customer'
          });
          if(response.data){
          this.loading=!this.loading
          this.loginError=false;
          this.$router.push({ name: "login_page" });
          }
        } catch (err) {
          alert(err)
          this.loginError=true;
        }
      } 
    this.loginError = true;
    },
  async gotoLogin(){
     this.$router.push({ name: "login_page"});
     window.scrollTo(0, 0);
    }
  }
};
</script>
<style scoped>
#userLoginPageForm {
  background-color: rgb(255, 255, 255);
  padding: 10%;
  padding-top: 10px;
  width: 100%;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  padding-bottom: 10px;
}
 #h2{
  float: left;
  font-size: 60px;
  border-bottom: 6px solid #4caf50;
  margin-bottom: 20px;
  padding: 13px 0;
  margin-right: 5px;
  color: aqua
}
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>