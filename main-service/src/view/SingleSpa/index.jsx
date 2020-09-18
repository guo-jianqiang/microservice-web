import React from 'react'
import { loadMicroApp, start } from 'qiankun';
const SingleSpa = () => {
  React.useEffect(() => {
    loadMicroApp({
      name: 'single-spa-react',
      entry: 'http://localhost:3000',
      container: '#single-spa-react',
      activeRule: '/singlespareact',
      props: {
        name: 'kuitos',
      }
    });
    start();
  },[])
  return (<div><div id='single-spa-react'></div></div>)
}

export default SingleSpa