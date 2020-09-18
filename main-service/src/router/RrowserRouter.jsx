import { BrowserRouter as Router  } from 'react-router-dom';
import React from 'react'
import history from './history'
class BrowserRouter extends React.Component {

  render() {
    return <Router history={history} children={this.props.children} />
  }
}
export default BrowserRouter