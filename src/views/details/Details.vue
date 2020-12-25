<template>
  <div id="detail">
      <detail-nav-bar />
      
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

import {getDetail} from 'network/details'
export default {
    name: 'Datails',
    components: {
        DetailNavBar
    },
    data() {
        return {
            id: 0
        }
    },
    created() {
        this.id = this.$route.params.id
        getDetail(this.id).then(res => {
            console.log(res)
        })
        
    },
    methods: {
        
    },
}
</script>

<style scoped>

</style>