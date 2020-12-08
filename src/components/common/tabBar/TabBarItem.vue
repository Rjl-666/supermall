<template>
  <div class="tabbar-item" @click="itemClick">
      <div v-if="!isActive">
          <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    itemClick() {
      if(this.path == '/me'){
        this.$router.push({
        path:this.path,
        query:{
          name: 'rjl',
          age: 18,
          height: '180cm'
        }
        }).catch(res => {})
      }else{
        
        this.$router.push(this.path).catch(res => {})
      }
      
    }
  },
  computed: {
    isActive() {
      // console.log(this.$route.path.indexOf(this.path));
      // console.log(this.$route.path.indexOf(this.path) !== -1);
       return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>
.tabbar-item{
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: -1px;
}
</style>