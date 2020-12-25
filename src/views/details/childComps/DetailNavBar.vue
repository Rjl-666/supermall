<template>
  <nav-bar>
      <div class="back" slot="left" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
          <div class="title-item" 
               v-for="(item,index) in titles" 
               :key="index"
               :class="{active: currentIndex === index}"
               @click="titleItemClick(index)">
               {{item}}</div>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex:0
        }
    },
    methods: {
        titleItemClick(index){
            this.currentIndex = index
        },
        backClick() {
            this.$router.back()
        }
    }
}
</script>
<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: pink;
    }
    .back{
        margin-top: 12%;
    }
</style>
