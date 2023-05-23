import proj4 from "proj4";

// Define the source and destination coordinate systems
const sourceCRS = "+proj=longlat +datum=WGS84 +no_defs";
const destCRS =
  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs";

// Function to convert coordinates from the source to the destination system
export function convertCoordinates(lat, lng) {
  const latFloat = parseFloat(lat);
  const lngFloat = parseFloat(lng);

  if (Number.isFinite(latFloat) && Number.isFinite(lngFloat)) {
    const ret = proj4(sourceCRS, destCRS, [lngFloat, latFloat]);
    console.log("ret", ret);
    return proj4(sourceCRS, destCRS, [lngFloat, latFloat]);
  } else {
    console.error(`Invalid coordinates: lat=${lat}, lng=${lng}`);
    return [0, 0]; // Default to [0, 0] if the coordinates are invalid
  }
}
