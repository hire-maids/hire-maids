<template>
    <v-container class="my-10">
        <br><br> 
       <v-row>
          <v-col cols="12" sm="4" class="pa-5 mx-auto">
            <v-card class="pa-2" align="center" flat>
              <br>
              <v-img :src='detail.imageUrl' height="300" contain></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" class="pa-5 mx-auto">
            <v-card class="pa-2" align="center" >
              <br>
              <video ref="videoRef" src="" id="video-container" width="100%" height="300" controls></video>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar v-model="snackbar" :multi-line="multiLine">{{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
          </template>  
        </v-snackbar>
        <br>
        <v-row no-gutters>
            <v-col cols="12" sm="4" class="pa-5 mx-auto">
              <h3 class="text-center orange--text">Basic info</h3>
              <v-card class="pa-5" align="center">
                <h3 class="text-center my-2  blue--text" >HM {{detail._id}}</h3>
                <h4 class="text-center  secondary--text" v-if="$store.state.isUserLoggedIn && $store.state.user.role=='admin'"><span>{{detail.phoneNumber}}</span></h4> 
                <h4 class="text-center my-2 secondary--text">Designation: <span class="grey--text">{{detail.dwc}}</span></h4>
                <h4 class="text-center my-2 secondary--text">Age: <span class="grey--text">{{detail.age}}</span></h4>
                <h4 class="text-center my-2 secondary--text">Nationality: <span class="grey--text">{{detail.nationality}}</span></h4>
                <h4 class="text-center my-2 secondary--text">Availability: <span class="grey--text">{{detail.availability}}</span></h4>
                <h4 class="text-center my-2  secondary--text">Religion: <span class="grey--text">{{detail.religion}}</span></h4>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4" class="pa-5 mx-auto">
              <h3 class="text-center orange--text">Education & Experience:</h3>
              <v-card class="pa-5" align="center">
                <h4 class="text-center my-2 secondary--text">Experience: <span class="grey--text">{{detail.experience}}</span></h4>
                <h4 class="text-center my-2 secondary--text">Job Type: <span class="grey--text">{{detail.jobType}}</span></h4>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4" class="pa-5 mx-auto">
              <h3 class="text-center orange--text">Skills & Knowledge:</h3>
              <v-card class="pa-5">
                <h4 class="my-2 secondary--text">Skills: </h4><h5><p class="grey--text" style="white-space: pre-wrap">{{detail.skill}}</p></h5>
                <h4 class="my-2 secondary--text">Language: <span class="grey--text">{{detail.language}}</span></h4>
                <br>
                <span class="red--text" v-if="bookingError">Your Information is required to book, so please fill it out correctly.</span>
                <v-text-field label="Full name" outlined dense color="primary" v-model="fullName" v-if="!$store.state.isUserLoggedIn"></v-text-field>
                <v-text-field label="Phone number" outlined dense color="primary" v-model="phoneNumber" v-if="!$store.state.isUserLoggedIn"></v-text-field>
                <div class="text-xs-center  mx-3" v-if="!$store.state.isUserLoggedIn || $store.state.user.role=='customer'">
                  <v-btn block rounded outlined @click="addBooks(detail.fullName,detail.phoneNumber)" :loading="loading" class="primary"><span class="text-capitalize white--text">Book Now</span></v-btn>
                </div>
                <div class="text-xs-center  mx-3" v-if="$store.state.isUserLoggedIn && $store.state.user.role=='admin'">
                  <v-btn block rounded outlined @click="deleteCustomerInfo(detail._id)" :loading="loading" class="primary"><span class="text-capitalize white--text">Delete</span></v-btn>
                 </div>
              </v-card>
            </v-col>
        </v-row>
        <br><br>
          <div class="svg-border-waves text-white">
          <v-img src="~@/assets/img/borderWavesBlue.svg"/>
          </div>
       <br><br>
    </v-container>
</template>
<script>
import getdetail from "../service/authonticationService";
export default {
  data() {
    return {
      detail:{},
      snackbar: false,
      loading:false,
      fullName:"",
      phoneNumber:"",
      text:"",
      bookingError:false,
      
    };
    
  },
  async created() {
    try {
      const response = await getdetail.getDetailById(this.$route.params.id);
      this.detail=response.data;
      this.$refs.videoRef.src = this.detail.videoUrl;
      this.$refs.videoRef.play();
      } catch (err) {
          alert(err);
      }
     },
  methods: {
    async addBooks(fn,pn){
      if(this.$store.state.isUserLoggedIn){
        const response = await getdetail.addBooks({employeeName:fn,employeeNumber:pn,employeerName:this.$store.state.user.fullName,employeerNumber:this.$store.state.user.phoneNumber});
        this.text="booking finished successfully";
        this.snackbar=true;
        loading=false;
      }else{
        if(this.fullName=="" || this.phoneNumber==""){
           this.bookingError=true;
        }
        else{
          this.bookingError=false;
          const response = await getdetail.addBooks({employeeName:fn,employeeNumber:pn,employeerName:this.fullName,employeerNumber:this.phoneNumber});
          this.text="booking finished successfully";
          this.snackbar=true;
          loading=false;
        }
      }
    },
    async deleteCustomerInfo(id){ 
            this.loading=true; 
            var r = confirm("Are you sure? the customer will be deleted permanetly!");
            if (r == true) {
              const responseDelete = await getdetail.deleteCustomer(id);
              if(!responseDelete.data.error){
                this.$router.push({ name: "candidateProfile" });
                window.scrollTo(0, 0);
              }
            }   
    },
  }
};
</script>
<style scoped>
    .video-wrapper {
        width: 100%;
        margin: auto;
        max-width: 700px;
    }
</style>