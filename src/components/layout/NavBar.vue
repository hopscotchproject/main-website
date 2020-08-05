<template>
  <header class="flex flex-col md:flex-row py-4 md:pt-12">
    <div class="flex w-full">
      <router-link to="/" class="w-6/12 pl-4 lg:w-4/12 md:pl-24 self-center">
        <logo id="logo"/>
      </router-link>
      <div class="flex flex-row-reverse flex-grow md:hidden">
        <label for="menu-toggle" class="px-4 md:pointer-cursor block self-center float-right">
          <i class="fas fa-bars text-lg"></i>
        </label>
      </div>
    </div>
    <input class="hidden" type="checkbox" id="menu-toggle" v-model="checked"/>
    <div class="hidden md:flex md:items-center md:w-auto md:pr-8 border-b md:border-none" id="menu">
      <nav>
        <ul class="md:flex items-center justify-between text-base text-gray-700 px-4 pt-4 md:pt-0">
          <li @click="checked = false"><router-link class="text-center md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/portfolio">Portfolio</router-link></li>
          <li @click="checked = false"><router-link class="text-center md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/contacts">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../svg/Logo'
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'NavBar',
  components: {
    logo: Logo,
  },
  data: () => ({
    checked: false
  }),
  mounted() {
    // anime colored circle in logo
    anime({
      targets: "circle.cls-2",
      translateY: -15,
      direction: 'alternate',
      duration: 250,
      loop: true,
      easing: 'easeInOutQuad',
      autoplay: true,
      delay: 2000,
    })
  }
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}

#logo {
  overflow: visible;
}
</style>>
