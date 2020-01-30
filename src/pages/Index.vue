<template>
  <Layout>
    <Hero />
    <div class="slogan black">
      <div class="container">
        <h3>Hizmetler</h3>
        <p>
          Cilt Bakımından, Lazer epilasyona, bölgesel incelmeden tırnak sanatına (nail art) ' ına kadar bir çok alanda hizmet vermekteyiz.
        </p>
      </div>
    </div>
    <Works />
    <div class="home-offers">
      <div class="container">
        <div class="offer">
          <img src="../assets/images/icons/fresh.svg" alt="Organik" height="72">
          <h4>100% ORGANİK ve DOĞAL</h4>
          <span>Kullandığımız tüm ürünler %100 organik ve doğal ürünlerdir.</span>
        </div>
        <div class="offer">
          <img src="../assets/images/icons/award.svg" alt="Sertifika" height="72">
          <h4>SERTİFİKALI MAKYÖZ</h4>
          <span>Makyözlerimiz, alanlarında uzmanlığını kanıtlamış sertifikalıdır.</span>
        </div>
        <div class="offer">
          <img src="../assets/images/icons/gift.svg" alt="Kullandıkça Kazan." height="72">
          <h4>KULLANDIKÇA KAZAN</h4>
          <span>Moli ile güzelleştikçe puan kazanın, biriken puanlarınızla özel fırsatlardan faydalanın.</span>
        </div>
      </div>
    </div>
    <Brands />
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Works from '~/components/Works.vue'
import Brands from '~/components/Brands.vue'
export default {
  components: {
    Hero,
    Works,
    Brands
  },
  metaInfo: {
    title: 'Moli Güzellik Merkezi'
  }
}
</script>
