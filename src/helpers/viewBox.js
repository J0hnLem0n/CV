export const startPointX = 0
export const startPointY = 0

export const getViewBoxSize = () => typeof window !== `undefined`
  ? window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth
  : 0

export const viewBoxWidth = 1200
export const viewBoxHeight = 1200

export const defaultData = [startPointX, startPointY, viewBoxWidth, viewBoxHeight]
