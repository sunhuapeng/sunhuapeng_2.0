/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 16:00:33
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 16:08:34
 */ 
import store from "@/store"
import ReadFile from "@/common/js/read-file.js";
import Moment from 'moment'
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

    Vue.prototype.$moment = function () {
      return Moment
    }
    // 格式化时间
    Vue.prototype.$formatDate  = function(date) {
      return Moment(date).format('YYYY / MM / DD')
    }
    Vue.prototype.$readFile = new ReadFile()
  }
}