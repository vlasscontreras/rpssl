<template>
  <header class="mt-4">
    <div class="border-2 border-header-outline rounded-xl | flex items-center justify-between | max-w-4xl | mx-auto | px-6 py-4 md:px-8 md:py-6 | text-white">
      <div class="text-xl sm:text-2xl uppercase heading">
        <div>Rock</div>
        <div>Paper</div>
        <div>Scissors</div>
        <div>Lizard</div>
        <div>Spock</div>
      </div>

      <div class="col">
        <Score score="12" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.heading {
  line-height: 1 !important;
}
</style>
