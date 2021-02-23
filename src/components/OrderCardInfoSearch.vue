<template>
  <div>
  <v-card class="mt-4">
      <v-container>
    <!-- <v-row><label class="labelC">Номер продукта</label>
        <v-col>
            {{ Object.keys(ordert) }}
        </v-col>
    </v-row> -->
    <v-row>
      <v-col>
        <label class="labelC">Продукт:</label>
         {{ ordert.Продукт }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <label class="labelC"> Дата публикации: </label> 
        {{ ordert.ДатаПубл}}
      </v-col>
    </v-row>
      </v-container>
  </v-card>
  </div>
</template>

<script>
import OrderAPI from "@/services/OrderAPI.js";

export default { 
    data () {
        return {
            order: Object,
           





           
        }
    },
    props: {
        ordert: Object,
          






                      

    },
    

   
    mounted() {
        console.log("Component OrderCardInfoSearch mounted!");
         OrderAPI.getOrder().then((response) => {

        console.log(response.data)

      }).catch((error) => {
        console.log("An Error", error.response)
      }).then(() => {
          console.log("Request was sent;")
      })
    },
    

    };

</script>

<style scoped>
    .labelC {
  font-size: 16px;
  font-style: initial;
  font-weight: bold;
}
.mainText {
  font-size: 20px;
}
.cardInfo {
  border: 12px indigo;
}
</style>