<template>
   <div class="text-center my-12">
      <br><br>
        <v-snackbar v-model="snackbar" :multi-line="multiLine">{{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
          </template>  
        </v-snackbar>
       <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12 ">
               <v-window>
                  <v-window-item>
                     <v-form enctype="multipart/form-data" class="white  pt-4 " autocomplete="off" v-model="checkValidity">
                    <v-row align="center" justify="center">
                      <v-col cols="12" md="6" class="hidden-sm-and-down">
                        <v-card flat> 
                         <v-img
                          src="../assets/img/loginIcon.png"
                          height="350px" width="380px"
                       ></v-img> 
                        </v-card>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-card-text>
                            <h1 class="text-center display-1  primary--text">Add new admin</h1>
                              <v-layout row wrap class="px-3">
                                <v-flex xs10 md11>
                                  <v-text-field :rules="inputValidation" label="Full Name" v-model="fullName"></v-text-field>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-text-field :rules="emailValidation" label="Email" v-model="email"></v-text-field>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-text-field  label="Password"   v-model="password" type="password" ></v-text-field>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-text-field :rules="phoneValidation" label="phone number" v-model="phoneNumber"></v-text-field>
                                </v-flex>
                              </v-layout>
                              <br>
                               <div class="text-center mt-1">
                                  <v-btn rounded outlined="" block @click="adminRegistration" class="primary white--text pl-15 pr-15">signup</v-btn>
                                </div>
                          </v-card-text>
                      </v-col>
                    </v-row>
                    </v-form>
                  </v-window-item>
               </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <br><br>
    </div> 
</template>
<script>
import authonticationService from "../service/authonticationService";
export default {
  data() {
    return {
      file: null,
      fullName: "",
      email:"",
      phoneNumber:"",
      password: "",
      confirmPassword: "",
      previewImage: null,
      step:1,
      text:"",
      checkValidity: false,
      loading: false,
      inputValidation: [v => v.length >= 5 || "Minimum length is 5 characters"],
      phoneValidation: [
        input =>
          /^[+]{1}[0-9]{12,13}$/.test(input) ||
          "Invalid phone number. it contains country code and followed by phone number"
      ],
      emailValidation: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
      passValidation: [
        input =>
          /^[a-zA-Z0-9 .]{2,32}$/.test(input) ||
          "Invalid address. it contains a-z" + ",A-Z, 0-9, , and . "
      ],

    };
  },
  methods: {
    async adminRegistration() {
      if (this.checkValidity){
        this.loading = true;
        try {
          const response = await authonticationService.adminRegistration({
            fullName: this.fullName,
            email:this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            role:'admin'
          });
          if(response.data){
          this.loading = false;
          this.text="registered successfully";
          this.snackbar=true;
          location.reload();
          window.scrollTo(0, 0);
          }else{
            this.text="error in registration";
            this.snackbar=true;
          }
        } catch (err) {
          alert(err);
          this.loading = false;
        }
      } else alert("Please fill all the requirements");
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
</style>