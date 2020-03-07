<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/kas/microblading.jpg" alt="Kaş Microblading">
        <div class="description">
          <h1>Kaş Microblading</h1>
          <p>
            Microblading uygulaması, kaş yapımında Dünya’da son nokta olan bir tekniktir. Bu teknik temelde altın oran ile birlikte yapıldığı zaman muhteşem sonuçlar ortaya çıkartan bir yöntemdir.
          </p>
          <img class="mt-20" src="../assets/images/kas/microblading-2.jpg" alt="Kaş Microblading">
          <p>
            <strong>Altın oran nedir?</strong> Kaşı yapmadan önce o kaşın yüz hatlarına uygun olacak şekilde kaşı tam oranlamak adına yapılan işlemin adıdır. 
          </p>
          <img class="mt-20" src="../assets/images/kas/microblading-3.jpg" alt="Kaş Microblading">
          <p>
            Microblading 3D kıl tekniği, kaşı olan olmayan kaşı ile problem yaşayan herkese uygulanabilecek bir yöntemdir. Kaşında simetri bozukluğu olan, kaşında boşluk olan ya da kaşı hiç olmayanlar bu yöntemi tercih ederler. 
          </p>
          <img class="mt-20" src="../assets/images/kas/microblading-4.jpg" alt="Kaş Microblading">
          <p>
            Microblading uygulaması diğer kalıcı makyaj işlemleri ile karıştırılmamalıdır. Bu uygulama manuel yapılır ve asla makine kullanılmaz. Malzemesi ve yöntemi çok farklı olup daha doğal bir görünüm sağlar.
          </p>
          <p>
            Kalıcılık süresi kişinin cilt yapısına göre değişmekle birlikte ortalama 1 - 1.5 yıldır.
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