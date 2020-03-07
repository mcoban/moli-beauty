<template>
  <div id="works">
    <div class="container">
      
      <div class="line three-columns">
        <h3 class="title">KAŞ</h3>
        <a href="/kas-pudralama/" class="work">
          <img src="../assets/images/kas/kas-pudralama.jpg" alt="Kaş Pudralama">
          <span class="title">Kaş <span class="hi">Pudralama</span></span>
        </a>
        <a href="/kas-microblading/" class="work">
          <img src="../assets/images/kas/microblading.jpg" alt="Kaş Microblading">
          <span class="title">Kaş <span class="hi">Microblading</span></span>
        </a>
        <a href="/kas-laminasyonu/" class="work">
          <img src="../assets/images/kas/laminasyon4.jpeg" alt="Kaş Laminasyonu">
          <span class="title">Kaş <span class="hi">Laminasyonu</span></span>
        </a>
      </div>

      <div class="line four-columns">
        <h3 class="title">TIRNAK</h3>
        <a href="/protez-tirnak/" class="work">
          <img src="../assets/images/protez-tirnak.jpeg" alt="Protez Tırnak">
          <span class="title">Protez <span class="hi">Tırnak</span></span>
        </a>
        <a href="/kalici-oje/" class="work">
          <img src="../assets/images/kalici-oje.jpg" alt="Kalıcı Oje">
          <span class="title">Kalıcı <span class="hi">Oje</span></span>
        </a>
        <a href="/nail-art/" class="work">
          <img src="../assets/images/nail-art.jpg" alt="Nail Art">
          <span class="title">Nail <span class="hi">Art</span></span>
        </a>
        <a href="/manikur-pedikur/" class="work">
          <img src="../assets/images/manikur-pedikur.jpg" alt="Manikür Pedikür">
          <span class="title">Manikür <span class="hi">Pedikür</span></span>
        </a>
      </div>


      <div class="line four-columns">
        <h3 class="title">KİRPİK</h3>
        <a href="/kirpik-lifting/" class="work">
          <img src="../assets/images/kirpik/ipek-kirpik1.jpeg" alt="Kirpik Lifting">
          <span class="title">Kirpik <span class="hi">Lifting</span></span>
        </a>
        <a href="/kirpik-laminasyonu/" class="work">
          <img src="../assets/images/kirpik/kirpik-laminasyon.jpg" alt="Kirpik Laminasyonu">
          <span class="title">Kirpik <span class="hi">Laminasyonu</span></span>
        </a>
        <a href="/kirpik-dipliner/" class="work">
          <img src="../assets/images/kirpik/dipliner.jpeg" alt="Kirpik Dipliner">
          <span class="title">Kirpik <span class="hi">Dipliner</span></span>
        </a>
        <a href="/ipek-kirpik/" class="work">
          <img src="../assets/images/kirpik/lifting1.jpeg" alt="İpek Kirpik">
          <span class="title">İpek <span class="hi">Kirpik</span></span>
        </a>
      </div>

      <div class="line two-columns">
        <h3 class="title">DUDAK</h3>
        <a href="/dudak-konturu/" class="work">
          <img src="../assets/images/dudak/dudak-konturu.jpg" alt="Dudak Kontürü">
          <span class="title">Dudak <span class="hi">Kontürü</span></span>
        </a>
        <a href="/dudak-renklendirme/" class="work">
          <img src="../assets/images/dudak/renklendirme1.jpeg" alt="Dudak Renklendirme">
          <span class="title">Dudak <span class="hi">Renklendirme</span></span>
        </a>
      </div>

      <div class="line four-columns">
        <h3 class="title">ESTETİK</h3>
        <a href="/cilt-bakimi/" class="work">
          <img src="../assets/images/cilt-bakim.jpg" alt="Cilt Bakım">
          <span class="title">Cilt <span class="hi">Bakım</span></span>
        </a>
        <a href="/bolgesel-incelme/" class="work">
          <img src="../assets/images/bolgesel-incelme.jpg" alt="Bölgesel İncelme">
          <span class="title">Bölgesel <span class="hi">İncelme</span></span>
        </a>
        <a href="/lazer-epilasyon/" class="work">
          <img src="../assets/images/lazer-epilasyon.jpg" alt="Lazer Epilasyon">
          <span class="title">Lazer <span class="hi">Epilasyon</span></span>
        </a>
        <a href="/catlak-tedavisi/" class="work">
          <img src="../assets/images/catlak-tedavisi.jpg" alt="Çatlak Tedavisi">
          <span class="title">Çatlak <span class="hi">Tedavisi</span></span>
        </a>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
#works {
  background: #f9e8dc;
  .container {
    grid-template: 1fr / 1fr 1fr;
    box-sizing: border-box;
    .line {
      display: grid;
      grid-gap: 1rem;
      margin-bottom: 2rem;

      & > .title {
        font-size: 1.4rem;
        text-align: center;
        margin-top: .5rem;
        grid-column: 1 / -1;
        font-family: 'Quicksand', sans-serif;
        font-weight: 100;
        color: #d4b9a6;
      }
      .work {
        display: block;
        img {
          width: 100%;
          object-fit: cover;
          height: 240px;
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
          font-size: 1.1rem;
          line-height: 1.3;
          .hi {
            color: #eba573;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      .line {
        &.two-columns {
          grid-template: 1fr / 1fr 1fr;
        }
        &.three-columns {
          grid-template: 1fr / repeat(3, 1fr);
        }
        &.four-columns {
          grid-template: 1fr / repeat(4, 1fr);
          span.hi {
            display: block;
          }
        }

        .work {
          img {
            height: 250px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .container {
      max-width: 960px;
      .work {
        img {
          height: 300px;
        }
      }
    }
  }

}
</style>