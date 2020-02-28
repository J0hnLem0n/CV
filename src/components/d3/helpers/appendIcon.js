import * as d3 from "d3"
import React from "react"

const appendIcon = (g, props) => {
  const { xEndPointLinePath, yEndPointLinePath, iconUrl } = props
  ;(async () => {
    const svgData = await d3.xml(iconUrl)
    const svg = d3.select(svgData.documentElement)
    const size = 64
    svg
      .attr("stroke", "transparent")
      .attr("width", size)
      .attr("height", size)
      .attr(
        "x",
        xEndPointLinePath < 0 ? xEndPointLinePath - size : xEndPointLinePath
      )
      .attr("y", yEndPointLinePath - size / 2)
      //TODO: анимацию объединить с appendText
      .transition()
      .delay(3000)
      .duration(1000)
      .attr("stroke", "white")
    g.node().append(svg.node())
  })()
}
export default appendIcon
