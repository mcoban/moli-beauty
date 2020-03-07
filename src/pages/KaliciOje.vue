<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kalici-oje.jpg" alt="Kalıcı Oje">
        <div class="description">
          <h1>Kalıcı Oje</h1>
          <p>
            Kalıcı oje uygulaması; tırnak üzerinde uzun bir süre her hangi bir deformasyona uğramadan kalıcılığını muhafaza eden oje uygulamasıdır. Kalıcı oje tırnaklarınıza hava ve su geçmesini engellemediği için tırnaklarınıza zarar vermez ve sararma yapmaz.
          </p>
          <img class="mt-20" src="../assets/images/kalici-oje-2.jpg" alt="Kaş Microblading">
          <p>
            Kalıcı oje, tırnak üzerine bozulmadan kalır fakat tırnak uzadığı için yenilenmesi gerekmektedir.
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
      max-width: 800px;
      display: block;
      margin: auto;
      .container {
        margin: auto;
        display: grid;
        grid-template: 1fr / 1fr;
        grid-gap: 20px;
        
        img {
          width: 100%;
        }

        .description {
          p {
            font-size: 1.35rem;
          }
        }
      }
    }
  }
</style>