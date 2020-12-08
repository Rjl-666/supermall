<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.tabbar{
    width: 100%;
    height: 49px;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f6f6f6;
}
</style>