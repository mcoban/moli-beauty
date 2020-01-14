<template>
  <div id="hero">
    <div class="images">
      <div class="image"><img src="http://sana.like-themes.com/wp-content/uploads/2017/07/slide_make_03.jpg" alt="Resim1" /></div>
      <div class="image"><img src="http://sana.like-themes.com/wp-content/uploads/2017/07/slide_make_04.jpg" alt="Resim2" /></div>
    </div>
    <div class="content">
      <div class="inner">
        <h3>Profesyonel Makyaj</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aspernatur.</p>
        <a class="button">Read More</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hero {
  background: #f9e8dc;
  box-sizing: border-box;
  padding: 3rem;
  min-height: calc(100vh - 150px);
  display: grid;
  grid-gap: 1rem;
  grid-template: 5fr 5fr / 1fr;

  .content {
    text-align: center;
    h3 {
      font-size: 2.75rem;
      font-weight: 100;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.47;
      margin-bottom: 2rem;
    }
  }

  .images {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-column: 1 / 2;
    grid-gap: 1rem;
    .image {
      text-align: center;
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>