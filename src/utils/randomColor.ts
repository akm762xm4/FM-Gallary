export function generateRandomColor() {
  const red = Math.floor(Math.random() * 200 + 55) // 55 to 255
  const green = Math.floor(Math.random() * 200 + 55) // 55 to 255
  const blue = Math.floor(Math.random() * 200 + 55) // 55 to 255

  const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`

  return hexColor
}
