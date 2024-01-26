import Header from './components/Header/Header';
import PlaceDetails from './components/Planner/DragList';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline,Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import getPlaces from './api/getPlaces';


function App() {

  const [rest,setrest] = useState([]);
  const [childClicked , setChildClicked] = useState(null);
  const [coordinates, setcoordinates] = useState({ });
  const [bounds,setbounds]= useState({bl: {lat : 0, lng : 0},tr:{lat:0 , lng : 0}});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords : {latitude,longitude}}) => {
      setcoordinates({lat : latitude, lng : longitude});
    })
  },[])

  useEffect(() => {
    // Check if coordinates and bounds have meaningful values
    if (coordinates.lat !== 0 && coordinates.lng !== 0 && bounds.bl.lat !== 0 && bounds.bl.lng !== 0 && bounds.tr.lat !== 0 && bounds.tr.lng !== 0) {
      getPlaces(bounds).then((data) => {
        if (data && data.data) {
          setrest(data.data);
        }
      })
    }
  }, [coordinates, bounds])

  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      {/* <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={rest} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setbounds ={setbounds} setcoordinates = {setcoordinates} coordinates={coordinates} places={rest} setChildClicked ={setChildClicked} />
        </Grid>
      </Grid> */}
      <PlaceDetails/>
    </div>
  );
}

export default App;
