import React from 'react'
import { loadScript, loadStyle } from '../../lib/utils'
import appRoutes from '../../router/appRoutes'
const MyReact = props => {
  const loadApp = () => {
    Promise.all([loadScript('http://localhost:8888/js/app.js'),loadStyle('http://localhost:8888/app.css')]).then(() => {
      const msg = {
        // axios,
        cb: (routes, history) => {
          console.log(routes)
          appRoutes['/react'].router = history
          appRoutes['/react'].routes = routes
        }
      }
      window.react.mount(msg)
      typeof props.loadComplete === 'function' && props.loadComplete()
    })
  }
  React.useEffect(() => {
    loadApp()
  }, [])
  return (<div id='myReact'></div>)
}
export default MyReact