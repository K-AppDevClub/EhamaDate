<style>
.title {
  text-align: center;
}
</style>

<template>
  <ons-page>
    <navbar navType="back" msg="プラン作成"></navbar>
    <v-ons-list>
      <v-ons-list-header>情報</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="プラン名" float v-model="planname"></v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder="概要" float v-model="description"></v-ons-input>
      </v-ons-list-item>

      <v-ons-list-header>コース</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="コース1" float ></v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder="コース2" float ></v-ons-input>
      </v-ons-list-item>
    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" style="margin: 6px 0" @click="$router.push({ name: 'home' });">作成</v-ons-button>
    </center>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'create-plan',
  components: {
    Navbar,
  },
  data() {
    return {
      planname: '',
      description: '',
    };
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
      // store.commit('toggleMenu', false);
    },
  },
};
</script>
