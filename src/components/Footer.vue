<template>
  <footer>
    <div class="container">
      <div class="item">
        <img src="../assets/images/footer-logo.png" alt="Logo">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, suscipit.</p>
        <div class="social-icons">
          <a href="#"><img src="../assets/images/icons/social/facebook.svg" alt="Facebook" height="30"></a>
          <a href="#"><img src="../assets/images/icons/social/instagram.svg" alt="Instagram" height="30"></a>
          <a href="#"><img src="../assets/images/icons/social/pinterest.svg" alt="Pinterest" height="30"></a>
        </div>
      </div>
      <div class="item contact">
        <h4 class="title">İletişim Bilgilerimiz</h4>
        <div class="address">
          <div class="line">
            <img src="../assets/images/icons/pin.svg" alt="adres" height="20">
            <span>Açık adres bilgileri</span>
          </div>
          <div class="line">
            <img src="../assets/images/icons/phone.svg" alt="adres" height="20">
            <span>123-1234567</span>
          </div>
          <div class="line">
            <img src="../assets/images/icons/mail.svg" alt="adres" height="20">
            <span><a href="#">info@molibeauty.com</a></span>
          </div>
        </div>
      </div>
    </div>
    <div class="dark">
      Moli Beauty bir Bimobil firması ürünüdür.
    </div>
  </footer>
</template>

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
              font-size: 1.1rem;
            }
          }
        }
      }

      .title {
        color: #f9e8dc;
        font-size: 2rem;
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
}
</style>