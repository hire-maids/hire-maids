<template>
  <div class="my-10">
    <br><br>
    <v-snackbar v-model="snackbar" :multi-line="multiLine">{{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>  
    </v-snackbar>
   <v-container fluid id="offer">
    <v-card tile class="mx-1 my-3" flat>  
      <v-row class="pt-5">
        <v-col cols="12" sm="3" class="my-3">
          <div style="position: sticky; top: 76px">
             <v-card flat outlined class="px-2 py-3">
            <v-toolbar flat>
              <strong>Filter option</strong>
              <v-spacer></v-spacer>
              <v-icon color="black" class="mr-2" @click="filterIcon=!filterIcon">mdi-chevron-down</v-icon>
            </v-toolbar>
            <div class="text-center mt-4">
                   <span class="red--text" v-if="searchError">How do you want to search?</span>
             </div>
            <v-card-txt v-if="windowWidth>960 || filterIcon">
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="6" md="12" @click='resetOption()'><strong>Job type:</strong>
                  <v-spacer></v-spacer> <v-select :items="jobTypeMenu" label="select job type"  dense outlined class="pl-3" v-model="jobType"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6" md="12" @click='resetOption()'><strong>Nationality:</strong>
                  <v-spacer></v-spacer> <v-select :items="nationalityMenu" label="select nationality"  dense outlined class="pl-3" v-model="nationality"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6" md="12" @click='resetOption()'><strong>Religion:</strong>
                  <v-spacer></v-spacer> <v-select :items="religionMenu" label="select religion" dense outlined class="pl-4" v-model="religion"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6" md="12" @click='resetOption()'><strong>Age:</strong>
                  <v-spacer></v-spacer> <v-select :items="ageMenu" label="select age" dense outlined class="pl-4" v-model="age"></v-select>
                </v-col>
              </v-row>
            </v-card-txt>
            <div class="text-xs-center primary" v-if="windowWidth>960 || filterIcon">
              <v-btn text @click="searchByCatagory" block><span class="text-capitalize white--text">Search</span></v-btn>
            </div>
          </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="9">
          <v-sheet  class="pa-3" v-if="loading">
                <v-skeleton-loader v-bind="attrs"
                type="list-item-three-line, card-heading, list-item-three-line, card-heading"
                ></v-skeleton-loader>
              </v-sheet> 
              <v-sheet  class="pa-3" v-if="loading">
                <v-skeleton-loader v-bind="attrs"
                type="divider, list-item-three-line, card-heading, list-item-three-line, card-heading"
                ></v-skeleton-loader>
              </v-sheet> 
          <v-layout row wrap justify-space-around >
          <v-flex xs6 md3 v-for="(pro,proindex) in books" :key="proindex">
            <v-hover v-slot:default="{ hover }">
            <v-card class="py-4" max-width="250" max-heith="250" align="center" @click="detail(pro._id)" :elevation="hover ? 12 : 0" flat>
                 <v-avatar size="150" class="ma-10">
                    <v-img  :src='pro.imageUrl' :lazy-src="`../assets/img/back.jpg`"  width="150" height="150"></v-img>
                 </v-avatar> 
                 <h4 class="text-center   blue--text" >HM {{pro._id}}</h4>
                 <h5 class="text-center  secondary--text">Age: <span class="grey--text">{{pro.age}}</span></h5>
                 <h5 class="text-center  secondary--text">Nationality: <span class="grey--text">{{pro.nationality}}</span></h5>
                  <h5 class="text-center  orange--text">{{pro.availability}}</h5>
                 <h5 class="text-center  seconday--text">DWC: <span class="grey--text">{{pro.dwc}}</span></h5>
                 <h5 class="text-center  secondary--text">Experience: <span class="grey--text">{{pro.experience}}</span></h5>
                 <h5 class="text-center orange--text">Job type: {{pro.jobType}}</h5>
                 <div class="text-xs-center  mx-3" v-if="!$store.state.isUserLoggedIn || $store.state.user.role=='customer'">
                    <v-btn block rounded outlined class="primary"><span class="text-capitalize white--text">Book</span></v-btn>
                 </div>
                 <div class="text-xs-center  mx-3" v-if="$store.state.isUserLoggedIn && $store.state.user.role=='admin'">
                    <v-btn block rounded outlined class="primary"><span class="text-capitalize white--text">Delete</span></v-btn>
                 </div>
            </v-card>
            </v-hover>
        </v-flex>
      </v-layout>
        </v-col>
      </v-row>
    </v-card>
    </v-container>
    <br><br>
      <div class="svg-border-waves text-white">
       <v-img src="~@/assets/img/borderWavesBlue.svg"/>
      </div>
      <br><br>
  </div>
</template>
<script>
import book from "../service/authonticationService";
export default {
  data() {
    return {  
      books:[],
      loading:true,
      filterIcon:false,
      windowWidth: window.innerWidth,
      multiLine: true,
      snackbar: false,
      text: "",
      loading:false,
      jobType:"",
      nationality:"",
      religion:"",
      age:"",
      searchError:false,
      jobTypeMenu:['Full time','Part time'],
      nationalityMenu:['Ethiopian','Philippines'],
      religionMenu:['Muslim','Christian','Others'],
      ageMenu:['18-25','26-30','31-40','> 40'],
       
    };
  },
  async mounted(){
        this.searchError=false;
          const res = await book.getCustomers();
          var allBooks = res.data;
          var c=0;
          for(c=0;c<allBooks.length;c++){
              this.books.push(allBooks[c]);
          }
          this.loading=false;
     this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
  } ,
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onResize() {
        this.windowWidth = window.innerWidth
      },
    resetOption(){
      this.jobType="";
      this.nationality="";
      this.religion="";
      this.age="";
    },
    async detail(id){
      this.$router.push({ name: "customerDetail",params:{id:id} });
      window.scrollTo(0, 0);
    },
    async searchByCatagory(){
          if(this.jobType==="" && this.nationality==="" && this.religion==="" && this.age===""){
            this.searchError=true;
          }
          else{
           this.loading=true;
           this.books=[];
           this.searchError=false;
           var counter=0;
           var allCustomers="";
            if(this.jobType!=""){
                const responseJobType = await book.customerJobType(this.jobType);
                allCustomers= responseJobType.data;
                for(counter=0;counter<allCustomers.length;counter++){
                  this.books.push(allCustomers[counter]);
                }
              this.loading=false;
              }
              else if(this.nationality!="")
              {
                const responseNationality= await book.customerNationality(this.nationality);
                allCustomers = responseNationality.data;
                for(counter=0;counter<allCustomers.length;counter++){
                  this.books.push(allCustomers[counter]);
                }
                this.loading=false;
              }
              else if(this.religion!=""){
                const responseReligion = await book.customerReligion(this.religion);
                allCustomers = responseReligion.data;
                for(counter=0;counter<allCustomers.length;counter++){
                  this.books.push(allCustomers[counter]);
                }
                this.loading=false;
              }
              else if(this.age!=""){
                this.datePageNumber++;
                const responseAge = await book.customerAge(this.age);
                allCustomers = responseAge.data;
                for(counter=0;counter<allCustomers.length;counter++){
                  this.books.push(allCustomers[counter]);
                }
                this.loading=false;
              }
          } 
     }        
  },
};
</script>
<style lang="scss">
#contact {
  background-color:rgb(3, 3, 3);
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
        color:#F69849;
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
