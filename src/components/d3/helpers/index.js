export const startAngle = 260 * (Math.PI / 180)
export const endAngle = 325 * (Math.PI / 180)
export const photoRadius = 60
export const skillsInnerRadius = photoRadius + 30 - 2
export const skillsOuterRadius = photoRadius + 30
export const getStartPointPath = path => path.node().getPointAtLength(0)
export const getEndPointPathArc = path =>
  path.node().getPointAtLength(path.node().getTotalLength() / 2)
export const getEndPointPath = path =>
  path.node().getPointAtLength(path.node().getTotalLength())
