import React from 'react'
import { TextUi } from '../../helpers/arcs/ui'
import {strokeWidth,donutRadius, fullRadius} from './index'

const Donut = props => {
  const {text, x, y, value} = props
  return (
    <>
      <circle
        className="donut-ring"
        cx={x}
        cy={y}
        r={donutRadius}
        fill="transparent"
        stroke={'#7b797a'}
        strokeWidth={strokeWidth}
      ></circle>
      <circle
        className="donut-segment donut-segment-2"
        cx={x}
        cy={y}
        r={donutRadius}
        fill="transparent"
        stroke={'#fbaa1b'}
        strokeWidth={strokeWidth}
        strokeDasharray={`${value} ${100-value}`}
        strokeDashoffset="25"
      ></circle>
      <TextUi x={x + fullRadius} y={y}>{text}</TextUi>
    </>
  )
}

export default Donut