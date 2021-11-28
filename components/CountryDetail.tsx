import React, {useEffect, useCallback, useState} from "react"
import {getCountryDetail, ICountryInfo} from "../apis/country"
import Typography from '@mui/material/Typography';
import Image from 'next/image'

interface IProps {
  code: string
}
const CountryDetail = ({code}: IProps) => {
  // const [infoCountry, setInfoCountry] = useState<string>('')
  const [infoCountry, setInfoCountry] = useState<ICountryInfo | null>(null)
  
  const getInfoCountry = useCallback(async () => {
    const data: ICountryInfo[] = await getCountryDetail(code)
    setInfoCountry(data && data[0] ? data[0] : null)
  }, [code])

  useEffect(() => {
    getInfoCountry()
  },[getInfoCountry])

  return (
    <>
    <Image
      // loader={myLoader}
      src={infoCountry?.flags?.svg ?? `https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2020/08/112815953-stock-vector-no-image-available-icon-flat-vector.jpg`}
      alt="Picture of the author"
      width="100%"
      height="100%"
    />
    <Typography>Name: {infoCountry?.name?.common ?? ''}</Typography>
    <Typography>Population: {infoCountry?.population ?? ''}</Typography>
    <Typography>Capital: {infoCountry?.capital ?? ''}</Typography>
    <Typography>Region: {infoCountry?.region ?? ''}</Typography>
    <Typography>Subregion: {infoCountry?.subregion ?? ''}</Typography>
    </>
    // <Typography>{infoCountry}</Typography>
  )
}

export default CountryDetail