<template>
  <div id="maina">
    <div class="content">
      <router-view/>
    </div>
    <Tabs></Tabs>
  </div>
</template>

<script>
import Tabs from "./Tabs.vue"
export default {
  name: 'MyHome',
  data () {
    return {}
  },
  components:{Tabs}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#maina {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
