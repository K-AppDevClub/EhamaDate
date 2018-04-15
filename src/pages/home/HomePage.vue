<style lang='scss' scoped>
.page-title {
  text-align: center;
}
.body {
  margin-top: 50px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
  <div class='page-content' align='center'>
    <v-ons-list> 
    <v-ons-list-header>
      <img src="../../assets/love.jpeg" width="12" height="12">
      デートプランを探す
    </v-ons-list-header>
        <v-ons-list-item v-for='region in regions' :key='region' @click="$router.push({ name: region.url});">
          {{region.name}}
        </v-ons-list-item>
    </v-ons-list>
    <h1>話題のデート体験記</h1>
    <el-carousel height="250px">
    <el-carousel-item v-for="item in experiences" :key="item">
      <h3>{{item.title}}</h3>
      {{item.detail}}
      <router-link :to=item.path>続きを読む</router-link>
    </el-carousel-item>
    </el-carousel>  
    <v-ons-button modifier="cta" style="margin: 6px 0" @click="$router.push({ name: 'create-plan' });">作成</v-ons-button>
  </div>
  </v-ons-page>
</template>

<script>
// import axios from 'axios';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import Navbar from '../../components/navbar/Navbar';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    Navbar,
  },
  data() {
    return {
      config: Config,
      regions: [
        {
          name: '地域で探す',
          url: 'region',
        },
        {
          name: 'プランで探す',
          url: 'home',
        },
      ],
      experiences: [
        {
          title: 'えはまの奮発日記',
          detail: 'tinderで知り合った女性と食事することになりました。しかし女性の右手には...',
          path: 'detail-plan',
        },
        {
          title: 'ほげ',
          detail: 'hogehoge',
          path: 'detail-plan',
        },
      ],
    };
  },
};
</script>
