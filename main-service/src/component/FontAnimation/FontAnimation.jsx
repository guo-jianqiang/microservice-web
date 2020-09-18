import React, {useEffect} from 'react'
import './style.css'

const delay = 100

const FontAnimation = ({children}) => {
  const domRef = React.useRef(null)
  return (<div ref={domRef}>
    {
      children.split('').map((item, index) => (<span
        style={{animationDelay: (index * delay) + 'ms'}}
        key={index}
        className={'el-font'}
      >{item}</span>))
    }
  </div>)
}
export default FontAnimation