<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/lazer-epilasyon.jpg" alt="Lazer Epilasyon">
        <div class="description">
          <h1>Lazer Epilasyon</h1>
          <p>
            Lazer epilasyon, vücuttaki istenmeyen kılların köklerinin lazer ışınları ile yok edilmesi işlemidir. Lazer epilasyon acısız ve ağrısız bir işlemdir. Kişiye ve kıl tipine göre işlem süresi değişmektedir.
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
        grid-template: 1fr / 2fr 6fr;
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