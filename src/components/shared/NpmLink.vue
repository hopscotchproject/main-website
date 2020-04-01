<template>
  <a :href="href" target="_blank">
    <i class="fab fa-npm text-2xl text-gray-500 hover:text-red-600"></i>
  </a>
</template>

<script>
export default {
  name: 'NpmLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>