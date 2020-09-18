import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import './style.css'
const ScrollWrap = ({speed = 50, delay = 3000, children, style}) => {
  const wrapRef = useRef(null)
  useEffect(() => {
    const height = wrapRef.current.clientHeight
    const scrollHeight = height - wrapRef.current.parentNode.clientHeight
    if (height - wrapRef.current.parentNode.clientHeight > 0) {
      anime({
        targets: wrapRef.current,
        translateY: -scrollHeight,
        duration: (scrollHeight / speed) * 1000,
        delay,
        easing: 'linear',
        complete: function(anim) {
          anim.translateY = 0
          setTimeout(() => {
            anim.restart()
          }, 2000)
        }
      })
    }
  }, [])
  return (<div className={'wrap'} style={style}>
    {
      React.cloneElement(React.Children.only(children), {
        ref: wrapRef
      })
    }
  </div>)
}
export default ScrollWrap