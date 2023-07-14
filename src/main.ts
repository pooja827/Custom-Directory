import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { commaSeparationDirective } from "./commaSeparationDirective.js";

import App from './App.vue'
import router from './router'
import mitt from 'mitt' 
const emitter = mitt();

const app = createApp(App)
app.directive("comma-separation", commaSeparationDirective);
app.config.globalProperties.$filters={
    truncateName(value, length) {
    if (value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }

}
app.config.globalProperties.emitter = emitter;
app.use(createPinia())
app.use(router)
app.mount('#app')
