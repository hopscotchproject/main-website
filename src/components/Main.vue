<template>
  <div class="">
    <div class="p-6 md:px-24 md:pt-16 md:pb-12">
      <div class="py-2 text-gray-600 md:text-2xl font-bold">Hopscotch Project</div>
      <div class="py-2 text-xl md:text-3xl font-bold">Personalized Solution Architecture and Fast Prototyping</div>
      <div class="py-2 md:text-xl text-gray-600">Bootstrap your product with minimal cost, low operational burden and high scalability</div>
      <div class="flex justify-center mt-8 md:mt-12">
        <router-link to="/portfolio" class="px-8 py-3 md:text-lg self-center rounded-full bg-blue-500 font-bold text-white">see portfolio</router-link>
      </div>
    </div>
    <hr class="m-6 md:mx-24"/>
    <div class="p-6 md:px-24">
      <div class="text-xl md:text-2xl font-semibold">Technologies</div>
      <div class="flex flex-wrap">
        <tech-card
          v-for="{ name, type, imageUrl } in techCards"
          v-bind:key="`${name}-${type}`"
          class="px-1 py-4 md:p-2 w-1/2 md:w-1/4"
          :name="name"
          :type="type"
        >
          <img v-if="!!imageUrl" :src="imageUrl" class="self-center"/>
        </tech-card>
      </div>
    </div>
  </div>
</template>

<script>
import TechCard from './shared/TechCard'
import { techCards } from '../data/techCards'

export default {
  name: 'Main',
  components: {
    'tech-card': TechCard
  },
  data: () => ({
    techCards,
  })
}
</script>

<style scoped>

</style>
