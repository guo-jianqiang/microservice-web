export const loadScript = src => {
  return new Promise(((resolve, reject) => {
    const scriptIndex = Array.prototype.slice.call(document.getElementsByTagName('script')).findIndex((item => item.getAttribute('src') === src))
    if (scriptIndex !== -1) {
      resolve()
    } else {
      const script = document.createElement('script')
      const head = document.getElementsByTagName('head')[0]
      head.appendChild(script)
      script.src = src
      script.onload = resolve
      script.onerror = reject
    }
  }))
}

export const loadStyle = src => {
  return new Promise(((resolve, reject) => {
    const linkIndex = Array.prototype.slice.call(document.getElementsByTagName('link')).findIndex((item => item.getAttribute('href') === src))
    if (linkIndex !== -1) {
      resolve()
    } else {
      const link = document.createElement('link')
      const head = document.getElementsByTagName('head')[0]
      link.setAttribute('rel','stylesheet');
      link.setAttribute('media','all');
      link.setAttribute('type','text/css');
      head.appendChild(link)
      link.href = src
      console.log(src)
      link.onload = resolve
      link.onerror = reject
    }
  }))
}