import React, { useEffect, useRef } from 'react'
import style from './style.css'

function easeOutQuint (x) {
  return 1 - Math.pow(1 - x, 5)
}

const Slide = ({ children }) => {
  const slideRef = useRef(null)
  const touchStartValue = useRef({x: 0, y: 0})
  const currentTranslateX = useRef(0)
  const currentDistance = useRef(0)
  const diffDistance = useRef(0)

  const scrollToSlide = (start, end) => {
    console.log(start)
    console.log(end)
    let distance = end - start
    let duration = 1000
    const startTime = Date.now()
    const raf = () => {
      const timestamp = Date.now()
      let progress = ((timestamp - startTime) / duration)
      if (progress >= 1) {
        progress = 1
      } else {
        window.requestAnimationFrame(raf)
      }
      const translateX = distance * easeOutQuint(progress)
      slideRef.current.style.transform = `translateX(${start + translateX}px)`
      currentTranslateX.current = start + translateX
    }
    raf()
  }

  const onMoveTouchMove = e => {
    diffDistance.current = e.touches[0].pageX - touchStartValue.current.x
    currentDistance.current = diffDistance.current + currentTranslateX.current
    slideRef.current.style.transform = `translateX(${currentDistance.current}px)`
  }
  const onTouchStart = e => {
    touchStartValue.current.x = e.touches[0].pageX
    touchStartValue.current.y = e.touches[0].pageY
    slideRef.current.addEventListener('touchmove', onMoveTouchMove, false)
  }
  const onTouchEnd = e => {
    const count = Math.ceil(Math.abs(currentDistance.current) / slideRef.current.offsetWidth)
    let end = (slideRef.current.offsetWidth * (count - 1))
    if (Math.abs(diffDistance.current) > 100) {
      if (diffDistance.current > 0) {
        scrollToSlide(currentDistance.current, end * -1)
      } else {
        end = count < children.length ? (slideRef.current.offsetWidth * count) : end
        scrollToSlide(currentDistance.current, end * -1)
      }
    } else if (Math.abs(diffDistance.current) < 100 && Math.abs(diffDistance.current) > 0) {
      if (diffDistance.current > 0) {
        scrollToSlide(currentDistance.current, (slideRef.current.offsetWidth * count) * -1)
      } else {
        scrollToSlide(currentDistance.current, (slideRef.current.offsetWidth * (count - 1)) * -1)
      }
    }
    diffDistance.current = 0
    slideRef.current.removeEventListener('touchmove', onMoveTouchMove, false)
  }
  useEffect(() => {
    slideRef.current.addEventListener('touchstart', onTouchStart, false)
    slideRef.current.addEventListener('touchend', onTouchEnd, false)
  },[])
  return (<div
    className={'slide'}
  >
    <div
      className={'slide-wrap'}
      ref={slideRef}
    >
      {
        React.Children.map(children, item => (<div className={'slide-wrap-children'}>{item}</div>))
      }
    </div>
  </div>)
}

export default Slide

