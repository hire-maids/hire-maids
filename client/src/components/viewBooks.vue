<template>
  <div class="my-10">
    <br><br>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" sm="12" class="pa-4 mx-auto">
            <v-sheet min-height="70vh" rounded="lg" class=" py-3" >
            <v-container >
              <div class="text-center" v-if="loading">
                <v-progress-circular indeterminate color="green"></v-progress-circular>
              </div>
            <template>
              <v-data-table v-model="selected" :single-select="singleSelect"
                item-key="name"  :headers="headers" :items="books"
                sort-by="calories" class="mr-2 ">
                <template v-slot:top>
                  <v-toolbar flat color="white">
                    <v-toolbar-title class="primary--text">All Books</v-toolbar-title>
                    <div class="pl-3"><v-icon>mdi-search</v-icon>
                        <v-text-field  class="ml-3 mr-12"></v-text-field>
                    </div>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                  <v-icon small @click="DeleteInfo(`${item._id}`)" color="red">delete</v-icon>
                </template>
              </v-data-table>
            </template>
          </v-container>
          </v-sheet>
        </v-col>
        </v-row>
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
    data: () => ({
      employeeName:"",
      employeeNumber:"",	
      employeerName:"",
      employeerNumber:"",
      books:[],    
      loading:false,
      headers: [
        { text: 'Employee name', value: 'employeeName', align: 'left',},
        { text: 'Employee phone number', value: 'employeeNumber'},
        { text:'Employeer name',value:'employeerName'},
        { text:'Employeer phone number',value:'employeerNumber'},
        { text:'Delete', value: 'action', sortable: false },
      ],
    }),
    async mounted(){
      this.loading=true;
        try {
          const response = await book.getBooks();
          var allBooks = response.data;
          var c=0;
          for(c=0;c<allBooks.length;c++){
             this.books.push(allBooks[c]);
          }
          this.loading=false;
        } catch (err) {
           this.loading=true;
        }
              this.loading=false;

      } ,
    methods:{
      async DeleteInfo(id){
            this.loading=true; 
            var r = confirm("Are you sure? order will be deleted permanetly!");
            if (r == true) {
              const responseDelete = await book.deleteOrder(id);
              if(!responseDelete.data.error){
                this.loading=false;
                location.reload();
              }
            }   
        },
      
    }
  }
</script>