import MaterialTable, { Column } from "@material-table/core";
import React, { useState } from "react";
import { ICountry } from "../apis/country";
import InformationDetail from "./InformationDetail";
interface IProps {
  listCountry: ICountry[];
}
export interface ITable {
  id: string;
  country: string;
  country_code: string;
  slug: string;
  new_confirmed: number;
  total_confirmed: number;
  new_deaths: number;
  total_deaths: number;
  new_recovered: number;
  total_recovered: number;
  date: string;
}

const ListCountry = ({ listCountry }: IProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCode, setSelectedCode] = useState('')
  const columns: Column<ITable>[] = [
    { title: "ID", field: "id", hidden: true },
    { title: "Country", field: "country", sorting: false },
    { title: "Country Code", field: "country_code", sorting: false },
    { title: "Slug", field: "slug", sorting: false },
    { title: "New Confirmed", field: "new_confirmed", sorting: false },
    {
      title: "Total Confirmed",
      field: "total_confirmed",
      defaultSort: "desc",
      // sorting: false
    },
    { title: "New Deaths", field: "new_deaths", sorting: false },
    {
      title: "Total Deaths",
      field: "total_deaths",
      defaultSort: "desc",
      // sorting: false
    },
    { title: "New Recovered", field: "new_recovered", defaultSort: "asc" },
    { title: "Total Recovered", field: "total_recovered", sorting: false },
    { title: "Date", field: "date", sorting: false },
  ];
  const data: ITable[] = listCountry.map(
    ({
      ID,
      Country,
      CountryCode,
      Slug,
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
      Date,
    }) => ({
      id: ID,
      country: Country,
      country_code: CountryCode,
      slug: Slug,
      new_confirmed: NewConfirmed,
      total_confirmed: TotalConfirmed,
      new_deaths: NewDeaths,
      total_deaths: TotalDeaths,
      new_recovered: NewRecovered,
      total_recovered: TotalRecovered,
      date: Date,
    })
  );
  return (
    <>
      {openDialog && <InformationDetail open={openDialog} selectedCode={selectedCode} onClose={()=>{setOpenDialog(!openDialog);}}/>}
      <MaterialTable
        title="List of countries which are most affected by Covid-19"
        data={data}
        columns={columns}
        onRowClick={(e,rowData: ITable) => {
          console.log(rowData)
          setSelectedCode(rowData.country_code)
          setOpenDialog(!openDialog);
        }}
        options={{
          sorting: true,
          search: false,
        }}
      />
    </>
  );
};

export default ListCountry;
