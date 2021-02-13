import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);
app.config.errorHandler = (...rest) => {
  console.log('config errorHandler', rest);
}
// app.config.warnHandler = (...rest) => {
//   console.log('config warnHandler', rest);
// }
app.config.globalProperties.$http = () => {
  console.log('globalProperties', '$http');
}
app.config.isCustomElement = tag => tag.startsWith('icon-');
app.mount('#app')
