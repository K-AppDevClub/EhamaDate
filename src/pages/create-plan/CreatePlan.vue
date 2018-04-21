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

      <v-ons-list-header>エリア</v-ons-list-header>
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
      <v-ons-list-item v-for="(item,i) in courses" v-bind:key="item.uniq">
        {{ item.time }} 
        <span style="margin-left: 20px;"> {{item.name}} </span>
        <div class="right">
          <v-ons-button modifier="cta" style="text-align:right; margin: 6px 10px 0 10px" @click="removeCourse(i);">削除</v-ons-button>
        </div>
      </v-ons-list-item>

      <center>
        <v-ons-button modifier="quiet" style="margin: 6px 0" @add-course="pushCourse" @click="addCourse">コースを追加</v-ons-button>
      </center>
    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" style="margin: 6px 0" @click="postPlan();">プラン作成</v-ons-button>
    </center>
  </ons-page>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import store from '../../store';
import Navbar from '../../components/navbar/Navbar';
import AddCourse from '../../pages/add-course/AddCourse';

export default {
  name: 'create-plan',
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
      planname: '',
      description: '',
      prefs: [],
      // courses: [],
      pref_id: null,
    };
  },
  computed: mapGetters({
    courses: 'getNewCourses',
  }),
  mounted() {
    axios.get('http://59.157.6.140:3000/prefectures')
    .then((res) => {
      this.prefs = res.data;
      this.prefs.unshift({id: null, name: 'エリアを選択'});
    })
    .catch((res) => {
      console.log(res);
    });
  },
  methods: {
    addCourse() {
      this.$emit('push-page', {
        extends: AddCourse,
        onsNavigatorProps: {
          plan_id: 1,
        }
      })
    },
    pushCourse() {
      console.log("handle add course")
      const rand = Math.floor(Math.random() * 100000);
      this.courses.push({ uniq: rand, spot_id: 1, time: '18:00:00' });
    },
    removeCourse(num) {
      this.$store.commit('removeCourse', num);
    },
    postPlan() {
      const courses_params = {};
      this.courses.forEach((v)=>{
        courses_params[v.uniq] = v
      });
      axios.post('http://59.157.6.140:3000/plans', {
        plan: {
          title: this.planname,
          detail: this.description,
          prefecture_id: this.pref_id,
          courses_attributes: courses_params,
        },
      })
      .then(res => console.log(res));
    },
  },
};
</script>
