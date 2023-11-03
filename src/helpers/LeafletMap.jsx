import React from 'react'

//LEAFLET
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//MARKER
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//ICON
const icon = L.icon({
    iconRetinaURL: iconRetina, 
    iconUrl: iconMarker,
    shadowURL: iconShadow
})

const LeafletMap = () => {
    
    return (
        <div>
            <MapContainer
                center={[56.40464943513625,10.887165776612292]}
                zoom={10}
                style={{width: "100%", height: "400px" }}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[56.40464943513625,10.887165776612292]} icon={icon}>
                    <Popup>
                    Find os her!!
                    </Popup>
                </Marker>

            </MapContainer>
        </div>

    )
}

export default LeafletMap