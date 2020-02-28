import { photoRadius } from '../../components/d3/helpers'
import getArcPointCoordinates from '../getArcPointCoordinates'
import phoneImg from '../../images/phone.svg'
import languageImg from '../../images/globe.svg'
import SmartPhoneImg from '../../images/smartphone.inline.svg'
import MailImg from '../../images/mail.inline.svg'
import Description from '../../components/Description'
import React from 'react'
// TODO: взять из компонента icon
import { iconSize } from '../../constants'
import styled from 'styled-components'
import {
  DescriptionTable,
  DescriptionTableCol,
  DescriptionTableRow,
  ForeignObject,
  TextUi
} from './ui'
import { iconSizeWithMargin } from '../../components/Icon'
import LineGraph from '../../components/LineGraph'

const languagesToContactsArcs = {
  radius: photoRadius + 30,
  startAngle: 280,
  endAngle: 320,
  centerXPos: 0,
  centerYPos: 0,
  paths: [
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, startAngle).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, startAngle).y,
      getPointLineData: (x, y) => [
        { x: x - 100, y: y + 20 },
        { x: x - 200, y: y + 20 }
      ],
      text: {
        value: 'Языки'
      },
      icon: languageImg,
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            <LineGraph text={'Английский'}/>
          </Description>
        )
      }
    },
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 320).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 320).y,
      getPointLineData: (x, y) => [
        { x: x - 90, y: y - 200 },
        { x: x - 250, y: y - 200 }
      ],
      text: {
        value: 'Контакты'
      },
      icon: phoneImg,
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            <SmartPhoneImg stroke={'white'} />
            <TextUi x={iconSize + 10} y={iconSize / 2}>
              +7(965)-975-83-67
            </TextUi>
            <MailImg y={iconSize} stroke={'white'} />
            <TextUi x={iconSize + 10} y={iconSize + iconSize / 2}>
              nikolaevee@gmail.com
            </TextUi>
          </Description>
        )
      }
    }
  ]
}
export default languagesToContactsArcs
