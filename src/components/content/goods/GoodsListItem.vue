<template>
  <div class="goods-item" @click="itemClick" :background="background">
      <div class="img" :style="getstyle">{{goodsItem}}</div>
      <p>商品名称</p>
      <p><span>$200.00</span><span>20</span></p>
  </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Number,
            default() {
                return 0
            }
        },
        background: {
            type:String,
            default() {
                return '#eee'
            }
        }
    },
    computed: {
        getstyle() {
            return {background:this.background}
        }
    },
    methods: {
        itemClick() {
            this.$router.push('/details/' + this.goodsItem)
        }
    }
}
</script>

<style scoped>
    .goods-item{
        margin-top: 15px;
        width: 48%;
        text-align: center;
        border: 1px solid #eee;
    }
    .img{
        width: 90%;
        height: 150px;
        /* background-color: #eeeeee; */
        margin-left: 5%;
    }
</style>