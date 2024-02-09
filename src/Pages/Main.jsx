import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import { CssBaseline,Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import getPlaces from '../api/getPlaces';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from 'lodash';
import Final from '../components/Planner/Final';
import { SelectedPlaceContext } from '../components/Map/SelectedPlaceContext';

function Main() {
  const [dir , setdir] = useState(false);
  const [rest,setrest] = useState([]);
  const [childClicked , setChildClicked] = useState(null);
  const [coordinates, setcoordinates] = useState({ });
  const [bounds,setbounds]= useState({bl: {lat : 0, lng : 0},tr:{lat:0 , lng : 0}});
  const [Place, setPlace] = useState('hotels');
  const [rating, setRating] = useState(0);
  const setDebouncedBounds = debounce((newBounds) => setbounds(newBounds), 300);
  const setDebouncedrest = debounce((newBounds) => setrest(newBounds), 300);
  const options = ['restaurants', 'hotels', 'attractions'];
  const [userCoordinates, setUserCoordinates] = useState({ lat: 0, lng: 0 });
  const [selectedPlace,setSelectedPlace] = useState([])
  const [ListPlaces, setListPlaces] = useState([]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords : {latitude,longitude}}) => {
      setUserCoordinates({lat : latitude, lng : longitude});
    })
  },[])
  
 useEffect(() => {
    console.log({ListPlaces})
  }, [ListPlaces]);

  useEffect(() => {
    // console.log(Place)
    console.log({coordinates , bounds})
    console.log("comming")
    if(rest.length > 15) {
      console.log("not")
    }
    else if (bounds.bl.lat !== 0 && bounds.bl.lng !== 0 && bounds.tr.lat !== 0 && bounds.tr.lng !== 0) {
      getPlaces({bounds, Place}).then((data) => {
        if (data && data.data) {
          setDebouncedrest(data.data);
        }
      })
    }
    }, [Place, bounds , coordinates]);

    // const getPl=()=>{
    //   if (coordinates.lat !== 0 && coordinates.lng !== 0 && bounds.bl.lat !== 0 && bounds.bl.lng !== 0 && bounds.tr.lat !== 0 && bounds.tr.lng !== 0) {
    //     getPlaces({bounds, Place}).then((data) => {
    //       if (data && data.data) {
    //         setDebouncedrest(data.data);
    //       }
    //     })
    //   }
    //   console.log({coordinates, bounds, Place})
    // }


  return (
    <SelectedPlaceContext.Provider value={ {selectedPlace, setSelectedPlace}}>
    <div className="Main">
      <CssBaseline/>
      <Header setcoordinates ={setcoordinates}/>
      <Autocomplete
                id="combo-box-demo"
                options={options}
                value={Place}
                onChange={(event, value) => {setPlace(value) }}
                defaultValue={options[0]}
                sx={{ width: 300, margin: 1 }}
                renderInput={(params) => <TextField {...params} label="Places" />}
            />
            <Typography variant="h6">Rating</Typography>
            <Rating 
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={rest} />
        </Grid>
        <Grid item xs={12} md={8}>
        <Map userCoordinates={userCoordinates} setbounds ={setDebouncedBounds} setcoordinates = {setcoordinates} coordinates={coordinates} places={rest} setChildClicked ={setChildClicked} dir ={dir} ListPlaces ={ListPlaces} />        </Grid>
      </Grid>
      <button onSubmit = {()=>{
        setdir(!dir);
      }}>Toggle here</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Final setListPlaces ={setListPlaces}/>
    </div>
    </SelectedPlaceContext.Provider>
  );
}

export default Main;
