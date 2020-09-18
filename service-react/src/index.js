import ReactDom from 'react-dom'
import React from 'react'
import routes from './router/routeItems'
import history from './router/history'
import './style/index.css'
import App from './App.jsx'
export const mount = props => {
  return new Promise(resolve => {
    if (props.cb && typeof props.cb === 'function') {
      props.cb(routes, history)
    }
    resolve()
    ReactDom.render(<App />, document.getElementById('myReact'))
  })
}
export const bootstrap = async props => {
  return {}
}
export const unmount = async props => {
  return {}
}

if (!window.__POWERED_BY_REACT_) {
  mount({})
}