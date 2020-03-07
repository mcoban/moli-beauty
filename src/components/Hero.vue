<template>
  <div id="hero">
    <div class="images">
      <div class="image">
        <img src="../assets/images/home-cover/slide-1.jpg" alt="Resim1" />
      </div>
      <div class="image">
        <img src="../assets/images/home-cover/slide-2.jpg" alt="Resim1" />
      </div>
    </div>
    <div class="content">
      <div class="inner">
        <h3>Kendi Işığını Keşfet!</h3>
        <!-- <p>Profesyonel makyajın doğru adresi Moli Beauty ile güzelliğinize güzellik katın.</p> -->
        <p>
          Ay ışığından esinlenerek yarattığımız markamız ile güleryüzlü ve alanında uzman ekibimiz, kadınlarımızın kendi ışığını keşfetmesini hedefliyor.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hero {
  background: #f9e8dc;
  box-sizing: border-box;
  padding: 1rem 2rem;
  height: 500px;
  display: grid;
  grid-gap: 1rem;
  grid-template: 4fr 2fr / 1fr;

  .content {
    text-align: center;
    h3 {
      font-size: 2rem;
      font-weight: 100;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.4;
      text-align: justify;
      margin-bottom: 2rem;
    }
  }

  .images {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-column: 1 / 2;
    grid-gap: 1rem;
    .image {
      text-align: center;
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (min-width: 768px) {
    grid-template: 1fr / 1fr;

    .images {
      img {
        width: 100%;
        max-height: 100%;
      }
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 2.5rem;
      }
      p {
        margin-bottom: 0;
        width: 80%;
        margin: auto;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    min-height: 800px;
    text-align: center;
    padding: 3rem 10%;

    .content {
      h3 {
        margin-top: 2rem;
        font-size: 3rem;
      }
      p {
        font-size: 1.3rem;
        font-weight: 300;
        width: 60%;
        margin: auto;
        text-align: center;
      }
    }
  }

}
</style>