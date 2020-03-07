<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/nail-art.jpg" alt="Nail Art">
        <div class="description">
          <h1>Nail Art</h1>
          <p>
            Nail Art uygulaması, tırnakları boyamanın,  geliştirmenin ve süslemenin yaratıcı bir yoludur. Genellikle el ve ayak tırnaklarında yapılabilen bir sanat eseridir.
          </p>
          <p>
            Ortalama kullanım süresi 2 - 3 haftadır.
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