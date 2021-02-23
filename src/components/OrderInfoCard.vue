<template>
  <v-container >
    <v-card>
      <v-row>
        <v-col md="8">
          <v-row>
            <v-col>
              <label class="labelC">Номер ИНН:</label>
              {{ order.Заказчик.ИНН }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Наименование продукта:</label>
              {{ order.Продукт.Название }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Заказчик:</label>
              {{ order.Заказчик.НаимСокр }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Регион</label>
              {{ order.region }}
            </v-col>
          </v-row>
        </v-col>
      
        <v-col md="4">
          <v-row>
            <v-col>
              <label class="mainInfo"></label>
              {{ order.Регион }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC">Дата публикации:</label>
              {{ order.ДатаПубл }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC"> Дата начала:</label>
              {{ order.startDate }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label class="labelC"> Дата завершения:</label>
              {{ order.sDate }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col>
          <v-btn color="green" to="/orderpage">
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
    return {};
  },
  props: {
    order: {},
  },
};
</script>
<style scoped>
.labelC {
  font-size: 16px;
  font-style: initial;
  font-weight: bold;
}


</style>
