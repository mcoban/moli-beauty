<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/catlak-tedavisi.jpg" alt="Çatlak Tedavisi">
        <div class="description">
          <h1>Çatlak Tedavisi</h1>
          <p>
            Çatlak, hızlı kilo artışı veya hızlı kilo kaybı durumlarında ortaya çıkabilmektedir. Derinin alt kısımlarında bulunan dokulardaki 
            gerilmeler çatlaklara yol açan durumlar arasında gösterilmektedir. Çatlak oluşumu; alt derilerdeki liflerin zarar görmesi ile 
            meydana geldiğinden rahatsız edici bir durum olarak değerlendirilir.
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
            font-size: 1.25rem;
          }
        }
      }
    }
  }
</style>