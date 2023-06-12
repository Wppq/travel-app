import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder"

const Map = ({ location }) => {

    const [lat, setLat] = useState(-0.9407953279358547)
    const [lng, setLng] = useState(119.9314325659433)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const map = L.map("map-container").setView([lat, lng], 14);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "Map data &copy; OpenStreetMap contributors",
                maxZoom: 18,
            }).addTo(map);

            L.Control.geocoder().addTo(map);

            map.on("click", (e) => {
                setLat(e.latlng.lat)
                setLng(e.latlng.lng)
            })

            L.marker([lat, lng], {
                icon: L.icon({
                    iconUrl: "/office.png",
                    iconAnchor: [10, 10]
                })
            }).addTo(map)
            const newData = {
                lat: lat,
                long: lng
            }
            location(newData)

            return () => {
                map.remove();
            };
        }
    }, [lat, lng]);

    return <div id="map-container" className="w-full h-full z-10"></div>;
};

export default Map;