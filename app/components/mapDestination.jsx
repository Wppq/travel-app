import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapDest = ({ location }) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const map = L.map("map-container-dest").setView([location.lat, location.long], 14);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "Map data &copy; OpenStreetMap contributors",
                maxZoom: 18,
            }).addTo(map);

            L.marker([location.lat, location.long], {
                icon: L.icon({
                    iconUrl: "/office.png",
                    iconAnchor: [10, 10]
                })
            }).addTo(map)

            return () => {
                map.remove();
            };
        }
    }, []);

    return <div id="map-container-dest" className="w-full h-80"></div>;
};

export default MapDest;