<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kirpik/lifting1.jpeg" alt="İpek Kirpik">
        <div class="description">
          <h1>İpek Kirpik</h1>
          <p>
            İpek kirpik uygulaması, kirpiklerin uzun ve gür durmasını sağlayan bir yöntemdir. İpekten hazırlanmış olan bu takma ipek kirpikler, üst göz kapağındaki gerçek kirpiklere tek tek özel medikal yapıştırıcısı ile yapıştırılmaktadır.
          </p>
          <img class="mt-20" src="../assets/images/kirpik/ipek-2.jpg" alt="Kirpik Dipliner">
          <p>
            İpek kirpikler gerçek kirpik yapısına en fazla benzeyen ipekten yapıldığı için doğal bir görünüm sağlamaktadır. 
          </p>
          <p>
            Kalıcılık süresi bakıma bağlı olarak ortalama 2 – 3 aydır.
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