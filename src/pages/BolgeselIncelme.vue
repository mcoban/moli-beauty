<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/bolgesel-incelme.jpg" alt="Bölgesel İncelme">
        <div class="description">
          <h1>Bölgesel İncelme</h1>
          <p>
            Temelde bölgesel incelme bir kilo verme yöntemi değildir. Daha çok belli bölgelerde toplanmış, kilo kaybına rağmen vücudun bir çok bölgesinde katlanarak çoğalan yağ kütlelerinden kurtulma işlemidir. Bölgesel incelme vücudu şekillendirme ve bölgesel zayıflama uygulamasıdır.
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
        grid-template: 1fr / 3fr 6fr;
        grid-gap: 20px;

        .description {
          margin-top: 1.5rem;
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
</style>