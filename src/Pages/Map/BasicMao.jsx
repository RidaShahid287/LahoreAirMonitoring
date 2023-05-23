import React, { useEffect, useState } from "react";
import "./Mao.scss";
import { Map, TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { convertCoordinates } from "./coordinateUtils";
import Chart from "react-apexcharts";

import cities from "./cities.json";

const markerIcon = new L.Icon({
  iconUrl: require("../../Assets/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
export default function BasicMao() {
  console.log("cities", cities);
  const [center, setCenter] = useState({
    /* lat: 31.582045, lng: 74.329376 */ lat: 31.582045,
    lng: 74.329376,
  });
  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

  return (
    <>
      <section className="main ">
        <div className="secContent">
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
            {cities.map((city, idx) => {
              const [convertedLng, convertedLat] = convertCoordinates(
                city.lat,
                city.lng
              );

              return (
                <Marker
                  position={[city.lat, city.lng]}
                  icon={markerIcon}
                  key={idx}
                >
                  <Popup>
                    <b>
                      {city.city}, {city.country} ,
                      <p>Population: {city.population}</p>
                    </b>
                    <Chart
                      options={{
                        chart: {
                          id: "basic-bar",
                        },
                        xaxis: {
                          categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                            1999,
                          ],
                        },
                      }}
                      series={[
                        {
                          name: "series-1",
                          data: [30, 40, 45, 50, 49, 60, 70, 91],
                        },
                    
                      ]}
                      type="line"
                      width="300"
                    />
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </section>
    </>
  );
}
