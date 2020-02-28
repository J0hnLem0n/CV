const appendCircle = (group, cx, cy) => {
  group
    .append("circle")
    .attr("fill", "transparent")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", 5)
    .transition()
    .duration(500)
    .delay(1000)
    .style("fill", "white")
}

export default appendCircle
