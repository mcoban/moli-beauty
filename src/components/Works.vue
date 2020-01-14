<template>
  <div id="works">
    <div class="container">
      <a href="#" class="work">
        <img src="../assets/images/cilt-bakim.jpg" alt="Cilt Bakım">
        <span class="title">Cilt <span class="hi">Bakımı</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/lazer-epilasyon.jpg" alt="Lazer Epilasyon" >
        <span class="title">Lazer <span class="hi">Epilasyon</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/kalici-makyaj.jpg" alt="Kalıcı Makyaj">
        <span class="title">Kalıcı <span class="hi">Makyaj</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/manikur-pedikur.jpg" alt="Manikür Pedikür">
        <span class="title">Manikür <span class="hi">Pedikür</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/bolgesel-incelme.jpg" alt="Bölgesel İncelme">
        <span class="title">Bölgesel <span class="hi">İncelme</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/catlak-tedavisi.jpg" alt="Çatlak Tedavisi">
        <span class="title">Çatlak <span class="hi">Tedavisi</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/nail-art.jpg" alt="Nail Art">
        <span class="title">Nail <span class="hi">Art</span></span>
      </a>
      <a href="#" class="work">
        <img src="../assets/images/lazer-kas.jpg" alt="Lazer Kaş">
        <span class="title">Lazer <span class="hi">Kaş</span></span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
#works {
  background: #f9e8dc;
  .container {
    padding: 2rem;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-gap: 1.5rem;
    .work {
      img {
        width: 100%;
        object-fit: cover;
        height: 210px;
        display: block;
        transition: ease all .3s;

        &:hover {
          opacity: .7;
        }
      }
      span.title {
        background: #13363B;
        color: #fff;
        text-align: center;
        padding: 1rem 2rem;
        display: block;
        font-size: 1.4rem;
        line-height: 1.3;
        .hi {
          color: #eba573;
        }
      }
    }
  }
}
</style>