import getArcPointCoordinates from './getArcPointCoordinates'

const getArcPath = (x, y, radius, startAngle, endAngle) => {
  const start = getArcPointCoordinates(x, y, radius, endAngle)
  const end = getArcPointCoordinates(x, y, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180.0 ? "0" : "1"
  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    0, // largeArcFlag
    0,
    end.x,
    end.y,
  ].join(" ")

  return d
}
export default getArcPath