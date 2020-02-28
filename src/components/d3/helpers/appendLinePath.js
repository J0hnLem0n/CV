import * as d3 from "d3"
import { getEndPointPath } from "./index"

const appendLinePath = (group, line) => {
  const path = group
    .append("path")
    .style("stroke", "white")
    .style("stroke-width", 4)
    .attr("d", line)
    .attr("fill", "none")
  const totalPath = path.node().getTotalLength()
  path
    .attr("stroke-dasharray", totalPath + " " + totalPath)
    .attr("stroke-dashoffset", totalPath)
    .transition()
    .delay(2000)
    .duration(1000)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0)
  return path
}

export default appendLinePath
