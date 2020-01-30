<template>
  <header>
    <div class="inner">
      <a href="/">
        <img 
          src="../assets/images/logo.png" 
          srcset="../assets/images/logo_2x.png 2x"
          height="55"
          alt="Logo" />
      </a>
      <nav class="header-menu">
        <a @click="menuClicked = !menuClicked" :class="['menu-button', { 'clicked': menuClicked }]"><img src="../assets/images/menu.svg" alt="Mobile Menu" height="32"></a>
        <ul :class="{ 'block': menuClicked }">
          <li><a href="/hakkimizda/">Hakkımızda</a></li>
          <li><a href="#hizmetler">Hizmetlerimiz</a></li>
          <!-- <li><a href="#">Galeri</a></li> -->
          <li><a href="/iletisim/">İletişim</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuClicked: false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: #fff;
  .inner {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    .header-menu {
      margin-left: auto;
      .menu-button {
        img {
          transition: ease all .3s;
        }
        &.clicked {
          img {
            transform: rotate(-90deg);
          }
        }
      }
      ul {
        display: none;
        position: absolute;
        background: #f9e8dc;
        left: 0;
        top: 90px;
        width: 100%;
        height: 100%;
        padding: 2rem;
        box-sizing: border-box;
        &.block {
          display: block;
        }
        li {
          display: block;
          a {
            font-size: 2rem;
            color: #333;
            display: block;
            padding: 1.5rem;
            text-align: center;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .inner {
      max-width: 1200px;
      margin: auto;
    }
  }
}
</style>