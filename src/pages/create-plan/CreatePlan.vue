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

      <v-ons-list-item>
        <div class="center">

          <v-ons-select style="width: 40%" v-model="pref_id" >
            <option v-for="item in prefs" :value="item.id" v-bind:key="item.id">
              {{ item.name }}
            </option>
          </v-ons-select>

        </div>
      </v-ons-list-item>

      <v-ons-list-header>コース</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="コース1" float ></v-ons-input>
      </v-ons-list-item>
    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" style="margin: 6px 0" @click="postPlan();">作成</v-ons-button>
    </center>
  </ons-page>
</template>

<script>
import axios from 'axios';
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
      prefs: [],
      pref_id: 1,
    };
  },
  mounted() {
    console.log(this);
    axios.get('http://59.157.6.140:3000/prefectures')
    .then((res) => {
      console.log(res);
      this.prefs = res.data;
    });
  },
  methods: {
    postPlan() {
      axios.post('http://59.157.6.140:3000/plans', {
        plan: {
          title: this.planname,
          detail: this.description,
          prefecture_id: this.pref_id,
          courses_attributes: { 0: { spot_id: 1 } },
        },
      })
      .then(res => console.log(res));
    },
    goTo(routeName) {
      this.$router.push({ name: routeName });
      // store.commit('toggleMenu', false);
    },
  },
};
</script>
