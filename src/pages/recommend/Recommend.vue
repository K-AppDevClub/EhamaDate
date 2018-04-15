<template>
  <ons-page>
    <!-- <navbar></navbar> -->
    <navbar navType="back" msg="鹿児島県内のデートスポット"></navbar>
    <!-- <h1 align="center"> 鹿児島県内のデートスポット </h1> -->
    <!-- <plan-component></plan-component>
    <plan-component></plan-component>
    <plan-component></plan-component> -->

    {{ $route.params.id }}
    <v-ons-list v-for="item in items" v-bind:key="item.id" modifier="inset" style="margin: 10px 40px 20px 30px">
      <v-ons-list-header> {{ item.id }}位 <v-ons-icon v-bind:icon='item.icon'></v-ons-icon></v-ons-list-header>
      <v-ons-list-item modifier="longdivider" tappable @click="$router.push({ name: 'detail-plan' });">
        <div class="left">
          <img class="list-item__thumbnail" v-bind:src='item.src'>
        </div>
        <div class="center">
          <span class="list-item__title"> {{ item.title }}</span><span class="list-item__subtitle"> {{ item.sub_title }} </span>
        </div>
      </v-ons-list-item>
      <!-- <v-ons-list-item modifier="longdivider" tappable @click="$router.push({ name: 'home' });">Item B</v-ons-list-item> -->
    </v-ons-list>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import PlanComponent from '../../components/plan/Plan';

export default {
  name: 'test',
  components: {
    Navbar,
    PlanComponent,
  },
  // mounted() {
  //   console.log(this.$route.params.id);
  // },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'ディズニーランド',
          sub_title: 'ド定番！',
          src: 'https://media1.tokyodisneyresort.jp/images/adventure/event/767_thumbnail.jpg?mod=20180207124628、https://www.google.co.jp/',
          icon: 'fa-star',
        },
        {
          id: 2,
          title: 'えはまの家',
          sub_title: 'ちょっと汚いよ！',
          src: 'https://media1.tokyodisneyresort.jp/images/adventure/event/767_thumbnail.jpg?mod=20180207124628、https://www.google.co.jp/',
          icon: 'fa-star',
        },
        {
          id: 3,
          title: 'えはまの実家',
          sub_title: 'ちょっと臭うよ！',
          src: 'https://media1.tokyodisneyresort.jp/images/adventure/event/767_thumbnail.jpg?mod=20180207124628、https://www.google.co.jp/',
          icon: 'fa-star',
        },
        {
          id: 4,
          title: '塗木研究室',
          sub_title: '淳夫が待ってるよ！',
          src: 'https://media1.tokyodisneyresort.jp/images/adventure/event/767_thumbnail.jpg?mod=20180207124628、https://www.google.co.jp/',
          icon: '',
        },
        {
          id: 5,
          title: 'まつを部屋',
          sub_title: 'ともくんが待ってるよ！',
          src: 'https://media1.tokyodisneyresort.jp/images/adventure/event/767_thumbnail.jpg?mod=20180207124628、https://www.google.co.jp/',
          icon: '',
        },
      ],
    };
  },
};
</script>
