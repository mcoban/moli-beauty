<template>
  <footer>
    <div class="container">
      <div class="item">
        <img src="../assets/images/footer-logo.png" alt="Logo">

        <div class="social-icons">
          <a href="https://www.facebook.com/molibeautycenter/" target="_blank"><img src="../assets/images/icons/social/facebook.svg" alt="Facebook" height="30"></a>
          <a href="https://www.youtube.com/channel/UCoioyPmOo_CVxiYb2u8f1Rw" target="_blank"><img src="../assets/images/icons/social/youtube.svg" alt="Youtube" height="30"></a>
          <a href="https://www.instagram.com/molibeautycenter/" target="_blank"><img src="../assets/images/icons/social/instagram.svg" alt="Instagram" height="30"></a>
        </div>
      </div>
      <div class="item contact">
        <h4 class="title">İletişim Bilgilerimiz</h4>
        <div class="address">
          <div class="line">
            <img src="../assets/images/icons/pin.svg" alt="adres" height="20">
            <span>Prof Dr Ahmet Taner Kışlalı mahallesi 2716 cadde No:4 Çankaya/Ankara</span>
          </div>
          <div class="line">
            <img src="../assets/images/icons/phone.svg" alt="adres" height="20">
            <span><a href="tel: 0850-304-6654">0850-304-6654</a></span>
          </div>
          <div class="line">
            <img src="../assets/images/icons/mail.svg" alt="adres" height="20">
            <span><a href="mailto: info@molibeauty.com">info@molibeauty.com</a></span>
          </div>
        </div>
      </div>
    </div>
    <div class="call-button">
      <a href="tel: 0850-304-6654"><img src="../assets/images/phone.svg" alt="Ara" height="16"> Bize Ulaşın</a>
    </div>
    <Whatsapp />
  </footer>
</template>

<script>
import Whatsapp from '~/components/Whatsapp.vue'
export default {
  components: {
    Whatsapp
  }
}
</script>

<style lang="scss">
footer {
  background: #13363B;
  color: #f9e8dc;
  font-size: 1.3rem;
  a {
    color: #f9e8dc;
  }
  .container {
    display: grid;
    grid-template: 1fr / 1fr;
    grid-gap: 2fr;
    padding: 2rem;

    .item {
      text-align: center;
      padding: 2rem 1rem;

      &.contact {
        text-align: left;
        .address {
          .line {
            display: grid;
            grid-gap: 1rem;
            grid-template: 1fr / 1fr 10fr;
            padding: .25rem 0;
            span {
              font-size: .9rem;
            }
          }
        }
      }

      .title {
        color: #f9e8dc;
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 2rem;
      }
      img {
        margin-bottom: 2rem;
        display: inline-block;
      }
      p {
        font-size: 1rem;
      }
      .social-icons {
        margin-top: 3rem;
        display: grid;
        grid-template: 1fr / repeat(3, 1fr);
        grid-gap: .5rem;
      }
    }
  }

  .dark {
    background: #111;
    padding: 1.5rem 2rem;
    font-family: 'Quicksand', sans-serif;
    font-size: .9rem;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template: 1fr / 1fr 1fr;
      grid-gap: 3rem;
      
      .item {
        .social-icons {
          margin-top: 2rem;
        }

        &.contact {
          .line {
            margin-bottom: 1rem;
            img {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  .call-button {
    position: fixed;
    bottom: 24px;
    left: 20px;
    width: calc(50% - 40px);
    background: #0084ff;
    color: #fff;
    border-radius: 10px;
    
    a {
      display: block;
      text-align: center;
      padding: 15px 0;
      font-weight: 800;
      font-size: 1.1rem;
    }
    @media screen and (min-width: 500px) {
      display: none;
    }
  }

}
</style>