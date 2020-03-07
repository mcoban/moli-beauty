<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kas/kas-pudralama.jpg" alt="Kaş Pudralama">
        <div class="description">
          <h1>Kaş Pudralama</h1>
          <p>
            Kaş pudralama tekniği, bitkisel boyalardan oluşan kalıcı makyaj boyası kullanılarak mikro iğneler yardımı ile derinin en üst tabakasına uygulanan bir işlemdir.
          </p>
          <img class="mt-20" src="../assets/images/kas/pudralama-2.jpg" alt="Kaş Pudralama">
          <p>
            Kaş kılları zayıf  ve seyrek olan kişilerin genellikle tercih ettiği doğal bir gölgelendirme tekniğidir.
          </p>
          <p>
            Kalıcılık süresi cilt tipine bağlı olarak 6 ay ile 2 yıl arasındadır.
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

        .description {
          p {
            font-size: 1.35rem;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>