import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerMicroApps } from 'qiankun';
import router from '@/router';
registerMicroApps([
    // {
    //     name: "vue2App",
    //     props: { age: 10 }, //给子应用传数据
    //     entry: "//localhost:3001", //默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
    //     container: "#out-main", //挂载到主应用的哪个元素下
    //     activeRule: "/vue2", //当我劫持到路由地址为/vue2时，我就把http://localhost:3000这个应用挂载到#app-main的元素下
    // },
    {
      name: "vueChildOne",
      entry: "//localhost:5174",
      container: "#child-vue3-one-content",
      activeRule: "/child-one",
    },
]);

const app = createApp(App);
app.use(router).mount('#app');

