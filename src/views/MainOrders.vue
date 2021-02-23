<template>
  <v-container>
    <v-alert v-show="errors.length" colored-border
       type="info">{{ errors }}</v-alert>
    <v-row>
      <v-col md="8">
        <v-row>
          <v-col md="6" offset="2">
            <BaseInput
              label="Поиск заказа"
              type="text"
              v-model="regn"
              placeholder="Введите регистрационный номер"
            ></BaseInput>
          </v-col>
          <v-col md="2" style="margin-top:20px"
            ><v-btn v-on:click="getOrder">Поиск</v-btn></v-col
          >
        </v-row>
      
        <v-row> <v-col><h3><u>Заказы</u></h3></v-col>
         </v-row>

        <v-row>
          <div v-if="Order">
            <OrderInfoCard
              :key="Order.orderNumber"
              :order="Order"
            ></OrderInfoCard>
          </div>
          <div v-if="OrdersBySearch">
            <OrderCardInfoSearch
              v-for="order in OrdersBySearch"
              :key="order"
              :ordert="order"
            ></OrderCardInfoSearch>
          </div>
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
              v-model="filter.from_date"
              type="date"
              label="Начало"
            ></BaseInput
          ></v-col>
          <v-col md="6"
            ><BaseInput
              type="date"
              v-model="filter.to_date"
              label="Оконачание поставки"
            ></BaseInput
          ></v-col>
        </v-row>
        <br />
        <BaseSelect v-model="filter.region" label="Регион"></BaseSelect>
        <BaseInput v-model="filter.okpd" label="ОКПД" type="text"></BaseInput>
        <label>Статус </label>
        <v-container class="px-0" fluid>
          <v-radio-group v-model="filter.status">
            <v-radio
              v-for="option in statusOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          <v-btn v-on:click="getOrdersBySearch">Поиск заказов </v-btn>
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
import OrderCardInfoSearch from "@/components/OrderCardInfoSearch.vue";

export default {
  data() {
    return {
      filter: {
        from_date: "",
        to_date: "",
        okpd: "",
        region: "",
        status: "",
      },

      statusOptions: [
        { label: "Подача заявок", value: 1 },
        { label: "Работа комиссии", value: 2 },
        { label: "Закупка завершена", value: 3 },
        { label: "Закупка отменена", value: 4 },
      ],
      regn: "0373200193019000001",
      KeyWords: "",
      Order: '',
      OrdersBySearch: [],
      errors: '',
    };
  },
  computed: {
    getParam() {
      var parametr = "";
      for (var key in this.filter) {
        if (this.filter[key] != "") {
          parametr += key + "=" + this.filter[key] + "&";
        }
      }
      return parametr.substring(0, parametr.length-1);
    },
    isInputFilter() {
      for (var key in this.filter){
        if (this.filter[key] != '') {
          return false;
        }
  
      }
         return true;
    },

  },
  
  components: {
    BaseInput,
    BaseSelect,
    OrderInfoCard,
    OrderCardInfoSearch,
  },
  methods: {
    getOrder: function() {
      if (this.regn == '') {
        this.errors = 'Пожалуйста, введете регистрационный номер заказа'
      }
      else {
      this.OrdersBySearch = []
      this.Order = this.$store.state.orderst[0][String(this.regn)];
      OrderAPI.getOrder(this.regn)
        .then((response) => {
          //this.$store.state.orderst[0][String(this.regn)] = response.data;
          this.Order = response;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("An Error", error.response);
        });
      }
    },
    getOrdersBySearch: function() {
        if (this.isInputFilter ) {
          this.errors = 'Выберете критерий поиска в фильтре параметров'
        }
        else {
          this.errors = ''
          this.Order = ''
      this.OrdersBySearch = Object.values(Object.values(this.$store.state.orders[0][44]) );
      OrderAPI.getOrdersBySearch(this.getParam())
        .then((response) => {
          //this.$store.state.orders = response.data;
          console.log(response.data);
          this.orders = response.data; ////
        })
        .catch((error) => {
          console.log("An Error", error.response);
        });
        }
    },
    
    checkRegn: function() {
      if (this.regn == "" || Object.values(this.filter).length == 0) {
        this.errors = "Введите регистрационный номер"
      } else {
        this.errors= '';
        this.getOrder();
      }
    },
  },
};
</script>
<style scoped>
.filter-text {
  font-size: 16px;
  margin: 10px;
}
</style>
