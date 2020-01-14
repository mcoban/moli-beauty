<template>
  <Layout>
    <Hero />
    <div class="slogan black">
      <div class="container">
        <h3>Profesional Makeup</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium sit debitis nisi? Provident quos harum quod, rem id autem, temporibus, sed aperiam ad dolor ex eius laudantium dicta accusamus?</p>
      </div>
    </div>
    <Works />
    <div class="home-offers">
      <div class="container">
        <div class="offer">
          <img src="../assets/images/icons/fresh.svg" alt="Organik" height="72">
          <h4>100% ORGANİK</h4>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="offer">
          <img src="../assets/images/icons/award.svg" alt="Sertifika" height="72">
          <h4>SERTİFİKALI MAKYÖZ</h4>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="offer">
          <img src="../assets/images/icons/gift.svg" alt="Kullandıkça Kazan." height="72">
          <h4>KULLANDIKÇA KAZAN</h4>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
    </div>
    <Brands />
    <Footer />
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
    title: 'Hello, world!'
  }
}
</script>
