<template>
  <header class="px-6 lg:px-16 py-2 lg:py-2 bg-white flex flex-wrap items-center">
    <div class="flex flex-1 justify-between items-center">
      <router-link to="/" class="w-6/12 md:w-3/12">
        <img src="/img/name.svg"/>
      </router-link>
    </div>
    <label for="menu-toggle" class="pointer-cursor lg:hidden block">
      <img src="/img/hamburger.svg"/>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle"/>
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li><router-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/portfolio">Portfolio</router-link></li>
          <li><router-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/contacts">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>>
