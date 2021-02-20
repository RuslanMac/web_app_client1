<template>
  <v-container>
    <v-card>
      <v-row class="cardInfo" >
        <v-col md="8">
          <v-row> 
            <v-col>
              <label class="labelC">Номер ИНН:</label>
              {{ order.orderNumber }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Наименование продукта:</label>
              {{ order.productName }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Заказчик:</label>
              {{ order.productOwner }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Регион</label>
              {{ order.region}}
            </v-col>
          </v-row>
        </v-col>
        <v-col md="4">
          <v-row>
            <v-col>
              <label class="mainInfo"></label>
              {{ order.initialPrice }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Дата публикации:</label>
              {{ order.publicationDate }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label> Дата начала:</label>
              {{ order.startDate }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label> Дата завершения:</label>
              {{ order.sDate }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="green">
            Подробнее
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  props: {
    order: {
      
        productName: "",
        orderOwner: "",
        orderNumber: 123,
        publicationDate: "10-09-2019",
        startDate: "11-09-2019",
        sDate: "13-12-2019",
        region: "Moscow", 
         initialPrice: 12345
    
      
      },
  }
};
</script>
<style scoped>
.labelC {
  font-size: 16px;
  font-style: initial;
}
.mainText {
  font-size: 20px;
}
.cardInfo {
  border: 12px indigo;
}
</style>
