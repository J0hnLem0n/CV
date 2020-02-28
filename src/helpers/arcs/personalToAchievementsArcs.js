import { photoRadius } from '../../components/d3/helpers'
import React, { useEffect } from 'react'
import getArcPointCoordinates from '../getArcPointCoordinates'
import Description from '../../components/Description'
import avardImg from '../../images/award.svg'
import thumbsUpImg from '../../images/thumbs-up.svg'
import ComputerImg from '../../images/office-computer.inline.svg'
import SkatesImg from '../../images/skates.inline.svg'
import FilmsImg from '../../images/film.inline.svg'
import { iconSize } from '../../constants'
import { TextUi } from './ui'

const personalToAchievementsArcs = {
  radius: photoRadius + 30,
  startAngle: 0,
  endAngle: 70,
  centerXPos: 0,
  centerYPos: 0,
  paths: [
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, startAngle).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, startAngle).y,
      getPointLineData: (x, y) => [{ x, y: y - 200 }],
      text: {
        value: 'Николаев Евгений Евгеньевич',
        getXPos: (xEndLinePos, textEl) =>
          xEndLinePos - textEl.textLength.baseVal.value / 2,
        getYPos: yEndLinePos => yEndLinePos - 50
      },
      description: props => {
        const { point, path, description } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            isTopAndCenterPosition={true}
          >
            <TextUi y={20} fill={'white'} dominantBaseline="hanging">
              Senior JS developer
            </TextUi>
          </Description>
        )
      }
    },
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 30).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 30).y,
      getPointLineData: (x, y) => [
        { x: x + 70, y: y - 100 },
        { x: x + 350, y: y - 100 }
      ],
      text: {
        value: 'Хобби'
      },
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            <ComputerImg stroke={'white'} />
            <SkatesImg x={iconSize + iconSize / 2} fill={'white'} />
            <FilmsImg x={iconSize * 2 + iconSize} stroke={'white'} />
          </Description>
        )
      },
      icon: thumbsUpImg
    },
    {
      x: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 70).x,
      y: (centerXPos, centerYPos, radius, startAngle) =>
        getArcPointCoordinates(centerXPos, centerYPos, radius, 70).y,
      getPointLineData: (x, y) => [
        { x: x + 50, y: y - 30 },
        { x: x + 400, y: y - 30 }
      ],
      text: {
        value: 'Достижения'
      },
      icon: avardImg,
      description: props => {
        const { point, path, description, previousPoint } = props
        return (
          <Description
            point={point}
            path={path}
            description={description}
            previousPoint={previousPoint}
          >
            {/*TODO: лучше наверное хтмл заюзать*/}
            <TextUi>
              <tspan x="10" dy="2em">
                Медицинская диагностическая лаборатория
              </tspan>
              <tspan x="10" dy="1em">
                (Medical Diagnostic Laboratory for IBM
              </tspan>
              <tspan x="10" dy="1em">Domino Notes),
                разработана полностью как веб
              </tspan>
              <tspan x="10" dy="1em">
                приложение на Xpages, JQuery, REST, Java, Bootstrap.
              </tspan>
              <tspan x="10" dy="1em">
                Серверная и клиентская часть на JS.
              </tspan>
              <tspan x="10" dy="2em">
                Разработка ипотечного калькулятора (react js + RestApi)
              </tspan>
              <tspan x="10" dy="2em">
                Формаы для интеграции на сайт
              </tspan>
              <tspan x="10" dy="1em">
                Госуслуг (react, redux, styled-components,
              </tspan>
              <tspan x="10" dy="1em">
                hooks, saga, storybook, jest, @testing-library)
              </tspan>
              <tspan x="10" dy="2em">
                Проведение Технических интервью etc...
              </tspan>
            </TextUi>
          </Description>
        )
      }
    }
  ]
}

export default personalToAchievementsArcs
