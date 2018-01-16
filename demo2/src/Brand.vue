<template>
  <div>
      <router-link :to="{path:'/brand/HelloWorld'}">Brand</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "brand"
};
</script>

<style>
span {
  color: blue;
}
</style>
