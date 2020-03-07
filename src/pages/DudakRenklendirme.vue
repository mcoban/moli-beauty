<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/dudak/renklendirme1.jpeg" alt="Dudak Renklendirme">
        <div class="description">
          <h1>Dudak Renklendirme</h1>
          <p>
            Dudak renklendirme; zamanla solan ve çerçeve hattı kaybolan dudakları canlı, parlak ve dolgun bir görünüme kavuşturan işlemdir. Kişinin tercih ettiği tüm renkler uygulanabilir.
          </p>
          <p>
            Ortalama kalıcılık süresi 1.5 – 3 yıl arasındadır.
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