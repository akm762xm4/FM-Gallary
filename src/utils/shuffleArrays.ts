export const shuffleArrays = <T>(...arrays: T[][]): T[] => {
  const flattened = arrays.reduce((acc, curr) => acc.concat(curr), [])
  const shuffled = [...flattened]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}
