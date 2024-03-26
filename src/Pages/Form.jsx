import React from 'react';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const TripPlannerForm = ({ setFormData }) => {
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [numTravelers, setNumTravelers] = useState('');
    const [purpose, setPurpose] = useState('');
    const [accommodation, setAccommodation] = useState('Hotel');
    const [budget, setBudget] = useState('');
    const [activities, setActivities] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [transportation, setTransportation] = useState('Train');
    const [flexibility, setFlexibility] = useState(false);
    const [comments, setComments] = useState('');
    const [autocomplete,setautocomplete]=useState(null);
    const navigate = useNavigate();
    const [lat ,setLat] = useState(null);
    const [lng ,setlng] = useState(null);
    const columnsRef = useRef();
  
      const onLoad=(autoc)=>setautocomplete(autoc);
      const onPlaceChanged=(event)=>{
        const lat = autocomplete?.getPlace().geometry.location.lat();
        const lng = autocomplete?.getPlace().geometry.location.lng();
        const place = autocomplete?.getPlace();

        const cityObj = place?.address_components.find(component => component.types.includes('locality'));
        setDestination(cityObj?.short_name);
        setLat(lat);
        setlng(lng);
      }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            destination,
            lat,
            lng,
            departureDate,
            returnDate,
            numTravelers,
            purpose,
            accommodation,
            budget,
            activities,
            dietaryRestrictions,
            transportation,
            flexibility,
            comments
        };
        setFormData(formData);
        columnsRef.current = formData;
        console.log(formData)
        navigate('/map', { state: { formData } });
    };


    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Trip Planner Form
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> 
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Autocomplete>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* <Grid item xs={12}>
                    <TextField id="destination" name="destination" label="Destination" fullWidth required onChange={(e) => setDestination(e.target.value)} />
                </Grid> */}

                <Grid item xs={12} sm={6}>
                    <TextField id="departure_date" name="departure_date" label="Departure Date" type="date" fullWidth required onChange={(e) => setDepartureDate(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="return_date" name="return_date" label="Return Date" type="date" fullWidth required onChange={(e) => setReturnDate(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="num_travelers" name="num_travelers" label="Number of Travelers" type="number" fullWidth required onChange={(e) => setNumTravelers(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="purpose" name="purpose" label="Purpose of Trip" select fullWidth required onChange={(e) => setPurpose(e.target.value)}>
                        <MenuItem value="Vacation">Vacation</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="accommodation" name="accommodation" label="Accommodation Type Preference" select fullWidth onChange={(e) => setAccommodation(e.target.value)}>
                        <MenuItem value="Hotel">Hotel</MenuItem>
                        <MenuItem value="Hostel">Hostel</MenuItem>
                        <MenuItem value="Airbnb">Airbnb</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="budget" name="budget" label="Budget Range" fullWidth onChange={(e) => setBudget(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="activities" name="activities" label="Activities/Interests" fullWidth onChange={(e) => setActivities(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="dietary_restrictions" name="dietary_restrictions" label="Dietary Restrictions" fullWidth onChange={(e) => setDietaryRestrictions(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                <TextField id="transportation" name="transportation" label="Mode of Transportation Preference" select fullWidth value={transportation} onChange={(e) => setTransportation(e.target.value)}>
                <MenuItem value="Flight">Flight</MenuItem>
                <MenuItem value="Train">Train</MenuItem>
                <MenuItem value="Car Rental">Car Rental</MenuItem>
            </TextField>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox id="flexibility" name="flexibility" value="yes" onChange={(e) => setFlexibility(e.target.checked)} />}
                        label="Flexibility with Transportation Options"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="comments"
                        name="comments"
                        label="Additional Information/Comments"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e) => setComments(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </Grid>
                </Grid>
            </form>
        </Container>
    );
};
export default TripPlannerForm;