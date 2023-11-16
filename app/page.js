"use client";
import Image from "next/image";
import CategoryList from "./components/Home/CategoryList";
import RangeSelect from "./components/Home/RangeSelect.jsx";
import GoogleMapView from "./components/Home/GoogleMapView";
import { useEffect, useState, useContext } from "react";
import GlobalApi from "../Shared/GlobalApi";
import { UserLocationContext } from "../context/UserLocationContext";
import SkeltonLoading from "./components/SkeltonLoading";
import BusinessList from "./components/Home/BusinessList";

export default function Home() {
  const [category, setCategory] = useState("");
  const [radius, setRadius] = useState(1000);
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    if (category) {
      setLoading(true);

      GlobalApi.getGooglePlace(
        category,
        radius,
        userLocation.lat,
        userLocation.lng
      ).then((resp) => {
        console.log(resp.data.product.results);
        setBusinessList(resp.data.product.results);
        // setBusinessListOrg(resp.data.product.results);
        setLoading(false);
      });
    }
  };

  return (
    <div
      className="grid 
    grid-cols-1
    md:grid-cols-4 "
    >
      <div className="p-2">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <RangeSelect onRadiusChange={(value) => setRadius(value)} />
      </div>
      <div className="col-span-3 mt-5">
        <GoogleMapView businessList={businessList} />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3"
        >
          {!loading ? (
            <BusinessList businessList={businessList} />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
