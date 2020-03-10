import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const animationTime = 1000

const ArcLineUi = styled.line`
  ${props => {
    if (props.innerRef != null) {
      return `
        stroke-dashoffset: ${props.innerRef.current.getTotalLength()};
        stroke-dasharray: ${props.innerRef.current.getTotalLength()};
        animation: ArcLineUi ${animationTime}ms forwards;
        animation-delay: ${animationTime * 2 * (props.index + 1)}ms
        `
    }
    else {
      return `opacity: 0;`
    }
  }};
  @keyframes ArcLineUi {
    100% {
    stroke-dashoffset: 0;
    }
  }
`
const Line = ({ point, xCoord, yCoord, index }) => {
  const [elRefFromState, setElRefFromState] = useState(null)
  const elRef = useRef(null)
  useEffect(() => {
    setElRefFromState(elRef)
  }, [elRef])
  return (
    <ArcLineUi
      innerRef={elRefFromState}
      ref={elRef}
      x1={xCoord}
      y1={yCoord}
      x2={point.x}
      y2={point.y}
      stroke={'white'}
      strokeWidth={'2'}
      index={index}
    />
  )
}

export default Line
