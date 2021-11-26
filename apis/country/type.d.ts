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
