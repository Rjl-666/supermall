<template>
  <nav-bar>
      <div slot="center" class="title">
          <div class="title-item" v-for="item in titles" :key="item">{{item}}</div>
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
            titles: ['商品', '参数', '评论', '推荐']
        }
    }
}
</script>

<style>
    .title{
        display: flex;
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
</style>