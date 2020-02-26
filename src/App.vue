<template>
  <div>
    <router-view name="nav-bar" class="fixed w-full"/>
    <router-view class="pt-12 md:pt-20"/>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
</style>