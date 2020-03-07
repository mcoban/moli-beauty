<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>