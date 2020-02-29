import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Line from '../Line'
import Text from '../Text'
import getArcPath from '../../helpers/getArcPath'
import Icon from '../Icon'
import styled from 'styled-components'
import Arcs from '../../helpers/arcs'
import Harya from '../../images/skates.inline.svg'

const animationTime = 1000

const ArcPathUi = styled.path`
  ${props => {
    if (props.innerRef != null) {
      return `
        stroke-dashoffset: ${props.innerRef.current.getTotalLength()};
        stroke-dasharray: ${props.innerRef.current.getTotalLength()};;
        `
    } else {
      return `
        opacity: 0;
        `
    }
  }};
  animation: ArcPathUi${props => props.prefix} ${animationTime}ms forwards;
  @keyframes ArcPathUi${props => props.prefix} {
    100% {
      stroke-dashoffset: ${props =>
        props.innerRef != null && props.innerRef.current.getTotalLength() * 2};
    }
`
const CircleUi = styled.circle`
  opacity: 0;
  animation: CircleUi ${animationTime}ms forwards;
  animation-delay: ${animationTime}ms;
  @keyframes CircleUi {
    100% {
      opacity: 1;
    }
  }
`
const TextUi = styled(Text)`
  opacity: 0;
  animation: TextUi ${animationTime}ms forwards;
  animation-delay: ${animationTime * 5}ms;
  @keyframes TextUi {
    100% {
      opacity: 1;
    }
  }
`
const IconUi = styled(Icon)`
  opacity: 0;
  animation: IconUi ${animationTime}ms forwards;
  animation-delay: ${animationTime * 5}ms;
  @keyframes IconUi {
    100% {
      opacity: 1;
    }
  }
`
const ArcPath = ({ prefix }) => {
  const {
    centerXPos,
    centerYPos,
    startAngle,
    endAngle,
    radius,
    paths = []
  } = Arcs[prefix]
  const [elRefFromState, setElRefFromState] = useState(null)
  const elRef = useRef(null)
  useLayoutEffect(() => {
    setElRefFromState(elRef)
  }, [elRef])
  const LastPath = () => {
    return paths.length
      ? paths.map(path => {
          const { getPointLineData, x, y, text, icon } = path
          const xCord = x(centerXPos, centerYPos, radius, startAngle)
          const yCord = y(centerXPos, centerYPos, radius, startAngle)
          const points = getPointLineData ? getPointLineData(xCord, yCord) : []
          return (
            <>
              <CircleUi cx={xCord} cy={yCord} r={4} fill={'white'} />
              {points
                .reduce((initial, point, index, pointsList) => {
                  const prevXPoint =
                    index === 0 ? xCord : initial[index - 1].coordinates.x
                  const prevYPoint =
                    index === 0 ? yCord : initial[index - 1].coordinates.y
                  initial.push({
                    component: (
                      <>
                        {/*TODO: из за анимации лучше засунуть в path что бы анимация линий была за один промежуток времени константой */}
                        <Line
                          xCoord={prevXPoint}
                          yCoord={prevYPoint}
                          point={point}
                          index={index}
                        />
                        {pointsList.length - 1 === index && (
                          <>
                            <TextUi text={text} point={point} path={path} />
                            {/*TODO: подумать и загнать в компонент Description*/}
                            {path.description &&
                              path.description({
                                point,
                                path,
                                previousPoint: { x: prevXPoint, y: prevYPoint }
                              })}
                            <IconUi data={icon} point={point} />
                          </>
                        )}
                      </>
                    ),
                    coordinates: {
                      x: point.x,
                      y: point.y
                    }
                  })
                  return initial
                  //TODO: избавиться от map излишне (
                }, [])
                .map(point => point.component)}
            </>
          )
        })
      : null
  }
  return (
    <>
      <ArcPathUi
        fill="none"
        stroke={'white'}
        strokeWidth={'2'}
        ref={elRef}
        innerRef={elRefFromState}
        prefix={prefix}
        d={getArcPath(centerXPos, centerYPos, radius, startAngle, endAngle)}
      />
      <LastPath />
    </>
  )
}
export default ArcPath
