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
          <v-ons-list-item v-for="course in courses" v-bind:key="course.id">
            <table cellpadding="5">
              <tr>
                <td>{{ editTime(course.time) }}</td> 
                <td>{{ course.name }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ course.description }}</td>
              </tr>
            </table>
          </v-ons-list-item>
        </v-ons-list>
    </v-ons-card>
    <v-ons-card>
        <h4>感想：</h4>
        <p>{{post.comment}}</p>
        <p></p>
    </v-ons-card>
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
      courses: [],
    };
  },
  created() {
    axios.get(this.url)
    .then((res) => {
      this.post = res.data;
      this.courses = res.data.courses;
      console.log(this.courses);
    });
  },
  methods: {
    editTime(time){
      if(time){
        let a = new Date(time);
        let hours = (a.getHours() < 10) ? '0' + a.getHours() : a.getHours();
        let minutes = (a.getMinutes() < 10) ? '0' + a.getMinutes() : a.getMinutes();      
        let str = hours + ':' + minutes;
        return str;
      }else{
        return '';
      }
    },
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
