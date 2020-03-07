<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/dudak/dudak-konturu.jpg" alt="Dudak Kontürü">
        <div class="description">
          <h1>Dudak Kontürü</h1>
          <p>
            Dudak kontürü, kişinin dudaklarına özel steril iğne kullanımı ile uygulanan, sadece dudağın dış çerçeve hattına yapılan kalıcı makyaj işlemidir. %100 doğal ve organik olduğu için içerisinde hiçbir kimyasal madde barındırmaz. 
          </p>
          <p>
            Kalıcılık süresi ortalama 2 – 3 yıl arasındadır.
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
        grid-template: 1fr / 4fr 6fr;
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