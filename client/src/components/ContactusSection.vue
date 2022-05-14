<template>
  <section class="white mt-12">
    <br>
    <div id="image">
      <v-img src="../assets/img/contactUs.jpg"></v-img>
    </div>
    <v-container>
      <br><br>
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <h1 class="display-1 primary--text">Address</h1><br>
              <p class="mt-3">
                <strong>Address:</strong>  Arat kilo
              </p>
              <p class="mt-3">
               <strong>Phone number: </strong> +251986551414
              </p>
              <p class="mt-3">
                <strong>Email:</strong> info@binhareb.com
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-form  action="https://formsubmit.co/info@binhareb.com" method="POST">
                <v-text-field outlined name="name" label="Name" required></v-text-field>
                <v-textarea outlined name="message"  label="message" required/>
                <v-btn  color="primary" rounded block class="mt-3" type="submit"> Send </v-btn>
              </v-form>
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
export default {
  data() {
    return {      
    };
  },
  
};
</script>
<style>

</style>
