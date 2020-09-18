import Vue from 'vue';
import App from './App.vue'
import router from './router'
import './elementUI/index'
import './index.css'

let instance

const message = '测试 postmessage'

//js
//监听message事件
window.addEventListener("message", receiveMessageFromIndex, false);//注意ie中事件绑定是attachEvent
//回调函数
function receiveMessageFromIndex(event) {
//传递的data可以从event.data中获取到
  console.log(event.data)
}

export const bootstrap = props => {
  return Promise.resolve()
}

export const mount = ({cb}) => {
  return new Promise(resolve => {
    if (typeof cb === 'function') {
      cb(router)
    }
    instance = new Vue({
      el: '#vue',
      router,
      render: h => h(App),
    });
    resolve()
  })
}

export const unmount = () => {
  return new Promise(resolve => {
    // instance.des
    resolve()
  })
}

if (!window.__POWERED_BY_REACT_) {
  mount({})
}