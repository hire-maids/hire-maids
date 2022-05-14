<template>
  <section class="white mt-12" >
    <br>
     <div class="staticHero">
      <v-img src="../assets/img/about-us.jpg">
      </v-img>
    </div>
    <v-container fluid  data-aos="zoom-in-up" data-aos-duration="1000">
      <br><br>
      <v-row align="center" justify="center">
          <!-- <p class="display-3 secondary--text"><b>About Us</b></p> -->
        <v-col cols="10">
          <v-row align="center" justify="center" data-aos="fade-up-right" data-aos-delay="200">
             <v-col cols="12" md="8">
              <div data-aos="fade-up-left" data-aos-delay="200">
              <p class="display-1 primary--text"><b>Who are we?</b></p>
              <v-row>
                <v-col cols="12" class="align-center">
                  <p  class="about">
                    Binhareb was established in 2011, as a premier housekeeping service for families in Dubai. For the past  years, binhareb Co. is the market leader in recruitment and placement of full time maids (live-in). In 2021, the company established the largest residential training center for all newly onboarded maids in Dubai. The training program ensures UK Level 3 standards of knowledge and is supported with interactive American simulator baby dolls and caregiving tools for caregiving in childhood. Our Nanny Program ensures all prospective candidates are knowledgeable and qualified to be categorised as a nanny in Dubai. Families are also looking for the best babysitting Dubai service, and full time maids are popular with expat communities particularly in Dubai and the UAE. A maid service Dubai can cover all areas of speciality including babysitting, qualified nannies, experienced housekeepers, cooks and drivers.
                  </p>
                </v-col>
                <v-col cols="12" class="align-center">
                  <p class="about">
                    We look forward to assisting you with our services.
                  </p>
                </v-col>
              </v-row>
              </div>   
            </v-col>
            <v-col cols="12" md="4" >
               <v-img
                src="@/assets/img/about.png"
                class="d-block ml-auto mr-auto"
                max-width="500px"
              />   
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <br><br>
      <div class="svg-border-waves text-white">
       <v-img src="~@/assets/img/borderWavesBlue.svg"/>
      </div>
      <br><br>
  </section>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"
export default {
  data() {
    return {      
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
  
};
</script>
<style>
p.about {
        font-size: 18px;
        color: #444444ba;
    }

</style>
