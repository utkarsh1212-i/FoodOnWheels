"use client";
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import SearchBar from "./SearchBar";

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const Map = () => {
  const [truck, setTruck] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const positionoptions = useMemo(
    () => ({
      enableHighAccuracy: true,
      timeout: 5000,
      // maximumAge: 0,
    }),
    []
  );
  const success = (position) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        console.log(result);
        if (result.state == "granted") {
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            success,
            errors,
            positionoptions
          );
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
      });
    }
  }, []);

  //   useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLat(position.coords.latitude);
  //         setLng(position.coords.longitude);
  //       },
  //       error,
  //       options
  //     );
  //     console.log("rendering", lat, lng);
  //   }, [lat, lng]);
  const mapRef = useRef();
  const center = useMemo(
    () => ({
      lat: 28.704,
      lng: 77.102,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const options = useMemo(
    () => ({
      mapId: "83d2d5b84eb5f787",
      //   disableDefaultUI: true,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <SearchBar
        setOffice={(position) => {
          setOffice(position);
          mapRef.current?.panTo(position);
        }}
      />

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="containerStyle"
        options={options}
        onLoad={onLoad}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
};

export default Map;
