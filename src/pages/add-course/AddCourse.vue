<style>
.title {
  text-align: center;
}
</style>

<template>
  <ons-page>
    <navbar navType="back" msg="コースを追加"></navbar>

    <v-ons-list>
      <v-ons-list-header>時間</v-ons-list-header>
      <v-ons-list-item>
        <el-time-select
          v-model="time"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:45'
          }"
          placeholder="Select time">
        </el-time-select>
      </v-ons-list-item>

      <v-ons-list-header>場所</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="スポット名を検索" float v-model="course_name"></v-ons-input>
      </v-ons-list-item>

      <v-ons-list-header>詳細</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="コースの説明" float v-model="description"></v-ons-input>
      </v-ons-list-item>

    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" style="margin: 6px 0" @click="addCourse">コース追加</v-ons-button>
    </center>
  </ons-page>
</template>

<script>
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'add-course',
  components: {
    Navbar,
  },
  props: {
    msg: {
      default: 'えはまデート',
    },
  },
  data() {
    return {
      course_name: '',
      description: '',
      time: "19:00",
    };
  },
  mounted() {
    axios.get('http://59.157.6.140:3000/prefectures')
    .then((res) => {
      this.prefs = res.data;
    });
  },
  methods: {
    addCourse() {
      const rand = Math.floor(Math.random() * 100000);
      this.$store.commit('addCourse', { 
        uniq: rand,
        name: this.course_name, 
        description: this.description, 
        time: this.time, 
      });
      this.$emit('pop-page');
    },
  },
};
</script>
