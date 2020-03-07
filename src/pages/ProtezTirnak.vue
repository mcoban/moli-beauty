<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/protez-tirnak.jpeg" alt="Protez Tırnak">
        <div class="description">
          <h1>Protez Tırnak</h1>
          <p>
            Protez tırnak; akrilik tırnak, jel tırnak ve dipping tırnak gibi farklı çeşitleri bulunan; tırnaklar üzerine sürülen özel jeller yani koruyuculardan sonra tırnak ucuna plastik tırnakların yerleştirilmesi ile elde edilen ve oldukça kullanışlı olan bir tırnak türüdür. 
          </p>
          <p>
            Ortalama kullanım süresi 4 – 6 haftadır.
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