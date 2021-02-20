<template>
  <v-container>
    <v-row>
      <v-col md="8">
        <v-row>
          <v-col md="6" offset="2">
            <BaseInput
              label="Поиск заказов"
              type="text"
              v-model="regn"
              placeholder="Введите ключевое слово или словосочетание для поиска "
            ></BaseInput>
            <v-col md="2"><v-btn v-on:click="getOrder">Поиск</v-btn></v-col>
          </v-col>
        </v-row>
        <v-row><h3>заказы</h3> </v-row>

        <v-row>
          <OrderInfoCard
            v-for="order in Orders"
            :key="order.orderNumber"
            :order="order"
          ></OrderInfoCard>
        </v-row>
      </v-col>
      <v-col md="4">
        <h3>Дополнительные параметры</h3>
        <br />
        Поиск
        <br />
        <v-row>
          <v-col md="6">
            <BaseInput
              v-model="from_date"
              type="date"
              label="Начало"
            ></BaseInput
          ></v-col>
          <v-col md="6"
            ><BaseInput
              type="date"
              v-model="to_date"
              label="Оконачание поставки"
            ></BaseInput
          ></v-col>
        </v-row>
        <br />
        <BaseSelect v-model="region" label="Регион"></BaseSelect>
        <BaseInput v-model="okpd" label="ОКПД" type="text"></BaseInput>
        Статус
        <v-container class="px-0" fluid>
          <v-radio-group v-model="status">
            <v-radio
              v-for="option in statusOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import OrderInfoCard from "@/components/OrderInfoCard.vue";
import OrderAPI from "@/services/OrderAPI.js";

export default {
  data() {
    return {
      from_date: "",
      to_date: "",
      region: "",
      okpd: "",
      status: "",
      statusOptions: [
        { label: "Подача заявок", value: 1 },
        { label: "Работа комиссии", value: 2 },
        { label: "Закупка завершена", value: 3 },
        { label: "Закупка отменена", value: 4 },
      ],
      regn: " ",
      KeyWords: "",
      Orders: [
      
      ],
    };
  },
  components: {
    BaseInput,
    BaseSelect,
    OrderInfoCard,
  },
  methods: {
    getOrder() {
      OrderAPI.getOrder().then((response) => {
        console.log(response.data)

      }).catch((error) => {
        console.log("An Error", error.response)
      });
    }
  }
};
</script>
<style scoped>
.filter-text {
  font-size: 16px;
  margin: 10;
}
</style>
