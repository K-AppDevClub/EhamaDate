<template>
  <ons-page>
    <navbar navType="back" msg="コースを追加"></navbar>

    <v-ons-list>
      <v-ons-list-header>時間</v-ons-list-header>
      <v-ons-list-item>
        <el-time-select
          v-model="course.time"
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
        <v-ons-input placeholder="スポット名を検索" float v-model="course.name"></v-ons-input>
      </v-ons-list-item>

      <v-ons-list-header>詳細</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="コースの説明" float v-model="course.description"></v-ons-input>
      </v-ons-list-item>

    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" style="margin: 6px 0" @click="addCourse">
        <span v-if="edit">変更</span>
        <span v-else>コース追加</span>
      </v-ons-button>
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
    index: {
      default: false
    },
  },
  data() {
    return {
      course: {
        uniq: Math.floor(Math.random() * 100000),
        name: '',
        description: '',
        time: "19:00",
      },
      edit: false,
      idx: 0,
    };
  },
  mounted() {
    if(Math.round(this.$props.index) === this.$props.index) {
      // 直にstoreを代入すると参照渡しになっちゃうのでjson再変換すべき？
      // this.course = JSON.parse(JSON.stringify(this.$store.state.createPlan.courses[this.$props.index]));
      this.course = this.$store.state.createPlan.courses[this.$props.index];
      this.edit = true;
      this.idx = this.$props.index;
    }
  },
  methods: {
    addCourse() {
      this.$store.commit('addCourse', { 
        edit: this.edit,
        index: this.idx,
        data: this.course,
      });
      this.$emit('pop-page');
    },
  },
};
</script>
