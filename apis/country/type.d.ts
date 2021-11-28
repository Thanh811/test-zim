export interface ICountry {
  ID: string
  Country: string
  CountryCode: string
  Slug: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: string
  // Premium: {}
}
export interface ICovidInfo {
  Countries: ICountry[]
  Date: string
  ID: string
}

export interface ICountryInfo {
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  population: number
  capital: string[]
  region: string,
  subregion: string,
}

export interface ICoviInfo {
  Confirmed:number
  Deaths:number
  Recovered:number
  Active:number
  Date: string
}
