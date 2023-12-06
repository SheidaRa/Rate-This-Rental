import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

const icon = L.icon({
  iconUrl: "/pin.svg",
  iconSize: [38, 38], 
});

const position = [44.95, -93.09];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}

export default function Maps(props) {

  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  useEffect(() => {
    console.log({props});
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=PcY9RDLa27ZGAQ2dna7O"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
          {selectPosition.address.house_number && selectPosition.address.road && (
    <>
      {selectPosition.address.house_number} {selectPosition.address.road}
      <br />
    </>
  )}
  {(selectPosition.address.city || selectPosition.address.state || selectPosition.address.postcode) && (
    <>
      {selectPosition.address.city} {selectPosition.address.state} {selectPosition.address.postcode}
      <br />
    </>
  )}
  {selectPosition.address.country}
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
