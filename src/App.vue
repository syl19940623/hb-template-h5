<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less">
  // transition动画
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(30px);
    opacity: 0;
  }
</style>
