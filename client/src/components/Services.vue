<template>
  <section id="hero">
  <!-- <v-container id="someImage"></v-container> -->
  <!-- <v-container fluid id="offer" class="py-10" data-aos="zoom-in-down" data-aos-delay="500">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="space-around">
            <v-col cols="12" sm="4" class="text-center">
              <v-hover v-slot:default="{ hover }">
                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                  <h1 class="primary--text">Recruitment</h1>
                  <v-list>
                    <v-list-item>
                      <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <h4 class="font-weight-regular subtitle-1">Maid</h4>
                    </v-list-item>
                    <v-list-item>
                        <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                        <h4 class="font-weight-regular subtitle-1">Babysitter</h4>
                    </v-list-item>
                    <v-list-item>
                      <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <h4 class="font-weight-regular subtitle-1">Qualified Nannies</h4>
                    </v-list-item>
                    <v-list-item>
                        <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                        <h4 class="font-weight-regular subtitle-1">Certified Caregiver</h4>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="4" class="text-center">
              <v-hover v-slot:default="{ hover }">
                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                  <h1 class="primary--text">Domestic Worker Visa Service</h1>
                    <v-list>
                      <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                          <h4 class="font-weight-regular subtitle-1">Maid Visa</h4>
                      </v-list-item>
                      <v-list-item>
                          <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                          <h4 class="font-weight-regular subtitle-1">Nanny Visa</h4>
                      </v-list-item>
                      <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                          <h4 class="font-weight-regular subtitle-1">Housekeeper Visa</h4>
                      </v-list-item>
                      <v-list-item>
                          <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                          <h4 class="font-weight-regular subtitle-1">Babysitter Visa</h4>
                      </v-list-item>
                    </v-list>                
                  </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="4" class="text-center">
              <v-hover v-slot:default="{ hover }">
                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                  <h1 class="primary--text">Full-Time Live-In</h1>
                      <v-list>
                        <v-list-item>
                          <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                            <h4 class="font-weight-regular subtitle-1">From AED 2,300</h4>
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                            <h4 class="font-weight-regular subtitle-1">Flexible Contract</h4>
                        </v-list-item>
                        <v-list-item>
                          <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                            <h4 class="font-weight-regular subtitle-1">No Hassle - Free</h4>
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                            <h4 class="font-weight-regular subtitle-1">Replacements</h4>
                        </v-list-item>
                      </v-list>                
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container> -->
  <v-container class="my-10">
    <br><br><br>
        <v-row justify="center">
            <v-col cols="10" md="10" class="text-center">
              <p class="display-1 primary--text"><b>What we offer?</b></p>
                <p>If you are with us, you can get maid, house keeper, nany and cook as you want.</p>
            </v-col>
            <v-col cols="12" md="12">
                <div class="text-center">
                    <v-chip @click="activeOffer = 'maid'" :color="activeOffer === 'maid'? 'primary':''" class="mx-2 px-5">Maid</v-chip>
                    <v-chip @click="activeOffer = 'houseKeeper'" :color="activeOffer === 'houseKeeper'? 'primary':''" class="mx-2 px-5">House Keeper</v-chip>
                    <v-chip @click="activeOffer = 'nany'" :color="activeOffer === 'nany'? 'primary':''" class="mx-2 px-5">Nany</v-chip>
                    <v-chip @click="activeOffer = 'cook'" :color="activeOffer === 'cook'? 'primary':''" class="mx-2 px-5">Cook</v-chip>
                </div>
            </v-col>
            <v-col cols="12" md="12">
            <slot v-if="activeOffer === 'maid'">
            <v-row align="center" justify="center" class="mx-2">
            <v-col cols="12" md="6">
                <img src="@/assets/img/maid.jpg" alt="">
            </v-col>
            <v-col cols="12" md="6">
                <v-subheader class="text-h5 primary--text">Maid</v-subheader>
               <v-subheader class="text-h6 orange--text">Job Description: Roles and Responsibilities</v-subheader>
               <h3 class="secondary--text">Untrained and Unskilled, A Complete Beginner.</h3>
                <p>A basic “fetch-carry-iron-make-clean-mop-prepare” In many cases maids will become excellent in ironing, or hard basic cleaning (bathrooms, corridors, bedrooms etc.) but will have limited presentation skills, and doesn’t have a high level of expectation/experience in quality settings/luxury finishes.</p>
                <v-list>
                  <p>Training required for good Housekeeping theory, Housekeeping vocabulary and English or Arabic General Language vocabulary and grammar.</p>
                  <p>Maids can become excellent in what they do but limited in scope for further advancements and generally cannot manage other staff.</p>
                  <p>Many families have had long standing, highly loyal maids for many years, and in some cases it is not unusual for maids to retire from the same family, to be kept on in a gracea-favor accommodation for the rest of their lives</p>
                  <p>Maids also make good (3-1) all round (Maid-babysitter and Cook) where percentage of duties requires to be allocated in the job description/offer of employment letter.</p>
                  <p>Advanced skilled and experienced maids are usually given complete autonomy, and are highly trusted members of a household, respected and held in high regard by the children of the employer and any other domestic workers in the home. Maids who have been trained and have spent several years (minimum 3+) in working life, with fluency in English or Arabic are suitable for classification to Housekeeper level.</p>
                </v-list>
            </v-col>
          </v-row>            
          </slot>
          <slot v-if="activeOffer === 'houseKeeper'">
            <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <img src="@/assets/img/houseKeeper.jpg" alt="">
            </v-col>
            <v-col cols="12" md="6">
                <v-subheader class="text-h5 primary--text">House Keeper</v-subheader>
               <v-subheader class="text-h6 orange--text">Job Description: Roles and Responsibilities</v-subheader>
                <p>Work effectively with the employer to provide proper housekeeping services. Maintain a positive impression of oneself in the household Perform basic housekeeping tasks.</p>
                <p>Perform the tasks of washing and ironing clothes, organizing closets and bedsheets and making beds</p>
                <p>Maintain the cleanliness of the kitchen and kitchen appliances properly dispose of garbage. Maintain healthy, safe and positive relationship at workplace.</p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <h3 class="secondary--text text-center">Duty</h3>
                <v-list>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle>Codes of practice, standards, frameworks and guidance relevant to housekeeping</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                      <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                      <v-list-item-subtitle>Your own roles, responsibilities and accountabilities with their limits and boundaries</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>The roles, responsibilities and accountabilities of others with whom you work</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>The employer’s cultural and language context</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                        <v-list-item-subtitle>How to build trust and understanding in a relationship</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle>How to manage ethical conflicts and dilemmas in your work</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                      <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                      <v-list-item-subtitle>How and when to seek support in situations beyond your experience</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>Alternative ways of performing housekeeping tasks and their respective merits and demerits</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>The overall safety, sanitation, working and condition of the house</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                        <v-list-item-subtitle>Types of cleaning products and their uses</v-list-item-subtitle>
                  </v-list-item>
               </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <v-list>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle>The proper methods and standards of cleaning and tidying up</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                      <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                      <v-list-item-subtitle>Common appliances and how to handle them in case of an emergency</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>Different types of fabrics and their washing procedures</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle> Washing detergents and soaps</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                        <v-list-item-subtitle>Operating the washing machine</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle>How to wash delicate clothes and fabrics by hand</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                      <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                      <v-list-item-subtitle>Different types of waste and how to dispose of each type</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>The importance of disposing of waste properly</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>How to prioritize work and manage time</v-list-item-subtitle>
                  </v-list-item> 
                 </v-list> 
            </v-col>
          </v-row>                
          </slot>
            <slot v-if="activeOffer === 'nany'">
            <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <img src="@/assets/img/Nanny.png" alt="">
            </v-col>
            <v-col cols="12" md="6">
                <v-subheader class="text-h5 primary--text">Nany</v-subheader>
               <v-subheader class="text-h6 orange--text">Job Description: Roles and Responsibilities</v-subheader>
                <p>Roles and Responsibilities Primary role is to support the parents/guardian in looking after the continuing education, welfare and safety of children, (no general housekeeping but may involve some cooking/cleaning for the children).</p>
                <v-list>
                  <p>Work effectively with parents/guardians to provide care and support for infants, children, able-bodied and non-able bodied, special needs including the elderly living at home.</p>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle> Identify, organize, and monitor the daily activities of the child/ charge</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                    <v-list-item-subtitle>Attend to the child’s/charge physical and nutritional needs under the supervision and supporting instructions of the parents or guardian.</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle>Supervise the safety of the child/charge during activities inside and outside the house</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                      <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                      <v-list-item-subtitle>Provide play, enrichment, and stimulation to children's day to encourage learning and development as encouraged by the parents of guardian</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>Foster and encourage a positive relationship with the child/charge</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle> Provide an environment for the child/charge that promotes health, safety and protection in the absence of parents/guardian.</v-list-item-subtitle>
                  </v-list-item> 
                </v-list>
            </v-col>
          </v-row>    
          </slot>
          <slot v-if="activeOffer === 'cook'">
            <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <img src="@/assets/img/Cook 1.png" alt="">
            </v-col>
            <v-col cols="12" md="6">
                <v-subheader class="text-h5 primary--text">Cook</v-subheader>
               <v-subheader class="text-h6 orange--text">Job Description: Roles and Responsibilities</v-subheader>
                <p>Cooks are responsible for delivering food that is not only delicious and cooked to the specifications of the house but that is safe and fresh as well. They often have the following responsibilities:</p>
                <v-list>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle> Ensure ingredients and final products are fresh</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                    <v-list-item-subtitle>Follow recipes, including measuring, weighing and mixing ingredients</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                    <v-list-item-subtitle>Bake, grill, steam and boil meats, vegetables, fish, poultry and other foods</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                      <v-icon color="orange" class="mr-3"> mdi-check-all</v-icon>
                      <v-list-item-subtitle>Present, garnish and arrange final dishes</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>Occasionally serve food</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle> Maintain a clean and safe work area, including handling utensils, equipment and dishes</v-list-item-subtitle>
                  </v-list-item> 
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle>Handle and store ingredients and food</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                        <v-icon color="orange" class="mr-3">mdi-check-all</v-icon>
                        <v-list-item-subtitle> Maintain food safety and sanitation standards</v-list-item-subtitle>
                  </v-list-item> 
                </v-list>
            </v-col>
          </v-row>    
          </slot>
        </v-col>        
        </v-row>
    </v-container>
   <div align="center" justify="center">
         <br><br><br>
             <h1 class="primary--text text-center">Need Assistance? </h1>
            <v-layout row wrap justify-space-around >
            <v-flex xs12 md3 class="ma-3" >
               <v-card class="text-xs-center ma-10 max-auto" flat>
                       <v-responsive class="pt-4">
                          <h2 >Phone</h2>    
                          <a style="text-decoration:none"  href="tel:+251986551414">       
                          <img class="contact-icon" src="../assets/img/Phone.png" alt="">  
                          <p>+251 98 655 1414</p></a>
                       </v-responsive>
                  </v-card>
            </v-flex>
            <v-flex xs12 md3 class="ma-3" >
                 <v-card class="text-xs-center ma-10 max-auto" flat>
                       <v-responsive class="pt-4">
                          <h2 >Email</h2>             
                         <a style="text-decoration:none"  href="mailto:reliefbnetwork@gmail.com">
                           <img class="contact-icon" src="../assets/img/email.png" alt="">
                          <p>info@binhareb.com</p></a> 
                       </v-responsive>
                  </v-card>
            </v-flex>
            <v-flex xs12 md3 class="ma-3 text-xs-center">
                  <v-card class="text-xs-center ma-10 max-auto" flat>
                       <v-responsive class="pt-4">
                          <h2 >Whatsapp</h2>             
                           <a style="text-decoration:none" href="https://wa.me/+251986551414" target="_blank"><img class="contact-icon" src="../assets/img/whatsapp.jpg" alt="">
                          <p>+251 98 655 1414</p></a>
                       </v-responsive>
                  </v-card>
            </v-flex>
          </v-layout>
   </div>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
  </section>
</template>
<script>
import book from "../service/authonticationService";
import AOS from "aos"
import "aos/dist/aos.css"
export default {
  data() {
    return {  
      books:[],
      multiLine: true,
      snackbar: false,
      text: "",
      loading:false,
      activeOffer:'maid',
      features: [
        {
          title: "Recruitment",
          text: "We export coffee from Ethiopia to all foreign countries.",
        },
        {
          title: "Domestic Worker Visa Service",
          text: "We import modern and high quality cars.",
        },
        {
          title: "Full-Time Live-In",
          text: "we import construction materials and equipments.",
        },
      ],

    };
  },
  created(){
    AOS.init();
      // You can also pass an optional settings object
      // below listed default settings
     AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      });
  },
  async mounted(){
          const res = await book.getBooks();
          var allBooks = res.data;
          var c=0;
          for(c=0;c<allBooks.length;c++){
              this.books.push(allBooks[c]);
          }
  } ,
  methods: {
   
  },
};
</script>
<style lang="scss">
.contact-icon{
  height: 60px;
}
.subTitle{
    height: 30; 
    font-size: 20pt; 
    font-family: Arial Black; 
    color: rgb(232, 232, 241);
}
#social{
  list-style-type: none;
}
.contact-icon{
  height: 40px;
}
#contact {
  background-color:white;
}
p.mission {
        font-size: 35px;
        color: #444444ba;
    }
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
p.mission {
        font-size: 35px;
        color: #444444ba;
    }

#someImage {
  background-image: url("~@/assets/img/backImage.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 650px;
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
        color: #444444ba;
}
p.mesfin{
  font-size: 30px;
  color: #F69849;
}
p.mesfinDetail{
  font-size: 22px;
  color: #444444ba;
}
#download .container,
#download .row {
  height: 100%;
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
