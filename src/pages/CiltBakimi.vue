<template>
  <Layout>
    <div class="cover">
      <div class="container">
        <img src="../assets/images/cilt-bakim.jpg" alt="Cilt Bakım">
        <div class="description">
          <h1>Cilt Bakım</h1>
          <p>
            Estetik kaygıların dışında sağlık için önemli olan cilt bakımı, cilt problemlerine yol açabilecek durumları ortadan kaldırmak, cilt problemlerinin son bulmasını sağlamak için yapılır. Sağlıklı bir cildinizin olması, ona iyi bakmanız ile mümkündür.Bunun için  siyah nokta ya da sivilce kontrolü en iyi şekilde yapılmalıdır.
          </p>
          <img class="mt-20" src="../assets/images/cilt-bakim/cilt-bakimi-2.jpg" alt="Cilt Bakımı">
          <p>
            Cilt Bakımı ile pek çok cilt probleminize kısa sürede etkili çözümler sunabiliriz. Cildin tazeliğini korumak için cilt bakımı yapılmalıdır. Düzenli şeklide cilt bakımını yapan kişilerin sorunsuz bir cildi olacağını söyleyebiliriz. 
          </p>
          <h2>Cilt Bakımı Nedenleri</h2>
          <p>
            <ul class="list">
              <li>1. Ciltte oluşan aknelerin giderilmesi için cilt bakımı yapılması şarttır.</li>
              <li>2. Cilt gözeneklerinizin sıklaşması için de bakım gerekecektir.</li>
              <li>3. Doğum, çevresel faktörler gibi nedenler ötürü ciltte deformasyonlar olabilir. Giderilmesi ise doğru bir cilt bakımı ile olacaktır.</li>
              <li>4. Ciltte renk eşitliğinin sağlanması için de cilt bakımı yapılabilir.</li>
            </ul>
          </p>
          <img class="mt-20" src="../assets/images/cilt-bakim/cilt-bakimi-3.jpg" alt="Cilt Bakımı">
          <p>
            Cilt bakımı, sağlıklı bir cilde sahip olmak, hiçbir şekilde cildinizi kamufle etmeden rahatça hareket etmenizi sağlar. Sağlıklı bir cilde sahip olmak, vücudunuzun da sağlıklı olduğunun en önemli göstergesidir. 
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
      h2 {
        font-size: 1.65rem;
        margin-top: 1rem;
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
  ul.list {
    list-style-type: square;
    li {
      display: block;
      font-size: 1.1rem;
      margin-bottom: .75rem;
      padding-left: 10px;
    }
  }
</style>