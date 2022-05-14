<template>
  <v-main>
      <v-container class="mx-7 my-7">
        <v-row>
         <v-col cols="12" sm="3">
          </v-col>
          <v-col cols="12" sm="6">
            <v-sheet rounded="lg" min-height="268">
               <v-card class=" mb-2 pa-1 borderRight" color="#fff">
                <v-toolbar color="secondary" dark flat >
                  <v-toolbar-title class="title white--text ">Updating...</v-toolbar-title>
                </v-toolbar>   
              </v-card>
              <v-card class="pa-5">
                <v-card-title>
                  <h3>Write your update here!</h3>
                </v-card-title>
                <v-card-txt >
                <v-form enctype="multipart/form-data">
                <v-layout row wrap class="pt-4">
                     <v-snackbar v-model="snackbar" :timeout="timeout" >{{ text }}
                        <template v-slot:action="{ attrs }">
                        <v-btn text v-bind="attrs" @click="snackbar = false" >Close</v-btn>
                        </template>
                      </v-snackbar>
                    <v-flex xs12 md12>
                    <v-text-field :rules="nameValidation" label="Full Name"  v-model="fullName" ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md12>
                    <v-text-field :rules="phoneValidation" label="Phone Number"   v-model="phoneNumber"  ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md12>
                    <v-text-field label="Book Title"  v-model="bookTitle"   ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md12>
                    <v-menu ref="startDateMenu" v-model="startDateMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on }">
                        <v-text-field v-model="renting_date" label="Renting Date"   readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="renting_date">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="dateMenu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.startDateMenu.save(startDate)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                    </v-flex>
                    <v-flex xs12 md12>
                    <v-menu ref="endDateMenu" v-model="endDateMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y  min-width="290px" >
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="returning_date" label="Returning Date"   readonly v-on="on" ></v-text-field>
                        </template>
                        <v-date-picker v-model="returning_date">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="enddateMenu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.endDateMenu.save(endDate)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                    </v-flex>
                    <v-flex xs12 md12 >
                    <v-btn text dark
                        class="secondary"
                        block
                        @click="updateInformation()" :loading="loading">
                        <span class="text-capitalize white--text">Update</span>
                    </v-btn>
                    </v-flex>
                </v-layout>
                </v-form> 
                </v-card-txt>
              </v-card>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="3">
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>
<script>
import apiService from "../service/authonticationService";
export default {
  data() {
    return {
      fullName:"",
      phoneNumber:"",
      bookTitle:"",
      renting_date:"",
      returning_date:"",  
      snackbar: false,
      text: 'error try again.',
      timeout: 3000,
    };
  },
  async mounted() {
            this.admin = (await apiService.getCustomerInfoById(this.$route.params.id)).data;
            this.fullName=this.admin.fullName;
            this.phoneNumber=this.admin.phoneNumber;
            this.bookTitle=this.admin.bookTitle;
            this.renting_date=this.admin.renting_date;
            this.returning_date=this.admin.returning_date;
    },
  methods:{
    async updateInformation(){
     const updateAdminResponse = await apiService.updateCustomerInformation(this.$route.params.id,{
            fullName: this.fullName,
            phoneNumber: this.phoneNumber,
            bookTitle:this.bookTitle,
            renting_date:this.renting_date,
            returning_date:this.returning_date,
            });
            if(updateAdminResponse.data){
              location.reload();
               this.text="Updated succesfully";
               this.snackbar=true; 
        }
    }
  }
};
</script>

<style scoped>
.borderLeft{
border-radius: 50px 0px 50px 0px !important;
}
.borderRight{
  border-radius: 0px 50px 0px 50px !important;
}
.border{
  border: 2px solid white !important;
}
</style>
