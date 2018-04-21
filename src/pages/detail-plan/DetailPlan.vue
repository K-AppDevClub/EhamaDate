<template>
  <ons-page>
    <navbar navType="back" msg="プラン詳細"></navbar>    
    <v-ons-card>
        <h2>{{post.title}}</h2>
        <h4 >概要:</h4>
        <p>{{post.detail}}</p>
    </v-ons-card>
    <v-ons-card>
        <h4>行ったスポット：</h4>
        <v-ons-list>
        <v-ons-list-item>Item A</v-ons-list-item>
        <v-ons-list-item>Item B</v-ons-list-item>
        </v-ons-list>
    </v-ons-card>
    <v-ons-card>
        <h4>コース：</h4>
        <v-ons-list>
        <v-ons-list-item>Item A</v-ons-list-item>
        <v-ons-list-item>Item B</v-ons-list-item>
        </v-ons-list>
    </v-ons-card>
    <v-ons-card>
        <h4>感想：</h4>
        <p>{{post.comment}}</p>
        <p></p>
    </v-ons-card>
    <v-ons-button modifier="cta" style="margin: 60px 0px" @click="$router.push({ name: 'recommend' });">戻る</v-ons-button>
    <v-ons-button modifier="cta" style="margin: 60px 0px" @click="$router.push({ name: 'home' });">ホームへ</v-ons-button>
  </ons-page>
</template>

<script>
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import EhamaForm from '../../components/form/Form';

export default {
  name: 'detail-plan',
  components: {
    Navbar,
    EhamaForm,
  },
  props: {
    plan_id: {
      default: 1,
    },
  },
  data() {
    return {
      // url: 'http://59.157.6.140:3000/plans/1',
      url: `http://59.157.6.140:3000/plans/${this.plan_id}`,
      post: [],
    };
  },
  created() {
    console.log(this.plan_id);
    axios.get(this.url)
    .then((response) => {
      this.post = response.data;
      console.log(response);
    });
  },


  // data() {
  //   return {
  //     items: {
  //       title: '稲佐山の夜景と君とforever',
  //       overview: '1000万ドルの夜景とも揶揄される長崎市稲佐山の夜景は、意中の相手とのデートを一層盛り上げてくれるはず！！',
  //       spots: ['レストランなんとか', '稲佐山', 'ラブホ'],
  //       course: [
  //         { time: '20:00', move: '夜景を見る' },
  //         { time: '21:45', move: '飯食べる' },
  //         { time: '23:00', move: 'xxx' }],
  //     },
  //   };
  // },
};
</script>
