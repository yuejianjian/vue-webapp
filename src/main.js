// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,NavBar,Tab, Tabs,Field ,Icon  } from 'vant';
Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NavBar);
Vue.use(Tab).use(Tabs);
Vue.use(Field);
Vue.use(Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
