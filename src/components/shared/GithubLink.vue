<template>
  <a :href="href" target="_blank">
    <i class="fab fa-github text-2xl text-gray-500 hover:text-black"></i>
  </a>
</template>

<script>
export default {
  name: 'GithubLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>