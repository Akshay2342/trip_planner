import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import { Button, CssBaseline,Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import getPlaces from '../api/getPlaces';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from 'lodash';
import Final from '../components/Planner/Final';
import { SelectedPlaceContext } from '../components/Map/SelectedPlaceContext';
import InputLabel from '@mui/material/InputLabel';
import parse from 'html-react-parser'
import { useLocation } from 'react-router-dom';


// This is the data to be used
// const formData = {
//   destination,
//   lat,
//   lng,
//   departureDate,
//   returnDate,
//   numTravelers,
//   purpose,
//   accommodation,
//   budget,
//   activities,
//   dietaryRestrictions,
//   transportation,
//   flexibility,
//   comments
// }; have to retrive this


function Main() {
  const [dir , setdir] = useState(false);
  const location = useLocation();
  const formData = location?.state?.formData;

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
  const [directions , setDirections] = useState([]);
  const [scrollplace , setscrollplace] = useState();



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords : {latitude,longitude}}) => {
      setUserCoordinates({lat : latitude, lng : longitude});
    })
    // setcoordinates({ lat, lng });
  },[])
  
 useEffect(() => {
    console.log({ListPlaces})
  }, [ListPlaces]);

  useEffect(() => {
    // console.log(Place)
    console.log({coordinates , bounds})
    console.log("lat and lng : ",{lat : formData?.lat , lng : formData?.lng});
    // if(rest.length > 15) {
    //   return;
    // }
     if (bounds.bl.lat !== 0 && bounds.bl.lng !== 0 && bounds.tr.lat !== 0 && bounds.tr.lng !== 0) {
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
    <SelectedPlaceContext.Provider value={ {selectedPlace, setSelectedPlace ,scrollplace, setscrollplace}}>
    <div className="Main">
      <CssBaseline/>
      <div className='testt' >
      <Header setcoordinates ={setcoordinates}/>
      </div>
      <div style={{display : 'flex' , justifyContent : 'space-between'}}> 
          <div >
             <Autocomplete
                id="combo-box-demo"
                options={options}
                value={Place}
                onChange={(event, value) => {setPlace(value) }}
                defaultValue={options[0]}
                sx={{ width: 300, margin: 1 }}
                renderInput={(params) => <TextField {...params} label="Places" />}
            />
          </div>
          <div style={{display : 'flex' , justifyContent : 'space-around'} }>
          <InputLabel id="rating-label">Rating : </InputLabel>
            <Rating 
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
            </div>
            </div>
          <br />

      <Grid container spacing={1} style={{width:'100%' , padding : '20px'}}>
        <Grid item xs={12} md={3}>
          {directions.length >1 ?     <div style={{margin : '10px'}}>
        {directions && directions.map((direction, index) => (
          <p key={index}>{parse(direction)}</p>
        ))}
      </div> : <List places={rest}  />}
        </Grid>
        <Grid item xs={12} md={9}>
        <Map userCoordinates={userCoordinates} setbounds ={setDebouncedBounds} setcoordinates = {setcoordinates} coordinates={coordinates} places={rest} setChildClicked ={setChildClicked} dir ={dir} ListPlaces ={ListPlaces} directions ={directions} setDirections ={setDirections}  />        </Grid>
      </Grid>
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
      <div style={{margin : '2px'}}>
      <Final setListPlaces ={setListPlaces}  formData = {formData}/>
      </div>
    </div>

    </SelectedPlaceContext.Provider>
  );
}

export default Main;
