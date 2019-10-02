<template>
  <v-container>
    <v-card
      max-width="344"
      class="mx-auto"
      color="#385f73"
      >
      <v-card-title class="card-title">{{name}}</v-card-title>
      <v-card-text class="card-text" v-for="(item, id) in stateRegistrations" v-bind:key="id">
        State: {{item.state}}
        <br>Number: {{item.registrationNumber}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Detail',
  components: {

  },
  data() {
    return {
      name: '',
      stateRegistrations: []      
    }
  },
  mounted() {
    this.$store.dispatch('loadBrandById', this.$route.params.entity_id);
  },
  computed: mapState([
    'brand'
  ]),
  watch: {
    brand: function(val) {
      this.name = val.name;
      this.stateRegistrations = val.state_registrations
    }
  }
  
};
</script>

<style lang="scss" scoped>
.card-title {
  color: white;
  padding-bottom: 25px;
}

.card-text {
  color: white !important;
  padding-top: 0;
  padding-bottom: 10px;
}
</style>
