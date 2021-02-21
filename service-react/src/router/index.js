import React from 'react'
import history from './history'
import {
  Router as BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from '../layout/Layout'
import routes from './routeItems'
const Router = (props) => {
  const renderRoute = () => {
    let routeArr = []
    const loopRoute = arr => {
      arr.map(route => {
        if (route.children && route.children.length) {
          loopRoute(route.children)
        }
        routeArr.push(<Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)
      })
    }
    loopRoute(routes)
    console.log(routeArr)
    return routeArr
  }
  console.log(window.__POWERED_BY_REACT_)
  return <BrowserRouter history={history} >
    <Switch>
      <Route path='/' exact>
        <Redirect to='/table' />
      </Route>
      {
        window.__POWERED_BY_REACT_ ? <Layout {...props}>
          {renderRoute()}
        </Layout> : <React.Fragment>
          {renderRoute()}
        </React.Fragment>
      }
    </Switch>
  </BrowserRouter>
}

export default Router