/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 16:00:33
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 09:27:11
 */ 
import store from "@/store"
class Loading {
  close () {
    store.dispatch('loading', false)
  }
  open () {
    store.dispatch('loading', true)
  }
}
export default {
  install(Vue) {
    Vue.mixin({
      created() {
        this.flwz = '分类文章'
      }
    })
    Vue.prototype.$loading = new Loading()
}
}