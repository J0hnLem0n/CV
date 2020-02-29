import * as d3 from "d3"
import {
  getEndPointPath,
  getEndPointPathArc,
  getStartPointPath,
  skillsInnerRadius,
  skillsOuterRadius,
} from "./index"
import appendCircle from "./appendCircle"
import appendLinePath from "./appendLinePath"
import appendArcPath from "./appendArcPath"
import appendText from "./appendText"
import appendIcon from "./appendIcon"

const drawSkillsToWorkExperience = (arcs, swgContainer, transformRounds) => {
  const g = swgContainer.append("g").attr("transform", transformRounds)
  const points = arcs.reduce((initial, arc, index) => {
    const {
      startAngle,
      endAngle,
      arcData,
      startPointLineData,
      endPointLineData,
      text,
      endText,
      iconUrl,
      endIconUrl,
    } = arc
    initial.push({
      path: appendArcPath(g, { startAngle, endAngle }, arcData),
      startPointLineData,
      endPointLineData,
      text,
      endText,
      iconUrl,
      endIconUrl,
    })
    return initial
  }, [])
  points.forEach((point, index) => {
    const {
      path,
      startPointLineData,
      endPointLineData,
      text,
      endText,
      iconUrl,
      endIconUrl,
    } = point
    const { x, y } = getStartPointPath(path)
    const line = d3.line()([[x, y], ...startPointLineData(x, y)])
    appendCircle(g, x, y)
    const linePath = appendLinePath(g, line)
    const { x: xEndPointLinePath, y: yEndPointLinePath } = getEndPointPath(
      linePath
    )
    appendText(g, {
      text: text,
      xPath: xEndPointLinePath,
      yPath: yEndPointLinePath,
    })
    iconUrl && appendIcon(g, { xEndPointLinePath, yEndPointLinePath, iconUrl })
    if (index === points.length - 1) {
      const { x: xEndPoint, y: yEndPoint } = getEndPointPathArc(path)
      const line = d3.line()([
        [xEndPoint, yEndPoint],
        ...endPointLineData(xEndPoint, yEndPoint),
      ])
      appendCircle(g, xEndPoint, yEndPoint)
      const linePath = appendLinePath(g, line)
      const { x: xEndPointLinePath, y: yEndPointLinePath } = getEndPointPath(
        linePath
      )
      appendText(g, {
        text: endText,
        xPath: xEndPointLinePath,
        yPath: yEndPointLinePath,
      })
      endIconUrl &&
        appendIcon(g, {
          xEndPointLinePath,
          yEndPointLinePath,
          iconUrl: endIconUrl,
        })
    }
  })
}
export default drawSkillsToWorkExperience
