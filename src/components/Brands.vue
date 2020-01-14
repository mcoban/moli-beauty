<template>
  <div id="brands">
    <div class="container">
      <div class="brand"><img src="http://sana.like-themes.com/wp-content/uploads/2019/01/partner-1.png" alt=""></div>
      <div class="brand"><img src="http://sana.like-themes.com/wp-content/uploads/2019/01/partner-2.png" alt=""></div>
      <div class="brand"><img src="http://sana.like-themes.com/wp-content/uploads/2019/01/partner-3.png" alt=""></div>
      <div class="brand"><img src="http://sana.like-themes.com/wp-content/uploads/2019/01/partner-4.png" alt=""></div>
      <div class="brand"><img src="http://sana.like-themes.com/wp-content/uploads/2019/01/partner-5-125x42.png" alt=""></div>
      <div class="brand"><img src="http://sana.like-themes.com/wp-content/uploads/2019/01/partner-6.png" alt=""></div>
    </div>
  </div>
</template>

<style lang="scss">
#brands {
  background: #f9e8dc;
  .container {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    .brand {
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 90px;
      }
    }
  }
}
</style>