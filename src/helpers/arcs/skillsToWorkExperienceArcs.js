import { photoRadius } from '../../components/d3/helpers'
import getArcPointCoordinates from './getArcPointCoordinates'
import ToolImg from '../../images/tool.svg'
import BooklImg from '../../images/book.svg'
import Description from '../../components/Description'
import ComputerImg from '../../images/office-computer.inline.svg'
import SkatesImg from '../../images/skates.inline.svg'
import { iconSize } from '../../constants'
import FilmsImg from '../../images/film.inline.svg'
import Donut, { fullRadius } from '../../components/Donut'
import React from 'react'
import { DescriptionTable, DescriptionTableCol, DescriptionTableRow, ForeignObject } from './ui'
import {iconSizeWithMargin} from '../../components/Icon'
import { viewBoxHeight, viewBoxWidth } from '../viewBox'

const skillsToWorkExperienceArcs = {
  radius: photoRadius + 30,
  startAngle: 135,
  endAngle: 205,
  centerXPos: viewBoxWidth / 2,
  centerYPos: viewBoxHeight / 2,
  paths: [
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, startAngle).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, startAngle).y,
      getPointLineData: (x, y) => [
        { x: x + 150, y: y + 150 },
        { x: x + 230, y: y + 150 }
      ],
      text: {
        value: 'Скилы'
      },
      icon: ToolImg,
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            <Donut
              x={fullRadius}
              y={fullRadius}
              text={'JavaScript'}
              value={80}
            />
            <Donut
              x={fullRadius}
              y={fullRadius * 3}
              text={'ReactJS'}
              value={80}
            />
            <Donut
              x={fullRadius}
              y={fullRadius * 5}
              text={'Redux'}
              value={70}
            />
          </Description>
        )
      }
    },
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 180).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 180).y,
      getPointLineData: (x, y) => [
        { x, y: y + 150 },
        { x: x + 110, y: y + 150 }
      ],
      text: {
        value: 'Обучение'
      },
      icon: BooklImg,
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            <ForeignObject width={Math.abs(point.x) - Math.abs(previousPoint.x) + iconSizeWithMargin} height={'100%'}>
              <DescriptionTable>
                <DescriptionTableRow>
                  <DescriptionTableCol isBold>2005</DescriptionTableCol>
                  <DescriptionTableCol>
                    Омский торгово-экономический колледж
                  </DescriptionTableCol>
                </DescriptionTableRow>
                <DescriptionTableRow>
                  <DescriptionTableCol isBold>2013</DescriptionTableCol>
                  <DescriptionTableCol>
                    Омский государственный университет им. Ф.М. Достоевского
                  </DescriptionTableCol>
                </DescriptionTableRow>
              </DescriptionTable>
            </ForeignObject>
          </Description>
        )
      }
    },
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 205).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 205).y,
      getPointLineData: (x, y) => [
        { x: x - 50, y: y + 150 },
        { x: x - 200, y: y + 150 }
      ],
      text: {
        value: 'Работа'
      },
      icon: BooklImg,
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            <ForeignObject width={Math.abs(point.x - previousPoint.x) + iconSizeWithMargin} height={'100%'}>
              <DescriptionTable>
                <DescriptionTableRow>
                  <DescriptionTableCol isBold>2016</DescriptionTableCol>
                  <DescriptionTableCol>
                    <span>Luxoft</span>
                    <span>Senior JS Developer</span>
                  </DescriptionTableCol>
                </DescriptionTableRow>
                <DescriptionTableRow>
                  <DescriptionTableCol isBold>2014</DescriptionTableCol>
                  <DescriptionTableCol>
                    <span>DA</span>
                    <span>Senior Web Developer (PHP, JS, Lotus Domino)</span>
                  </DescriptionTableCol>
                </DescriptionTableRow>
              </DescriptionTable>
            </ForeignObject>
          </Description>
        )
      }
    }
  ]
}
export default skillsToWorkExperienceArcs
