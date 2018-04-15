<style lang='scss' scoped>
.page-title {
  text-align: center;
}
.body {
  margin-top: 50px;
}
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
    <v-ons-card>
    <div align="center">
      <h3>My Page</h3>
      <img src="../../assets/noimage.jpeg">
      <b><p>{{userInfo.userName}}</p></b>
      <p>user ID: {{userInfo.userID}}</p>
    </div>
    </v-ons-card>

  </v-ons-page>

</template>


<script>
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import Navbar from '../../components/navbar/Navbar';

export default{
  name: 'user-page',
  components: {
    LoadingIndicator,
    Navbar,
  },
  data() {
    return {
      userInfo: {
        userName: '',
        userID: '',
      },
    };
  },
};
</script>
