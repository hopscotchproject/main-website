<template>
  <div>
    <router-view name="nav-bar" class="w-full"/>
    <router-view/>
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