import React from 'react'
import Router from './router'
import { loadMicroApp, start } from 'qiankun'
window.__POWERED_BY_REACT_ = 1

const App = () => {
  const [visible, setVisible] = React.useState(false)
  return (<Router />)
}

export default App