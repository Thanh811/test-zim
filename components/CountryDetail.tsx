import React, {useEffect, useCallback} from "react"
import {getCountryDetail} from "../apis/country"
interface IProps {
  code: string
}
const CountryDetail = ({code}: IProps) => {
  const getInfoCountry = useCallback(async () => {
    const data = await getCountryDetail(code)
    console.log(data)
  }, [])
  useEffect(() => {
    getInfoCountry()
  },[getInfoCountry])
  return (
<h2>assad</h2>
  )
}

export default CountryDetail