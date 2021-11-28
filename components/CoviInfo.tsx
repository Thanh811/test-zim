import React, { useState } from "react";
import Chart from "react-apexcharts";
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
      opposite: true,
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

const CoviInfo = () =>  {
  
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
