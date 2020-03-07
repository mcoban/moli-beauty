<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kirpik/kirpik-laminasyon.jpg" alt="Kirpik Laminasyonu">
        <div class="description">
          <h1>Kirpik Laminasyonu</h1>
          <p>
            Kirpik laminasyonu, daha iri göz görünümü, kalınlaşmış, sıklaşmış kirpik ve kalkmış göz kapakları etkisi sağlayan bir yöntemdir. Pigment, keratin ve vitamin takviyeleriyle yapılan kirpik gerdirme işlemidir. 
          </p>
          <p>
            Kirpiklerinize 2 - 3 ay süre ile uzunluk, kıvrım ve dolgunluk sağlar. 
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Cilt Bakım'
  }
}
</script>

<style lang="scss" scoped>
  .cover {
    .container {
      h1 {
        font-size: 2.25rem;
        margin-top: .75rem;
      }
      p {
        margin-top: 20px;
      }
    }

    @media screen and (min-width: 768px) {
      max-width: 1200px;
      display: block;
      margin: auto;
      .container {
        margin: auto;
        display: grid;
        grid-template: 1fr / 5fr 6fr;
        grid-gap: 20px;

        .description {
          p {
            font-size: 1.35rem;
          }
        }
      }
    }
  }
</style>