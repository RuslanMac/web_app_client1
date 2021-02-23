<template>
  <v-container class="flex-column">
    <h1 style="margin-bottom:30px">Информация о заказе</h1>

    <v-row>
      <v-container>
        <v-row><v-col>
        <label class="label-info">Регион</label>
        {{ order[regnNumber].Регион }} </v-col>
        </v-row>
        <v-row
          ><v-col><label class="label-info">Заказчик</label></v-col></v-row
        >

        <v-col>
          <label class="label-info">ОГРН</label>
          {{ order[regnNumber].Заказчик.ОГРН }}
        </v-col>

        <v-col>
          <label class="label-info">ИНН</label>
          {{ order[regnNumber].Заказчик.ИНН }}
        </v-col>

        <v-col>
          <label class="label-info">Наименование</label>
          {{ order[regnNumber].Заказчик.НаимПолн }}
        </v-col>

        <v-row>
          <v-col>
            <label class="label-info">Адрес полный</label>
            {{ order[regnNumber].Заказчик.АдресПолн }}
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <v-row>
      <v-col>
        <label class="label-info">Начальная цена</label>
        {{ order[regnNumber].НачЦена.Сумма }}
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <label class="label-info">Продукт</label>
        {{ order[regnNumber].Продукт.Название }}
      </v-col>
    </v-row>
    <v-row><v-btn to="/main-orders" color="green">К заказам</v-btn></v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    order: {
      type: String,
      default: "",
    },
  },
  computed: {
    regnNumber: function() {
      return Object.keys(this.order)[0];
    },
  },
  created() {
    this.order = this.$store.state.orderst[0];
  },
};
</script>

<style scoped>
.label-info {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
