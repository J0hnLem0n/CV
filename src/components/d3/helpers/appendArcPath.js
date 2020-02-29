import * as d3 from "d3"

const appendArcPath = (group, datum, arc) => {
  return group
    .append("path")
    .datum(datum)
    .attr("d", arc)
    .attr("fill", "white")
    .transition()
    .duration(1000)
    .attrTween("d", function(d) {
      const start = { startAngle: 0, endAngle: 0 }
      const interpolate = d3.interpolate(start, d)
      return function(t) {
        return arc(interpolate(t))
      }
    })
}
export default appendArcPath
