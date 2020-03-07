// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import '~/assets/css/style.scss'
//import '~/assets/js/whatsapp.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Playfair+Display&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap'
  })
  head.meta.push({
    name: 'yandex-verification',
    key: 'yandex-verification',
    content: '9f0d94174483dd56'
  })
}
