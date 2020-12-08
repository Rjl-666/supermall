<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'

  import {getHomeMultiData} from 'network/home'
  
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        console.log(this.banners);
      })
    },
  }
</script>

<style>
  .home-nav{
    background-color: rgb(255,142,152);
    color: #fff;
  }
</style>