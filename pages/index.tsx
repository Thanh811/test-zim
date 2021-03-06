import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ICovidInfo } from '../apis/country'
import ListCountry from '../components/ListCountry'
// import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'

interface IProps {
  dataCovid: ICovidInfo
  
}
const Home = ({dataCovid}: IProps): JSX.Element => {
  
  return (
     <ListCountry listCountry={dataCovid.Countries} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const res = await fetch(`https://api.covid19api.com/summary`)
  const dataCovid = await res.json()

  if (!dataCovid) {
    return {
      notFound: true,
    }
  }
  

  return {
    props: { dataCovid }, // will be passed to the page component as props
  }
}


export default Home
