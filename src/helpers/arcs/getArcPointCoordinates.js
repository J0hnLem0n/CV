const getArcPointCoordinates = (centerXPos, centerYPos, radius, endAngle) => {
  const angleInRadians = ((endAngle - 90) * Math.PI) / 180.0
  return {
    x: centerXPos + radius * Math.cos(angleInRadians),
    y: centerYPos + radius * Math.sin(angleInRadians),
  }
}

export default getArcPointCoordinates