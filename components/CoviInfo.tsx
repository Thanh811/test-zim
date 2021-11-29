import React, { useState, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic'
import { getDataCovi } from "../apis/country";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const data = {
  options: {
    chart: {
      id: "line",
      toolbar: {
        show: true,
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    colors: ["#247BA0","#FF1654", "#5416ff"],
  },

  series: [
    {
      name: "Confirmed",
      data: [14, 2, 25, 15, 25, 28, 38, 46]
    },
    {
      name: "Deaths",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    },
    {
      name: "Recovered",
      data: [10, 19, 57, 63, 44, 54, 5, 8]
    }
  ],
  stroke: {
    curve: 'smooth',
  },
  yaxis: [
    {
      title: {
        text: "Confirmed"
      },
    },
    {
      title: {
        text: "Deaths"
      }
    },
    {
      title: {
        text: "Recovered"
      },
    },
  ],

};
interface IProps {
  slug: string
}
const CoviInfo = ({slug}: IProps) =>  {
  const [categories, setCategories] = useState<string[]>([])
  const [confirmed, setConfirmed] = useState<string[]>([])
  const [deaths, setDeaths] = useState<string[]>([])
  const [recovered, setRecovered] = useState<string[]>([])
  const infoCovi = useCallback(async () => {
    const to = new Date().toISOString()
    const from = new Date()
    from.setDate(from.getDate() - 5)
    const data = await getDataCovi(slug, from.toISOString(), to)
    console.log("🚀 ~ file: CoviInfo.tsx ~ line 70 ~ infoCovi ~ data", data)
    // setInfoCountry(data && data[0] ? data[0] : null)
  }, [slug])
  useEffect(() => {
    infoCovi()
  }, [infoCovi])
  const [dataCovid, setDataCovid] = useState(data)
  
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={dataCovid.options}
              series={dataCovid.series}
              type="line"
              width="500"
            />
          </div>
            </div>
      </div>
    );
  
}

export default CoviInfo;
