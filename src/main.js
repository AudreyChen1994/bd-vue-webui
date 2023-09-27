import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BdUI from './components/bd-web-ui';

const app = createApp(App);
app.use(BdUI);
app.mount('#app')
