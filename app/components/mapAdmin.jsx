import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

const Map = ({ pols, location }) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const map = L.map("map-container").setView([-0.9407953279358547, 119.9314325659433], 14);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "Map data &copy; OpenStreetMap contributors",
                maxZoom: 10,
            }).addTo(map);

            L.Control.geocoder().addTo(map);

            const drawOptions = {
                draw: {
                    marker: false,
                    polyline: false,
                    circlemarker: false,
                    circle: false,
                    rectangle: false,
                    polygon: {
                        allowIntersection: false,
                        drawError: {
                            color: "#e1e100",
                            message: "<strong>Error:</strong> Polygon edges cannot cross!",
                        },
                        shapeOptions: {
                            color: "#f00",
                            fillOpacity: 0.5,
                        },
                    },
                },
                edit: {
                    featureGroup: L.featureGroup(),
                },
            };


            const drawControl = new L.Control.Draw(drawOptions);
            map.addControl(drawControl);


            map.on(L.Draw.Event.CREATED, function (event) {
                const layer = event.layer;
                map.addLayer(layer);


                const pol = layer.getLatLngs();
                location(pol)
            });

            if (pols.length > 0) {
                L.polygon(pols).addTo(map)
            }


            return () => {
                map.remove();
            };
        }
    }, []);

    return <div id="map-container" className="w-full h-full z-10"></div>;
};

export default Map;
