import GoogleMapReact from "google-map-react";

export default function Map(){
    const mapOptions = {
        center: { lat: -0.42013, lng: 36.94759 },
        zoom: 8
    };    

    return (
        <div style={{ height: "250px", width: "100%" }} className="rounded-2xl">
            <GoogleMapReact
                bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
                defaultCenter={mapOptions.center}
                defaultZoom={mapOptions.zoom}
            >
                {/* Add your markers here */}
                
            </GoogleMapReact>
        </div>
    );
}