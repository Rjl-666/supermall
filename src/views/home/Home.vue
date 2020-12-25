<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

      <div class="wrapper" ref="gundong">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control 
                  :class="{fixed:aa}" 
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl"
                  />
      <goods-list :goods="goods[currentType].list" :background="background"/>
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
    destroyed() {
      console.log('home销毁了')
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
        aa:false,
        pageY:'',
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

         let pmHeight = document.documentElement.clientHeight    // 页面高度
         let zsHeight = document.documentElement.scrollHeight    // 真实内容高度
         let py = document.documentElement.scrollTop             // 偏移值（滚动距离）
         this.pageY = py
          if(pmHeight + py >= zsHeight - 1){
            // console.log('到底了')
            this.goods[this.currentType].page+1
            // console.log(this.goods[this.currentType].page+1)
            // console.log(this.goods)
            this.getHomeGoods(this.currentType)
          }
        // console.log(pmHeight)
        // console.log(zsHeight)
        // console.log('偏移'+py)
        // console.log('pageY'+this.pageY)
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
          console.log(res)
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
          // console.log('aaaaaaaaaaa')
        })
      },
      getHomeGoods(type) {
        this.goods[type].page += 1
        for(let i=this.goods[type].list.length+1; i<=30*(this.goods[type].page); i++){
          this.goods[type].list.push(i)
        }

        // let page = this.goods[type].page + 1
        // getHomeGoods(type, page).then(res => {
        //   console.log(res)
        //   // this.goods[type].list.push(...res.data)
        //   this.goods[type].page + 1
        // })
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
    },
    activated() {
      // console.log(this.saveY)
      window.scrollTo(0,this.saveY)
      // this.$refs.gundong.scrollTo(this.saveY)
      // console.log(this.$refs.gundong)
    },
    deactivated() {
      this.saveY = this.pageY
      // console.log(this.pageY)
    },
  }
</script>

<style scoped>
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