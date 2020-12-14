<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :key="item" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'


export default {
    name: 'GoodsList',
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return ['a', 'b', 'c']
            }
        }
    }
}
</script>

<style>
    .goods{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>