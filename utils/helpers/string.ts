export const isValidEmail = (str: string) => {
  const emailRegEx = /\b[+\w\.-]{1,25}@[\w-]{1,25}\.\w{1,25}\b/gi
  const matches = str.matchAll(emailRegEx)
  return Array.from(matches).length === 1
}
/* Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5623914#5623914 */
export function rgbToHex(rgbStr: string) {
  const rgbSplited = rgbStr.split(',')

  const r = +rgbSplited[0].split('(')[1].trim()
  const g = +rgbSplited[1].trim()
  const b = +rgbSplited[2].split(')')[0]

  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)
}

export const isPositiveIntegerOrZero = (numberStr: string) => {
  const number = parseInt(numberStr, 10)

  if (isNaN(number)) return false
  if (number < 0) return false
  return true
}
