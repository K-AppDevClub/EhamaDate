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
        <v-ons-list-item v-for='region in regions' :v-bind='region.name' @click="$router.push({ name: region.url});">
          {{region.name}}
        </v-ons-list-item>
    </v-ons-list>
    <v-ons-card>
    <h3>話題のデート体験記</h3>
    <v-ons-carousel style="width: 100%; height: 200px"
      swipeable auto-scroll overscrollable
    >
      <v-ons-carousel-item v-for='item in experiences' 
        :v-bind='item'
        :style="{backgroundColor: item.color}"
        >
        <div style="tex-align: center; font-size: 30px; margin-top: 20px; margin-left: 10px; color: #fff;">
          {{ item.title }}
        </div>
        <p style="margin-left: 10pt; margin-right: 10pt; color: #fff;">{{ item.detail }}</p>
      </v-ons-carousel-item>
    </v-ons-carousel>
    </v-ons-card>
    <v-ons-card>
    <h3>新着記事</h3>
    <v-ons-carousel style="width: 100%; height: 200px"
      swipeable auto-scroll overscrollable
    >
      <v-ons-carousel-item v-for='item in newcards' 
        :v-bind='item'
        :style="{backgroundColor: item.color}"
        >
        <div style="tex-align: center; font-size: 30px; margin-top: 20px; margin-left: 10px; color: #fff;">
          {{ item.title }}
        </div>
        <p style="margin-left: 10pt; margin-right: 10pt; color: #fff;">{{ item.detail }}</p>
      </v-ons-carousel-item>
    </v-ons-carousel>
    </v-ons-card>
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
          color: '#085078',
        },
        {
          title: 'ほげ',
          detail: 'hogehoge',
          path: 'detail-plan',
          color: '#373B44',
        },
      ],
      newcards: [
        {
          title: 'sawlowの遅漏体験',
          detail: '...',
          path: 'detail-plan',
          color: '#085078',
        },
        {
          title: 'ほげ2',
          detail: 'hogehoge',
          path: 'detail-plan',
          color: '#373B44',
        },
      ],
      carouselIndex: 0,
      dots: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#fff',
        position: 'absolute',
        bottom: '40px',
        left: 0,
        right: 0,
      },
    };
  },
};
</script>
