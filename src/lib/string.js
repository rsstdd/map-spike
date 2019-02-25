const camelize = str => {
  return str
    .split(' ')
    .map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('')
}

export default camelize
