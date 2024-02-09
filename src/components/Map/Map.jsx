import GoogleMapReact from "google-map-react";
import { List, Paper, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect, useContext } from "react";
import mapStyles from "./styles";
import { Polyline } from "@react-google-maps/api";

import { SelectedPlaceContext } from './SelectedPlaceContext';
import { classDeclaration } from "@babel/types";
import {Button} from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";



const Map = ({ setcoordinates, setbounds, coordinates, places , setChildClicked, userCoordinates , dir , ListPlaces , directions , setDirections}) => {
  const [map, setMap] = useState(null);
  const [decodedPath, setDecodedPath] = useState([]); 
  const [showDirections , setShowDirections] = useState(true);

  const [origin, setorigin] = useState(null);
  const [destination, setdestination] = useState(null);
  const [waypoints, setwaypoints] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapsApi, setMapsApi] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const {selectedPlace, setSelectedPlace} = useContext(SelectedPlaceContext);
  const [directionsService, setDirectionsService] = useState(null);
  //Decoding polyline and storing it in decodedPath

  useEffect(() => {
    console.log(directions);
  }, [directions]);


  const handleApiLoaded = (map, maps) => {
    setMapInstance(map);
    setMapsApi(maps);
  };

  // RENDERING DIRECTIO
  useEffect(() => {
    if (mapsApi) {
      const service = new mapsApi.DirectionsService();
      const renderer = new mapsApi.DirectionsRenderer();
      setDirectionsRenderer(renderer);
      setDirectionsService(service);
    }
  }, [mapsApi]);

  const RenderDirections = (map, maps , ListPlaces) => {
    // List Places should be array of { lat : , lng : };
    console.log("comming TO render directions")
    ListPlaces = ListPlaces.filter(place => {
      let lat = parseFloat(place.lat);
      let lng = parseFloat(place.lng);
      return !isNaN(lat) && !isNaN(lng);
    });
    
    console.log({ListPlaces})
    if(!ListPlaces || ListPlaces.length < 2){
      ListPlaces = [{lat: 37.77, lng: -122.447}, { lat: 37.79, lng: -122.41 }, { lat: 37.79, lng: -122.41 }, {lat: 37.768, lng: -122.511 }]
    }
    // if(!map || !maps) return;
    // const directionsService = new maps.DirectionsService();
    // const directionsRenderer = new maps.DirectionsRenderer();
    directionsRenderer?.setMap(null);
    let n = ListPlaces.length;
    const waypts = ListPlaces.slice(1, n-1).map(place => {
      return {
        location: { lat: place.lat, lng: place.lng },
        stopover: true,
      }
    });
    directionsRenderer.setMap(map);
    setDirectionsRenderer(directionsRenderer);
    directionsService.route(
      {
        origin: { lat: ListPlaces[0].lat, lng: ListPlaces[0].lng },
        destination: { lat: ListPlaces[n-1].lat, lng: ListPlaces[n-1].lng },
        travelMode: maps.TravelMode.DRIVING,
        // waypoints: [
        //   // {
        //   //   location: { lat: 37.79, lng: -122.41 },
        //   //   stopover: true,
        //   // },
        //   // {
        //   //   location: { lat: 37.79, lng: -122.41 },
        //   //   stopover: true,
        //   // },

        // ],
        waypoints: waypts,
      },
      
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
          console.log(response?.routes[0].legs[0].steps[0].instructions    )
          const stepInstructions = response?.routes[0].legs.map(leg => leg.steps.map(step => step.instructions));
          setDirections(...stepInstructions);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };
  useEffect(() => {
    console.log({ListPlaces })
    RenderDirections(mapInstance, mapsApi, ListPlaces);
  }, [ListPlaces]);


  const handleOnChangeMap = (e) => {
    setcoordinates({ lat: e.center.lat, lng: e.center.lng });
    setbounds({ tr: e.marginBounds.ne, bl: e.marginBounds.sw });
  };

  // SETTING THE MARKER
  const Marker = ({ lat, lng, place }) => {
    return (
      <Paper elevation={3} sx={{height : '10', width :'10', backgroundColor: '#f5f5f5',cursor:'pointer' }}  >
        <LocationOnIcon onClick={() => {setSelectedPlace( [...selectedPlace, place])}}/>
        <Typography sx={{fontSize : '10px'}}>{place?.name?.substring(0,9)}</Typography>
      </Paper>
    )
}
  const DirectionStop = () => {
    directionsRenderer?.setMap(null);
    setDirections([]);
  }
  useEffect(() => {
    if (map && mapsApi) {
      {dir &&  directionsRenderer?.setMap(null);}
    }
  }, [dir]);

  return (
    <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ 
              key: 'AIzaSyAI07B9x4MbIfAwR9QOMSMhYxstd9dRjX4', 
              libraries: ['geometry'] 
            }}
            defaultCenter={userCoordinates}
            defaultZoom={14}
            center={coordinates} 
            zoom={14} 
            margin={[50, 50, 50 ,50 ]}
            options={{ styles : mapStyles,}}
            onChange={handleOnChangeMap}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            onChildClick={setChildClicked}
          >
          {places?.map((place , i) => {
              
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

      <br />
      <div style={{display : "flex" , justifyContent : "space-around"}}>
        <Button variant="contained" onClick={()=>RenderDirections(mapInstance, mapsApi, ListPlaces)} sx={{marginBottom : "10px"}}>Test Directions</Button>
        <br />
        <Button variant="contained" sx={{marginBottom : "10px"}} onClick={()=>DirectionStop() } >Remove Directions</Button>
      </div>
    </div>
  );
};

export default Map;
