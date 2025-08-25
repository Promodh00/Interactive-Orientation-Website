import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mapPage.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

// Set default icon globally
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const markerData = [
    {
        id: 1,
        title: 'GP Square',
        lat: 6.9271,
        lng: 79.8612,
        highlighted: true,
        nearby: [
            { id: 'n1', title: 'GP Coffee Shop', lat: 6.9273, lng: 79.8615 },
            { id: 'n2', title: 'GP Auditorium', lat: 6.9269, lng: 79.8610 }
        ]
    },
    {
        id: 2,
        title: 'Dialog Building',
        lat: 6.9285,
        lng: 79.8605,
        highlighted: false,
        nearby: []
    },
    {
        id: 3,
        title: 'Spencer Building',
        lat: 6.9277,
        lng: 79.8620,
        highlighted: false,
        nearby: []
    },
    {
        id: 4,
        title: 'IIT Kegalle',
        lat: 7.2511,
        lng: 80.3464,
        highlighted: false,
        nearby: [
            { id: 'n3', title: 'Kegalle Library', lat: 7.2515, lng: 80.3469 },
            { id: 'n4', title: 'Kegalle Hall', lat: 7.2508, lng: 80.3457 }
        ]
    },
    {
        id: 5,
        title: 'IIT Galle',
        lat: 6.0535,
        lng: 80.2210,
        highlighted: false,
        nearby: [
            { id: 'n5', title: 'Galle Lab', lat: 6.0539, lng: 80.2214 },
            { id: 'n6', title: 'Galle Canteen', lat: 6.0530, lng: 80.2205 }
        ]
    }
];

const defaultIcon = () =>
    new L.Icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

const highlightIcon = () =>
    new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

const nearbyIcon = () =>
    new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

function MapFlyTo({ center }) {
    const map = useMap();
    if (center) {
        map.flyTo(center, 17); // Zoom in and move
    }
    return null;
}

export default function MapPage() {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <div className="mobile-page-wrapper">
            {/* Left: Card Info Section */}
            <div className="card-container">
                <div className="card-scroll">
                    {markerData.map((item) => (
                        <div
                            key={item.id}
                            className="info-card"
                            onClick={() => setSelectedMarker(item)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src="/images/GPBuilding.png" alt={item.title} className="card-image" />
                            <div className="card-text">
                                <h3>{item.title}</h3>
                                <p>Description</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Map Section */}
            <div className="map-container">
                <MapContainer
                    center={[6.9271, 79.8612]}
                    zoom={16}
                    scrollWheelZoom={true}
                    className="leaflet-map"
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Move map to selected marker */}
                    {selectedMarker && <MapFlyTo center={[selectedMarker.lat, selectedMarker.lng]} />}

                    {/* Main markers */}
                    {markerData.map((marker) => (
                        <Marker
                            key={marker.id}
                            position={[marker.lat, marker.lng]}
                            icon={marker.highlighted ? highlightIcon() : defaultIcon()}
                        >
                            <Popup>{marker.title}</Popup>
                        </Marker>
                    ))}

                    {/* Nearby markers (only when a location is selected) */}
                    {selectedMarker?.nearby?.map((n) => (
                        <Marker
                            key={n.id}
                            position={[n.lat, n.lng]}
                            icon={nearbyIcon()}
                        >
                            <Popup>{n.title}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
