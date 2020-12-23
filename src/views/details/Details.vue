<template>
  <div id="detail">
      <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
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
    },
    
}
</script>

<style>

</style>