import React from 'react'
import { loadScript, loadStyle } from '../../lib/utils'
import axios from '../../api/axios'
import appRoutes from '../../router/appRoutes'

export let vueRouter

const Vue = (props) => {
  const loadApp = () => {
    Promise.all([loadScript('http://localhost:9000/js/main.js'), loadStyle('http://localhost:9000/main.css')]).then(() => {
      const msg = {
        axios,
        cb: router => {
          vueRouter=router
          appRoutes['/vue'].routes = vueRouter.options.routes
          appRoutes['/vue'].router = vueRouter
        }
      }
      window.vue.mount(msg)
      typeof props.loadComplete === 'function' && props.loadComplete()
    })
  }
  const postIframeMessage = () => {
    setInterval(() => {
      const a = {a: '123', b: () => {console.log(13)}}
      const data = JSON.stringify(a)
      const iframe = document.getElementById('iframe')
      iframe.contentWindow.postMessage(data, '*')
    }, 2000)
  }
  React.useEffect(() => {
    // postIframeMessage()
    loadApp()
  }, [])
  return (<div>
    <div id='vue'>vue</div>
    {/*<iframe id='iframe' src='http://localhost:9000' width='100%' height={400} />*/}
  </div>)
}
export default Vue
