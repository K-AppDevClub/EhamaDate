<style lang='scss' scoped>
.page-title {
  text-align: center;
}
.body {
  margin-top: 100px;
}
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
  <div class='page-content'>
    <v-ons-list> 
    <v-ons-list-header>
      <img src="../../assets/love.jpeg" width="12" height="12">
      デートプランを探す
    </v-ons-list-header>
        <v-ons-list-item v-for='region in regions' @click="$router.push({ name: region.url});">
          {{region.name}}
        </v-ons-list-item>
    </v-ons-list>
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
          url: 'posts',
        },
        {
          name: 'プランで探す',
          url: 'home',
        },
      ],
    };
  },
};
</script>
