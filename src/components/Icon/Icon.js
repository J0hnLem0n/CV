import React, { useRef, useEffect } from 'react'
export const iconSize = 64
export const iconMargin = 10
export const iconSizeWithMargin = iconSize + iconMargin

const Icon = props => {
  const rootRef = useRef()
  const {
    data,
    point: { x, y },
    className
  } = props
  useEffect(() => {
    if (data) {
      //TODO: избавиться от xhr
      const xhr = new XMLHttpRequest()
      xhr.open('GET', data)
      xhr.addEventListener('load', function(ev) {
        const xml = ev.target.response
        const dom = new DOMParser()
        const svg = dom.parseFromString(xml, 'image/svg+xml')
        svg.rootElement.style.stroke = 'white'
        rootRef.current != null &&
          rootRef.current.appendChild &&
          rootRef.current.appendChild(svg.rootElement)
      })
      xhr.send(null)
    }
  }, [])
  return (
    <svg
      x={x < 0 ? x - iconSize - iconMargin : x + iconMargin}
      y={y - iconSize}
      ref={rootRef}
      className={className}
    />
  )
}
export default Icon
