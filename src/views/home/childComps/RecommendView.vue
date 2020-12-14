<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.id">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div class="title">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'RecommendedView',
        props: {
            recommends:{
                type: Array,
                dedault() {
                    return []
                }
            }
        }
    }
</script>

<style>
    .recommend{
        width: 100%;
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 30px 0;
        border-bottom: 8px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
    .recommend-item a{
        text-decoration: none;
    }
</style>