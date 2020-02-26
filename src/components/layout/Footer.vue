<template>
  <footer class="flex flex-col md:flex-row border-t mx-2">
    <div class="flex justify-center py-4">
      <img src="/img/logo.svg" class="h-12 md:h-16"/>
    </div>
    <div class="border-b py-4">
      <div class="text-center py-2">Hopscotch Project</div>
      <div class="text-sm text-center px-4">
        Provide personalized architecture solution with scalability and maintainability in mind
      </div>
    </div>
    <div class="border-b py-4">
      <div class="text-center py-2">Contact</div>
      <div class="text-sm text-center px-4">
        <a
          class="underline"
          href="mailto:hopscotchprojectllc@gmail.com">
          hopscotchprojectllc@gmail.com
        </a>
      </div>
    </div>
    <div class="pt-4 pb-12">
      <div class="text-center text-xs py-2">
        Copyright © 2020 Hopscotch Project LLC.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>