<template>
  <div class="tab-control">
      <div class="tab-control-item" 
           v-for="(item,index) in titles" 
           :key="item"
           >
          <span :class="{active: currentIndex === index}"
           @click="itemClick(index)">{{item}}</span>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'TabControl',
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('tabClick', index)
            }
        }
    }
</script>

<style>
    .tab-control{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        text-align: center;
    }
    .tab-control-item{
        flex: 1;
    }

    .active{
        padding: 5px 5px;
        color: pink;
        border-bottom: 3px solid pink;
    }
</style>