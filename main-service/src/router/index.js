import React from 'react'
import history from './history'
import {
  Router as BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from '../layout/Layout'
import Vue from '../view/vue/Vue'
import MyReact from '../view/react/React'
const Router = (props) => {
  const [layoutKey, setLayoutKey] = React.useState(false)
  const loadComplete = () => {
    setLayoutKey(!layoutKey)
  }
  return <BrowserRouter history={history}>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/vue' />
      </Route>
      <Layout layoutKey={layoutKey}>
        {/*<div id='vue'></div>*/}
        <Route path='/vue' render={props => <Vue loadComplete={loadComplete} {...props} />} />
        <Route path='/react' render={props => <MyReact loadComplete={loadComplete} {...props} />} />
      </Layout>
    </Switch>
  </BrowserRouter>
}

export default Router