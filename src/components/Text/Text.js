import React, { useEffect, useRef, useState } from "react"

const Text = props => {
  const { point, text = { value: "" }, path, className } = props
  const [x, setX] = useState(point.x)
  const [y, setY] = useState(point.y - 10)
  const targetRef = useRef(null)
  /**TODO: избавиться от двойного рендера, и вообще сложно как то...*/
  useEffect(() => {
    if (text.getXPos) {
      setX(text.getXPos(point.x, targetRef.current))
    } else {
      x > 0 &&
      !text.getXPos &&
      setX(x - targetRef.current.textLength.baseVal.value)
    }
    text.getYPos && setY(text.getYPos(point.y))
  }, [])
  return (
      <text ref={targetRef} x={x} y={y} fill={"white"} fontFamily={'Nunito Regular'} className={className}>
        {text.value.toUpperCase()}
      </text>
  )
}

export default Text