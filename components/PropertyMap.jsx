"use client";
import { useEffect, useState } from "react";
import { setDefaults, fromAddress } from "react-geocode";

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "500px",
  });

  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
    language: "en",
    region: "us",
  });

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const res = await fromAddress(
          `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
        );

        // check geoCode result
        if (res.results.length == 0) {
          setGeocodeError(true);
          return;
        }

        const { lat, lng } = res.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({
          ...viewport,
          latitude: lat,
          longitude: lng,
        });
      } catch (error) {
        setGeocodeError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCoords();
  }, []);

  if (loading) {
    return <h3>Loading .......</h3>;
  }
  if (geocodeError) {
    return <div clasName="text-xl"> NO location data found</div>;
  }

  return <div>Map Data</div>;
};

export default PropertyMap;
4831355284887671;
