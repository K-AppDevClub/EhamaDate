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
        <v-ons-list-item v-for='region in regions' :v-bind='region.name' @click="goRegion">
          {{region.name}}
        </v-ons-list-item>
    </v-ons-list>
    <v-ons-list-header>話題のデート体験記</v-ons-list-header>
    <v-ons-carousel style="width: 100%; height: 200px" swipeable auto-scroll overscrollable >
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
    <v-ons-fab @click="goCreate" position="bottom right" >
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </div>
  </v-ons-page>
</template>

<script>
// import axios from 'axios';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import CreatePlan from '../../pages/create-plan/CreatePlan';
import RegionPage from '../../pages/region/Region';
import Navbar from '../../components/navbar/Navbar';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    Navbar,
  },
  methods: {
    goCreate() {
      this.$emit('push-page', {
        extends: CreatePlan,
        onsNavigatorProps: {
          msg: 42,
        }
      })
    },
    goRegion() {
      this.$emit('push-page', RegionPage)
    }
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
          title: 'sawlowの遅漏体験',
          detail: '...',
          path: 'detail-plan',
          color: '#085078',
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
