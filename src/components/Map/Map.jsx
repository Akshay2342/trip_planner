import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from "react";
import polyline from "@mapbox/polyline";
import mapStyles from "./styles";
import { Polyline } from "@react-google-maps/api";
import parse from 'html-react-parser'


const Map = ({ setcoordinates, setbounds, coordinates, places , setChildClicked, userCoordinates , dir }) => {
  const [map, setMap] = useState(null);
  const [decodedPath, setDecodedPath] = useState([]); // Store decoded path
  const [showDirections , setShowDirections] = useState(true);
  const [directions , setDirections] = useState([]);
  const [origin, setorigin] = useState(null);
  const [destination, setdestination] = useState(null);
  const [waypoints, setwaypoints] = useState(null);


  //Decoding polyline and storing it in decodedPath

  useEffect(() => {
    console.log(directions);
  }, [directions]);

  useEffect(() => {
    const encodedPolyline = "_p~iF~ps|U_ulLnnqC_mqNvxq`@"; // Replace with your actual encoded polyline
    const decoded = polyline.decode(encodedPolyline).map(([lat, lng]) => ({ lat: lng, lng: lat }));
    console.log(decoded);
    setDecodedPath(decoded);
  }, []);

  const handleApiLoaded = (map, maps) => {
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsService.route(
      {
        origin: { lat: 37.77, lng: -122.447 },
        destination: { lat: 37.768, lng: -122.511 },
        travelMode: maps.TravelMode.DRIVING,
        waypoints: [
          {
            location: { lat: 37.79, lng: -122.41 },
            stopover: true,
          },
          {
            location: { lat: 37.79, lng: -122.41 },
            stopover: true,
          },
        ],
      },
      
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
          console.log(response?.routes[0].legs[0].steps[0].instructions    )
          const stepInstructions = response?.routes[0].legs.map(leg => leg.steps.map(step => step.instructions));
          setDirections(...stepInstructions);
         {dir &&  directionsRenderer.setMap(null);}
          // console.log(directions)
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };

  const handleOnChange = (e) => {
    // handle the event
    setcoordinates({ lat: e.center.lat, lng: e.center.lng });
    setbounds({ tr: e.marginBounds.ne, bl: e.marginBounds.sw });
  };
  const Marker = ({ lat, lng ,place  }) => {
    return (
      <Paper elevation={3} sx={{height : '10', width :'10', backgroundColor: '#f5f5f5' }}  >
        <LocationOnIcon/>
        <Typography sx={{fontSize : '10px'}}>{place?.name?.substring(0,7)}</Typography>
      </Paper>
    )
  }

  return (
    <div style={{ height: '90vh', width: '100%', margin: '10px' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ 
              key: 'AIzaSyAI07B9x4MbIfAwR9QOMSMhYxstd9dRjX4', 
              libraries: ['geometry'] 
            }}
            defaultCenter={userCoordinates}
            defaultZoom={14}
            center={coordinates} 
            zoom={14} 
            margin={[50, 50, 50, 50]}
            options={{ styles : mapStyles,}}
            onChange={handleOnChange}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            onChildClick={setChildClicked}
          >
  {places?.map((place , i) => {
    // console.log('Rendering marker for place:', place);
    return (
      <Marker 
        lat={parseFloat(place.latitude)} 
        lng={parseFloat(place.longitude)} 
        place={place}
        key={i}
      />
    );
  })}
        {map && (
        <Polyline
          path={decodedPath} // Use the decoded path
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      )}
</GoogleMapReact>

    <div>
        {directions && directions.map((direction, index) => (
          <p key={index}>{parse(direction)}</p>
        ))}
      </div>
    </div>
  );
};

export default Map;
