<template>
  <Layout>
    <div id="iletisim">
      <iframe class="harita" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.0507507347093!2d32.69286531569823!3d39.87310109644499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d338c79c64f175%3A0x79211ce7e9e546e8!2sProf.%20Dr.%20Ahmet%20Taner%20K%C4%B1%C5%9Flal%C4%B1%2C%202716.%20Cd.%20No%3A4%2C%2006810%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1580405134616!5m2!1str!2str" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="info">
      <div class="container">
        <h1>İletişim Bilgileirmiz</h1>
        <div class="contact">
          <h4>Prof Dr Ahmet Taner Kışlalı mahallesi 2716 cadde No:4 Çankaya/Ankara</h4>
          <h4><a class="tel" href="tel: 0850-304-6654">Telefon: 0850-304-6654</a></h4>
          <h4><a class="mail" href="mailto: info@molibeauty.com">info@molibeauty.com</a></h4>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'İletişim'
  }
}
</script>

<style lang="scss" scoped>
.info {
  .container {
    h1 {
      margin-bottom: 40px;
    }
    .contact {
      h4 {
        margin-top: 10px;
        font-size: 1.2rem;
        line-height: 1.6;
      }
      .tel, .mail {
        color: #444;
      }
    }
  }
}
</style>