import { RGBColor } from 'react-color'

export const insertItemToArr = (arr?: any, item?: any, index?: number) => {
  return [...arr.slice(0, index), item, ...arr.slice(index)]
}

export const convertToRgba = (color: RGBColor) => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}
