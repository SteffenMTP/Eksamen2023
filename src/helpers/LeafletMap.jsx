import React from 'react'

//Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

//For at få merker til at virke
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//
const icon = L.icon({
    iconRetinaURL: iconRetina, 
    iconUrl: iconMarker,
    shadowURL: iconShadow
})



const LeafletMap = () => {
    
    // {coord = [56, 10], popupinfo = "Find os her"}

    return (
        <div>
            <MapContainer
                center={[56,10]}
                zoom={10}
                style={{width: "400px", height: "400px" }}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[56,10]} icon={icon}>
                    <Popup>
                    Find os her!!
                    </Popup>
                </Marker>

            </MapContainer>
        </div>

    )
}

export default LeafletMap