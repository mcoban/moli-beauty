<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kas/laminasyon4.jpeg" alt="Kaş Laminasyonu">
        <div class="description">
          <h1>Kaş Laminasyonu</h1>
          <p>
            Kaş Laminasyon uygulaması Microblading yaptırmak istemeyen veya bununla ilgili çekingenlik yaşayanlar için ideal bir yöntemdir. 
          </p>
          <img class="mt-20" src="../assets/images/kas/laminasyon-2.jpg" alt="Kaş Microblading">
          <p>
            Kaşımızın ortasından kuyruk yönü, önce yana sonra aşağı doğru olduğu için daha üzgün, yorgun ve mutsuz bir ifade görüntüsü sağlamaktadır. Kaş Laminasyonu yöntemi ile her zaman daha pozitif ve dinamik bir görünüm elde edersiniz. 
          </p>
          <img class="mt-20" src="../assets/images/kas/laminasyon-3.jpg" alt="Kaş Microblading">
          <p>
            Kaşlar yukarı doğru hacimlendirilir ve kaşın esas uzunluğu ortaya çıkar. Normalde ince görünen kaş bu uygulama ile kalın bir formda kendini gösterir. Kaş yukarı doğru sabitlendirilip lamine edilir. Vitamin uygulaması olduğundan kaşların sağlıklı uzaması sağlanır. 
          </p>
          <img class="mt-20" src="../assets/images/kas/laminasyon-4.jpg" alt="Kaş Microblading">
          <p>
            Kaş Laminasyon uygulaması ile hem bakım yapılır, hem yukarı doğru daha dinamik bir görüntü verilir, hem de kaşın zemini daha dolgun ve renkli görülür. 
          </p>
          <p>
            Kalıcılık süresi ortalama 6 – 8 hafta arasındadır. 
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