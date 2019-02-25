// Promisified GeoLocation API
const getPreciseLocation = () => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(pos => {
      resolve([pos.coords.latitude, pos.coords.longitude])
    })
  })
}

export default getPreciseLocation
