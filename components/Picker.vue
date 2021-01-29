<template>
  <div class="picker text-center px-10 py-16 relative max-w-md mx-auto my-12">
    <Pentagon class="mx-auto max-w-full" />

    <div class="shape-wrapper absolute">
      <Shape type="scissors" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape type="spock" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape type="paper" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape type="lizard" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape type="rock" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.picker {
  .shape-wrapper {
    &:nth-child(2) {
      top: 0%;
      left: 50%;
      transform: translateX(-50%);
    }

    &:nth-child(3),
    &:nth-child(4) {
      top: 27%;
    }

    &:nth-child(3) {
      left: 0;
    }

    &:nth-child(4) {
      right: 0;
    }

    &:nth-child(5),
    &:nth-child(6) {
      bottom: 0%;
    }

    &:nth-child(5) {
      left: 7%;
    }

    &:nth-child(6) {
      right: 7%;
    }
  }
}
</style>
