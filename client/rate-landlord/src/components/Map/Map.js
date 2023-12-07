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
        L.latLng(selectPosition?.geometry.coordinates[1], selectPosition?.geometry.coordinates[0]),
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
  const locationSelection = selectPosition
    ? [selectPosition.geometry.coordinates[1], selectPosition.geometry.coordinates[0]]
    : null;

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
          {selectPosition.addresstags.housenumber && selectPosition.addresstags.street && (
    <>
      {selectPosition.addresstags.housenumber} {selectPosition.addresstags.street}
      <br />
    </>
  )}
  {(selectPosition.addresstags.city || selectPosition.addresstags.state || selectPosition.addresstags.postcode) && (
    <>
      {selectPosition.addresstags.city} {selectPosition.addresstags.state} {selectPosition.addresstags.postcode}
      <br />
    </>
  )}
  {selectPosition.country_code.toUpperCase()}
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
