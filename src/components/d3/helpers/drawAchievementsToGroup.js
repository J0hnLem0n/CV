import * as d3 from "d3"
import {
  getEndPointPathArc,
  getStartPointPath,
  skillsInnerRadius,
  skillsOuterRadius,
} from "./index"
import appendCircle from "./appendCircle"
import appendLinePath from "./appendLinePath"
import appendArcPath from "./appendArcPath"

const personalToHobbiesArc = d3
  .arc()
  .innerRadius(skillsInnerRadius)
  .outerRadius(skillsOuterRadius)
const hobbiesToAchievementsArc = d3
  .arc()
  .innerRadius(skillsInnerRadius)
  .outerRadius(skillsOuterRadius)

const drawAchievementsToGroup = (swgContainer, transformRounds) => {
  const g = swgContainer.append("g").attr("transform", transformRounds)
  //TODO: из-за необходимости проставлять промежуточные точки, подумать как лучше сделать
  const personalToHobbiesPath = appendArcPath(
    g,
    {
      startAngle: 0 * (Math.PI / 180),
      endAngle: 30 * (Math.PI / 180),
    },
    personalToHobbiesArc
  )
  const hobbiesToAchievementsPath = appendArcPath(
    g,
    {
      startAngle: 30 * (Math.PI / 180),
      endAngle: 70 * (Math.PI / 180),
    },
    hobbiesToAchievementsArc
  )
  const {
    x: personalToHobbiesXStart,
    y: personalToHobbiesYStart,
  } = getStartPointPath(personalToHobbiesPath)
  const {
    x: personalToHobbiesXEnd,
    y: personalToHobbiesYEnd,
  } = getEndPointPathArc(personalToHobbiesPath)
  const {
    x: hobbiesToAchievementsXEnd,
    y: hobbiesToAchievementsYEnd,
  } = getEndPointPathArc(hobbiesToAchievementsPath)
  const personalLine = d3.line()([
    [personalToHobbiesXStart, personalToHobbiesYStart],
    [personalToHobbiesXStart, personalToHobbiesYStart - 200],
  ])
  const hobbiesLine = d3.line()([
    [personalToHobbiesXEnd, personalToHobbiesYEnd],
    [personalToHobbiesXEnd + 70, personalToHobbiesYEnd - 100],
    [personalToHobbiesXEnd + 300, personalToHobbiesYEnd - 100],
  ])
  const achievementsLine = d3.line()([
    [hobbiesToAchievementsXEnd, hobbiesToAchievementsYEnd],
    [hobbiesToAchievementsXEnd + 150, hobbiesToAchievementsYEnd - 30],
    [hobbiesToAchievementsXEnd + 300, hobbiesToAchievementsYEnd - 30],
  ])
  appendCircle(g, personalToHobbiesXStart, personalToHobbiesYStart)
  appendCircle(g, personalToHobbiesXEnd, personalToHobbiesYEnd)
  appendCircle(g, hobbiesToAchievementsXEnd, hobbiesToAchievementsYEnd)
  appendLinePath(g, personalLine)
  appendLinePath(g, hobbiesLine)
  appendLinePath(g, achievementsLine)
}

export default drawAchievementsToGroup
