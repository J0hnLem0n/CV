import React from 'react'
import { TextUi } from '../../helpers/arcs/ui'

const textWidth = 120;

const LineGraph = props => {
  const {text, x = 10, y = 10, value} = props
  return (
    <>
      <TextUi x={x} y={y}>{text}</TextUi>
      <rect
        className="donut-ring"
        x={textWidth}
        y={0}
        width={150}
        height={20}
        fill={'#7b797a'}
      ></rect>
      <rect
        className="donut-segment donut-segment-2"
        x={textWidth}
        y={0}
        width={20}
        height={20}
        fill={'#fbaa1b'}
      ></rect>
    </>
  )
}

export default LineGraph