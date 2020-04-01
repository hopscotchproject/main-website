<template>
  <div class="flex flex-col justify-around my-48">
    <div class="font-extrabold text-4xl text-center">Shoot Your Shot!</div>
    <p class="text-gray-600 text-center md:text-lg">Let's launch your product with style.</p>
    <button 
      class="p-2 bg-blue-500 font-bold text-white rounded-full w-1/2 md:w-1/4 self-center mt-16"
      @click="sendEmail()"
    >
      Slide into Email
    </button>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  methods: {
    sendEmail() {
      window.location.href = "mailto:hopscotchprojectllc@gmail.com";
    }
  }
}
</script>
