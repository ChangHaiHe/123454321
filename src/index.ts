import Vue from 'vue'
import App from './App.vue';

console.log(1123)
new Vue(
    {
        el:'#app',
        render:h=>h(App)
    }
)