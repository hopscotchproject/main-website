<template>
  <div class="flex flex-col justify-around my-48">
    <div class="font-extrabold text-4xl text-center my-8">Shoot Your Shot!</div>
    <p class="text-gray-600 text-center my-8">Let's launch your product with style!</p>
    <button 
      class="p-2 border-2 border-blue-400 bg-blue-400 font-bold text-white rounded w-1/2 md:w-1/4 self-center"
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
