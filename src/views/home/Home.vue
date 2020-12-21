<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <div class="wrapper">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control 
                  :class="{fixed:aa}" 
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl"
                  
                  />
      <!-- <goods-list :goods="goods[type].list"/> -->
      <goods-list :goods="showGoods" :background="background"/>
      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getHomeMultiData, getHomeGoods} from 'network/home'

  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  

  // 注册插件
  BScroll.use(Pullup)


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []},
        },
        currentType:'pop',
        background: '#eee',
        topOffsetTop:0,
        aa:false
      }
    },
    created() {
      this.getHomeMultiData(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell'),
      this.getData()
    },
    methods: {
      /* 
        事件监听
      */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            this.background = '#eee'
            break
          case 1:
            this.currentType = 'new'
            this.background = 'yellow'
            break
          case 2:
            this.currentType = 'sell'
            this.background = 'green'
            break
        }
      },
      swiperImageLoad() {
        // console.log('-------------')
        // console.log(this.$refs.tabControl.$el.offsetTop)
        this.topOffsetTop = this.$refs.tabControl.$el.offsetTop - 44
      },
      tabScroll() {
        document.addEventListener('scroll',() => {
        //  console.log(window.pageYOffset)
        // console.log(window.scrollTop)
        // console.log(document.documentElement.scrollTop)
        // console.log(document.documentElement.scrollTop)
         this.aa = window.pageYOffset >= this.topOffsetTop ? true : false

         let pmHeight = document.documentElement.clientHeight
         let zsHeight = document.documentElement.scrollHeight
         let py = document.documentElement.scrollTop
          if(pmHeight + py == zsHeight){
            console.log('到底了')
          }
            console.log(pmHeight)
        console.log(zsHeight)
        console.log(py)
      })},
      /* 
        网络请求
      */
      getData() {
                axios.get('data.json').then(res => {
                    console.log(res);
                }, res => {
                    console.log("error");
                });
      },
      getHomeMultiData() {
        getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res)
          // this.goods[type].list.push(...res.data)
          this.goods[type].page + 1
        })
      }, 
    },
    computed: {
      showGoods() {
        let arr = []
        for(let i=1; i<=30; i++){
          arr.push(i)
        }
        return arr
      }
    },
    mounted() {
      this.tabScroll()

      // document.addEventListener('scroll',() => {
        
      
      
      // })
      
      
    },
  }
</script>

<style>
  #home{
    position: relative;
    padding-top: 44px;
  }
  .home-nav{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: rgb(255,142,152);
    color: #fff;
  }
  .wrapper{
    padding-bottom:49px ;
    /* width: 100%;
    height: calc(100vh - 44px - 49px);
    position: fixed;
    top: 44px;
    overflow: scroll; */
  }
  .fixed{
    position: fixed;
    top: 44px;
    background-color:#fff ;
    z-index: 10;
  }
</style>