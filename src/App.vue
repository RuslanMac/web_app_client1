<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
       <h1>Поиск государственных заказов</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/main-orders">Заказы</v-btn>
    </v-app-bar>

    <v-content> 
      <router-view></router-view>
    </v-content>
     
   
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>
