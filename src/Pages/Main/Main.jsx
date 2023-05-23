import React, { useEffect } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries } from "./countries";
import { CiCloud } from "react-icons/ci";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import "./Main.scss";
import img1 from "../../Assets/map1.jpg";
import img2 from "../../Assets/piechart.jpg";
import img3 from "../../Assets/pollution.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "../../Components/Footer/Footer";

export const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="main container ">
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Our Projects
          </h3>
        </div>
        <div className="secContent11 grid">
          <div
            data-aos="fade-up"
            className="singleDestination"
            style={{ lineHeight: "30px" }}
          >
            Air quality refers to the condition of the air in a specific area,
            particularly in terms of the presence of pollutants and the overall
            healthiness of the air. It is a critical aspect of environmental and
            public health as poor air quality can have significant impacts on
            human well-being and the environment. Air pollution, caused by
            various sources such as industrial emissions, vehicle exhaust, and
            natural factors, can lead to a range of health problems, including
            respiratory issues, cardiovascular diseases, and even premature
            death. fforts to improve air quality involve implementing
            regulations, adopting cleaner technologies, promoting sustainable
            practices, and raising awareness about the importance of reducing
            pollution. Governments, environmental agencies, and organizations
            play a vital role in monitoring and reporting air quality data to
            inform the public and guide policy decisions.
          </div><br></br><br></br><br></br>
          <div data-aos="fade-up" className="singleDestination">
            <div style={{ margin: "auto", width: "760px", height: "600px" }}>
              <VectorMap
                map={worldMill}
                containerStyle={{
                  width: "700px",
                  height: "600px",
                }}
                backgroundColor="#00008B"
                series={{
                  regions: [
                    {
                      scale: colorScale,
                      values: countries,
                      min: 0,
                      max: 100,
                    },
                  ],
                }}
                /*         onRegionTipShow={function reginalTip(event, label, code){

            }} */
              />
            </div>
          </div>
        </div><br></br><br></br><br></br><br></br>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            3 Steps To Efficiency
          </h3>
          <p>
            We guide you through the whole process from consultation to
            implementation, making it as simple and seamless as possible for you
          </p>
        </div>
        <div className="secContent grid">
          <div data-aos="fade-up" className="singleDestination">
            <div className="cardInfo">
              <div className="box">
                <CiCloud style={{color: "white", fontSize: "45px"}} />
              </div>
              <h3>PRODUCTS CHOICE</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora itaque vel consectetur unde rem, numquam harum consequatur eligendi nam a?</p>
            </div>
          </div>
          <div data-aos="fade-up" className="singleDestination">
          <div className="cardInfo">
              <div className="box1">
                <BsGlobeAmericas style={{color: "white", fontSize: "45px"}} />
              </div>
              <h3>DELIVERY</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam quasi voluptates sed dicta nostrum odio nihil deserunt expedita excepturi!</p>
            </div>
          </div>
          <div data-aos="fade-up" className="singleDestination">
          <div className="cardInfo">
              <div className="box2">
                <BiSupport style={{color: "white", fontSize: "45px"}} />
              </div>
              <h3>SUPPORT</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nisi praesentium cum sunt porro voluptatibus tempore debitis consectetur cumque vero.</p>
            </div>
          </div>
        </div>
      </section>
      <br></br><br></br><br></br><br></br>
      <Footer />
    </>
  );
};
