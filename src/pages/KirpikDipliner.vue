<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kirpik/dipliner.jpeg" alt="Kirpik Dipliner">
        <div class="description">
          <h1>Kirpik Dipliner</h1>
          <p>
            Kirpik Dipliner uygulaması en az kalıcı eyeliner kadar tercih edilen, kirpik hattına ya da daha doğru bir deyişle kirpik hattının bittiği ve göz kapağının başladığı bölgeye uygulanan, kalıcı bir göz makyajı tekniğidir.
          </p>
          <img class="mt-20" src="../assets/images/kirpik/dipliner-2.jpg" alt="Kirpik Dipliner">
          <p>
            Kalıcı dipliner, özel kalıcı makyaj kalemleri ve kalıcı makyaj boyaları kullanılarak yapılan bir uygulama olup tamamen organik boya pigmentlerinin deri altına enjekte edilmesi ile oluşan bir yüz estetiği uygulamasıdır. 
          </p>
          <p>
            Kalıcılık süresi ortalama 1 – 1.5 yıl arasıdır.
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