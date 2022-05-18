<template>
  <div class="my-10">
    <br>
    <v-snackbar v-model="snackbar" :multi-line="multiLine">{{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>  
    </v-snackbar>
   <v-container fluid id="offer">
    <v-card outlined >
      <v-img  src="../assets/img/hero-image.png" max-height="300"></v-img>
    </v-card>
    <v-card tile class="mx-1 my-3" flat>  
      <v-row class="pt-5">
        <v-col cols="12" sm="3" class="my-3 hidden-sm-only hidden-xs-only">
          <div style="position: sticky; top: 76px">
             <v-card flat class="px-2 py-3">
            <v-toolbar flat>
              <strong>Nationality</strong>
            </v-toolbar>
            <v-card-txt >
              <v-row align="center">
               <v-col  cols="12" sm="6" md="12" >
                 <v-card  flat  class="d-flex justify-space-around">
                    <v-chip-group  active-class="primary--text" >
                      <v-chip class="mx-5 px-7" @click="searchNationality('Ethiopian')">Ethiopian</v-chip>
                      <v-chip class="mx-5 px-7" @click="searchNationality('Philippines')">Philippines</v-chip>
                    </v-chip-group>
                 </v-card>
               </v-col>
              </v-row>
            </v-card-txt>
          </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="9">
            <v-row >
            <v-col  cols="12">
              <v-div style="position: sticky; top: 16px">
              <v-tabs color="secondary" fixed-tabs v-model="tab">
                <v-tab v-for="item in categories" :key="item"   @click='category(item)'>
                  <span class="text-capitalize">{{item}}</span> 
                </v-tab>
              </v-tabs>
              <v-sheet  class="pa-3" v-if="loading">
                <v-skeleton-loader v-bind="attrs"
                type="list-item-three-line, card-heading, list-item-three-line, card-heading"
                ></v-skeleton-loader>
              </v-sheet> 
              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in categories" :key="item">
                <v-container v-for="(pro,proindex) in books" :key="proindex">
                <v-card @click="detail(pro._id)" class="my-2">
                 <v-row align="center" justify="center">
                     <v-col cols="10" sm="4">
                       <v-card outlined id="imageCard" class="px-3 py-3">
                          <v-img  :src='pro.imageUrl' :lazy-src="`../assets/img/back.jpg`" max-height="180" ></v-img>
                       </v-card>      
                     </v-col>
                     <v-col cols="10" sm="6">
                        <h3 class=" blue--text" ><i>HM {{pro._id}}</i> </h3>
                        <h4><i>{{pro.nationality}}</i> </h4>
                        <h4 ><i>Experience: <span class="grey--text">{{pro.experience}} </span></i></h4>
                        <h4 ><i>Speaks {{pro.language}}</i> </h4>
                     </v-col>
                 </v-row>
                </v-card>
                </v-container>
                </v-tab-item>
              </v-tabs-items>
              </v-div>
            </v-col>
            </v-row>    
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
      tab:null,
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
      nationalityMenu:['Ethiopian','Philippines'],   
      categories:['All','Ethiopian','Philippines'],    
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
    async detail(id){
      this.$router.push({ name: "customerDetail",params:{id:id} });
      window.scrollTo(0, 0);
    },
    async category(item){
        this.books=[];
        this.loading=true;
        if(item === 'All'){
          const res = await book.getCustomers();
          var allBooks = res.data;
          var c=0;
          for(c=0;c<allBooks.length;c++){
              this.books.push(allBooks[c]);
          }
          this.loading=false;
        }else{
          const responseNationality= await book.customerNationality(item);
          var allCustomers = responseNationality.data;
          for(var counter=0;counter<allCustomers.length;counter++){
            this.books.push(allCustomers[counter]);
          }
          if(allCustomers.length>0)
            this.loading=false;
        }
       
    },
    async searchNationality(nationality){
        this.books=[];
        this.loading=true;
        const responseNationality= await book.customerNationality(nationality);
        var allCustomers = responseNationality.data;
        for(var counter=0;counter<allCustomers.length;counter++){
          this.books.push(allCustomers[counter]);
        }
        if(allCustomers.length>0)
          this.loading=false;
    }        
  },
};
</script>
<style lang="scss">
.v-tab{
  text-transform: none !important;

} 
.v-tab:hover {
   background-color:#2196F3;
  
}
#imageCard{
  border-color: #010203;
}
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
