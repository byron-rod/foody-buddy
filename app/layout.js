"use client";
import { Raleway } from "next/font/google";

import "./globals.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { UserLocationContext } from "../context/UserLocationContext";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <html lang="en">
      <body className={raleway.className}>
        <SelectedBusinessContext.Provider
          value={{ selectedBusiness, setSelectedBusiness }}
        >
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <NavBar />
            {children}
          </UserLocationContext.Provider>
        </SelectedBusinessContext.Provider>
      </body>
    </html>
  );
}
