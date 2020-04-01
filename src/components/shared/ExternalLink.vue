<template>
  <a :href="href" target="_blank">
    <i class="fas fa-link text-2xl text-gray-500 hover:text-blue-500"></i>
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    href: {
      type: String,
      require: true,
    }
  }
}
</script>