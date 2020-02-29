export const getLabelText = text => (text ? text.toUpperCase() : "none")
const getCustomXPos = (getXPos, xPath, textEl) =>
  getXPos
    ? getXPos(xPath, textEl)
    : xPath <= 0
    ? xPath
    : xPath - textEl.node().textLength.baseVal.value

const appendText = (el, props = {}) => {
  const { text, xPath, yPath } = props
  const { getXPos, getYPos, value } = text || {}
  getLabelText(value)
  const textEl = el.append("text")
  textEl
    .attr("fill", "transparent")
    .attr("font-family", "Nunito Regular")
    .text(getLabelText(value))
    .attr("x", getCustomXPos(getXPos, xPath, textEl))
    .attr("y", getYPos ? getYPos(yPath) : yPath - 10)
    .transition()
    .delay(3000)
    .duration(1000)
    .attr("fill", "white")
  return textEl
}
export default appendText
