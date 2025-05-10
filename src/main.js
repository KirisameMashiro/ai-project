import { createApp } from 'vue';
import App from './App.vue';
import router from './router'  // 引入路由配置

// // 引入Bootstrap CSS和JS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 引入tailwindcss
import './input.css';

//引入font-awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App)
  .use(router)  // 使用路由
  .mount('#app')  