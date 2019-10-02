<template>
  <v-container>
    <v-row v-for="(brand, id) in brands" v-bind:key="id">
      <v-col cols="12" v-on:click="goToDetail(brand.entity_id)">
        <v-card
          class="mx-auto card"
        >
          <v-card-title>Brand Name: {{brand.name}}</v-card-title>
          <v-card-text>Number of registrations : {{brand.state_registrations.length}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Home",
  data: () => ({
    
  }),
  mounted() {
    this.$store.dispatch('loadBrands')
  }, 
  computed: mapState([
    'brands'
  ]),
  methods: {
    goToDetail(entity_id) {
      this.$router.push({path: `/detail/${entity_id}`});
    }
  }
};
</script>

<style lang="scss" scoped>
v-container {
  width: 1200px !important;
}
.card {
  cursor: pointer;
}
</style>