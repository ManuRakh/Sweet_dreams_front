import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import FooterComponent from './Footer.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
const NotFound = { template: '<p>Страница не найдена</p>' }
const routes = {
  '/': App,
  '/about': FooterComponent
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})