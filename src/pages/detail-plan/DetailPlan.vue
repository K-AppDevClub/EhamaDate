<template>
  <ons-page>
    <navbar></navbar>
    <v-ons-card>
        <h2> プラン名：{{hello}}</h2>
        <h4 >概要:</h4>
        <p>{{note}}</p>
    </v-ons-card>
    <v-ons-card>
        <h4>行ったスポット：{{spot}}</h4>
        <v-ons-list>
        <v-ons-list-item>Item A</v-ons-list-item>
        <v-ons-list-item>Item B</v-ons-list-item>
        </v-ons-list>
    </v-ons-card>
    <v-ons-card>
        <h4>コース：{{cource}}</h4>
        <v-ons-list>
        <v-ons-list-item>Item A</v-ons-list-item>
        <v-ons-list-item>Item B</v-ons-list-item>
        </v-ons-list>
    </v-ons-card>
    <v-ons-card>
        <h4>感想：</h4>
        <p>めっちゃよかった</p>
        <p>{{note}}</p>
    </v-ons-card>
    <v-ons-button modifier="cta" style="margin: 60px 0px" @click="$router.push({ name: 'recommend' });">戻る</v-ons-button>
    <v-ons-button modifier="cta" style="margin: 60px 0px" @click="$router.push({ name: 'home' });">ホームへ</v-ons-button>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import EhamaForm from '../../components/form/Form';

export default {
  name: 'detail-plan',
  components: {
    Navbar,
    EhamaForm,
  },
};
</script>
