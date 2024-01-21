import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Rating from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Marker = ({ lat, lng }) => (
  <div style={{
    color: 'red',
    height: '50px',
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: 'white',
  }}>
    Marker
  </div>
);


const Map = ({ setcoordinates, setbounds, coordinates, places , setChildClicked }) => {

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const handleOnChange = (e) => {
    // handle the event
    setcoordinates({ lat: e.center.lat, lng: e.center.lng });
    setbounds({ tr: e.marginBounds.ne, bl: e.marginBounds.sw });
  };

  return (
    <div style={{ height: '90vh', width: '100%', margin: '10px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAI07B9x4MbIfAwR9QOMSMhYxstd9dRjX4' }}
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options={{}}
        
        onChange={handleOnChange}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onChildClick={setChildClicked}
      >
        <LocationOnIcon/> 
      </GoogleMapReact>
    </div>
  );
};

export default Map;
