import axios from 'axios'
import getPreciseLocation from '../../../lib/get-precise-location'

const getProviderInformation = async() => {
  const STATIC_CONTENT_ROOT = `https://s3-us-west-2.amazonaws.com/market-service-static-content-hosting/providers/`
  const PROVIDER_SERVICE_ROOT = `https://provider.dev.getmigo.com/v2/availability`

  const [lat, lng] = await getPreciseLocation()

  console.log(lat, lng)

  const { data } = await axios(
    `${PROVIDER_SERVICE_ROOT}?originLat=${lat}&originLng=${lng}`
  )

  data.forEach(async provider => {
    provider.icon2 = await axios(
      `${STATIC_CONTENT_ROOT}${provider.product_id}/1/btn_${
        provider.product_id
      }@2x.png`,
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
        withCredentials: true,
      }
    )
    provider.icon3 = await axios(
      `${STATIC_CONTENT_ROOT}${provider.product_id}/1/btn_${
        provider.product_id
      }@3x.png`,
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
        withCredentials: true,
      }
    )
  })

  return data
}

export default getProviderInformation
