<template>
    <div class="text-center my-10">
       <div class="mt-10">
          <br><br><br><br>
        </div>  
        <v-row align="center" justify="center" class="mx-1">
          <v-col cols="12"  md="10">
            <v-card class="elevation-12 ">
               <v-window>
                  <v-window-item>
                    <v-row align="center" justify="center">
                      <v-col cols="12" md="6">
                       <v-card flat class="px-3">
                          <v-card-text >
                            <h1 class="text-center display-1  primary--text">Add New Customer</h1>
                            <v-form enctype="multipart/form-data" class="white  pt-4 ">
                              <v-layout row wrap>
                                <v-flex xs10 md11>
                                  <v-text-field placeholder="Full Name"  v-model="fullName"></v-text-field>
                                </v-flex>
                                 <v-flex xs10 md11>
                                  <v-text-field placeholder="Phone Number"  v-model="phoneNumber"></v-text-field>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-text-field placeholder="Language"  v-model="language"></v-text-field>
                                </v-flex>
                                <v-flex xs10 md11>
                                 <v-text-field placeholder="Age"  v-model="age"></v-text-field>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-select :items="religionMenu" placeholder="Religion"  v-model="religion"></v-select>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-select :items="dwcMenu" placeholder="DWC"  v-model="dwc"></v-select>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-select :items="nationalityMenu" placeholder="Nationality"  v-model="nationality"></v-select>
                                </v-flex>
                              </v-layout>
                            </v-form>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="12" md="6" >
                      <v-card flat class="px-3">
                        <v-card-text >
                            <v-form enctype="multipart/form-data" class="white  pt-4 ">
                              <v-layout row wrap>
                              <div class="text-center mt-4">
                               <span class="red--text" v-if="loginError">{{loginErrorMessage}}</span>
                              </div>
                                <v-flex xs10 md11>
                                  <v-select :items="jobTypeMenu" placeholder="Job Type"  v-model="jobType"></v-select>
                                </v-flex>
                                <v-flex xs10 md11>
                                 <v-select :items="experienceMenu" placeholder="Experience"  v-model="experience"></v-select>
                                </v-flex>
                                <v-flex xs10 md11>
                                  <v-text-field placeholder="Availability"  v-model="availability"></v-text-field>
                                </v-flex>
                                 <v-flex xs10 md11 >
                                  <v-textarea outlined label="Skills"  v-model="skill" ></v-textarea>
                                </v-flex>
                                <v-flex>
                                 <strong>Upload the photo:</strong> <input type="file" accept="image/*" ref="image" @change="selectFile" />
                                </v-flex>
                                <v-flex>
                                 <strong>Upload the video:</strong> <input type="file" accept="video/*" ref="v_image" @change="selectVideo" />
                                </v-flex>
                              </v-layout>
                              <br><br>
                              <div class="text-center mt-1">
                                <v-btn rounded outlined="" block @click="addNewCustomerInfo" :loading="loading" class="primary white--text pl-15 pr-15">Add</v-btn>
                              </div><br>
                            </v-form>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
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
import add from "../service/authonticationService";
export default {
  data() {
    return {
      file: null,
      video:null,
      fullName:"",
      phoneNumber:"",
      experience:"",
      jobType:"",
      nationality:"",
      religion:"",
      age:"",
      skill:"",
      dwc:"",
      availability:"",
      language:"",
      jobTypeMenu:['Full time','Part time'],
      nationalityMenu:['Ethiopian','Philippines'],
      religionMenu:['Muslim','Christian','Others'],
      experienceMenu:['Begineer','1 year','2 years','3 years','4 years','More than 4 years'],
      ageMenu:['18-25','26-30','31-40','> 40'],
      dwcMenu:['Maid','House keeper','Nany','Cook'],
      description:"",
      loading: false,
      previewImage:null,
      previewVideo:null,
      loginError:false,
      imageUrl:"",
      imageId:"",
      videoUrl:"",
      videoId:"",
    };
  },
  methods: { 
    selectFile() {
      this.file = this.$refs.image.files[0];
      const image = this.file;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
      };
    },
     selectVideo() {
      this.video = this.$refs.v_image.files[0];
      const v_image = this.video;
      const reader = new FileReader();
      reader.readAsDataURL(v_image);
      reader.onload = e => {
        this.previewImage = e.target.result;
      };
    },
    async addNewCustomerInfo() {
      this.loading=!this.loading
      if (this.previewImage==null || this.previewVideo){
        this.loginError = true;
        this.loginErrorMessage="Please fill all the requirements";
        this.loading=!this.loading
        window.scrollTo(0, 0);

      }
      else {
          const formdata = new FormData();
          formdata.append("img", this.file);
          const imageResponse = await add.upload(formdata);
          this.imageUrl=imageResponse.data.imageUrl;
          this.imageId=imageResponse.data.imageId;
          const videoFormdata = new FormData();
          videoFormdata.append("videoFile", this.video);
          const videoResponse = await add.uploadVideo(videoFormdata);
          this.videoUrl=videoResponse.data.videoUrl;
          this.videoId=videoResponse.data.videoId;
          const response = await add.addNewCustomer({
            fullName:this.fullName,
            phoneNumber:this.phoneNumber,
            experience:this.experience,
            jobType: this.jobType,            
            nationality:this.nationality,
            religion: this.religion,            
            age:this.age,
            dwc:this.dwc,
            availability:this.availability,
            skill:this.skill,
            language:this.language,
            imageUrl:this.imageUrl,
            imageId:this.imageId,
            videoUrl:this.videoUrl,
            videoId:this.videoId
          });
          response.data;
          this.loading=!this.loading
          location.reload();
          window.scrollTo(0, 0);
      }
    },

 }
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
</style>