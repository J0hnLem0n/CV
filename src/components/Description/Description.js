import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {isRightSideElement} from '../../helpers/elements'

const animationTime = 1000
// TODO: foreignObject для description возможно лучше подойдет
// TODO: для дескрипшин придумать покруче анимашки
const DescriptionUi = styled.svg`
  opacity: 0;
  animation: IconUi ${animationTime}ms forwards;
  animation-delay: ${animationTime * 5}ms;
  overflow: unset;
  @keyframes IconUi {
    100% {
      opacity: 1;
    }
  }
`

const Description = props => {
  const {
    path,
    point,
    isTopAndCenterPosition,
    previousPoint,
    className
  } = props

  const getYWithTopMargin = y => y + 20
  const [x, setX] = useState(point.x)
  const [y, setY] = useState(getYWithTopMargin(point.y))
  const targetRef = useRef()

  useEffect(() => {
    if (isTopAndCenterPosition) {
      const xPos = x - targetRef.current.getBBox().width / 2
      const yPos = y - targetRef.current.getBBox().height * 4
      setX(xPos)
      setY(yPos)
      return
    }
    if (isRightSideElement(previousPoint)) {
      setX(previousPoint.x)
      setY(previousPoint.y)
    } else {
      setX(point.x - 64)
    }
  }, [targetRef, path.description])

  return (
    <DescriptionUi x={x} y={y} ref={targetRef} className={className}>
      {props.children}
    </DescriptionUi>
  )
}

export default Description
