<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kirpik/ipek-kirpik1.jpeg" alt="Kirpik Lifting">
        <div class="description">
          <h1>Kirpik Lifting</h1>
          <p>
            Kirpik lifting, kirpiklerin belirli bir süre boyunca daha uzun ve hacimli görünmesini sağlayan bir bakım işlemidir. Sadece doğal kirpiklerin köklerine uygulanan bu uygulama keratin bakımı olarak da bilinmektedir.
          </p>
          <img class="mt-20" src="../assets/images/kirpik/lifting-1.jpg" alt="Kirpik Lifting">
          <p>
            Özellikle seyrek ve hacimsiz görünen kirpiklerin yapısını değiştirmek için bu uygulamayı tercih edebilirsiniz.
          </p>
          <p>
            Kirpiklerinize 2 - 3 ay süre ile uzunluk, kıvrım ve dolgunluk sağlar. 
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