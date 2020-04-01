<template>
  <div class="flex items-center">
    <span class="h-10 w-10 md:h-16 md:w-16 flex-none">
      <slot/>
    </span>
    <span class="flex flex-col ml-4">
      <span class="font-bold flex-shrink md:text-lg">{{name}}</span>
      <span class="uppercase text-gray-600 text-sm md:text-base whitespace-normal">{{type}}</span>
    </span>
  </div>
</template>

<script>
/**
 * Technology card
 */
export default {
  name: 'TechCard',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>