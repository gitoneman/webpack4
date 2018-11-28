import Vue from 'vue'
import ECharts from 'vue-echarts'
import Router from 'vue-router'
import Vuex from 'vuex'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
require("@/css/main.css")
import App from './App'

Vue.use(iView)
Vue.component('chart', ECharts)
Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})