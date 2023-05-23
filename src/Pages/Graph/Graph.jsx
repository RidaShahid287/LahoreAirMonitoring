import React , {useEffect, useState} from 'react'
import "./Graph.scss"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

export default function Graph() {
   useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const [state, setstate] = useState({
    options: {
      chart: {
        id: "basic-bar"
       
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]  //value1, value2
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91] //value1 value2
      },
    ]
  }
  )
  return (
    <section className="main container ">
      <br></br><br></br>
            <div className="secTitle">
        <h3 data-aos="fade-right" className="title">The Graphs</h3>
      </div>
      <div className="secContent1 grid">
            <div data-aos="fade-up" className="singleDestination">
              <div className="cardInfo">
                  <h3 className="destTitle">Check out The Graphs</h3>
                  <br></br>
                  <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
                </div>
            </div>
            <div data-aos="fade-up" className="singleDestination">
              <div className="cardInfo">
                  <h3 className="destTitle">Check out The Graphs</h3>
                  <br></br>
                  <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
                </div>
            </div>
            <div data-aos="fade-up" className="singleDestination">
              <div className="cardInfo">
                  <h3 className="destTitle">Check out The Graphs</h3>
                  <br></br>
                  <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
                </div>
            </div>
            <div data-aos="fade-up" className="singleDestination">
              <div className="cardInfo">
                  <h3 className="destTitle">Check out The Graphs</h3>
                  <br></br>
                  <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="500"
            />
                </div>
            </div>
            <div data-aos="fade-up" className="singleDestination">
              <div className="cardInfo">
                  <h3 className="destTitle">Check out The Graphs</h3>
                  <br></br>
                  <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="500"
            />
                </div>
            </div>
            <div data-aos="fade-up" className="singleDestination">
              <div className="cardInfo">
                  <h3 className="destTitle">Check out The Graphs</h3>
                  <br></br>
                  <Chart
              options={state.options}
              series={state.series}
              type="heatmap"
              width="500"
            />
                </div>
            </div>
            
      </div>
    </section>
  ) 
  
}


