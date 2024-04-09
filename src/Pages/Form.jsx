import React from 'react';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Card} from '@mui/material';   
import { DatePicker } from '@mui/lab';
import { Box } from '@mui/material';
import { Label } from '@mui/icons-material';

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
  border : '3px solid #ced4da',
  borderRadius: '4px', 
  width: '50%',
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


const TripPlannerForm = () => {
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
        navigate('/map', { state: { formData } });
    };


    return (
      <Container>
      <Card sx={{ padding: 3, backgroundColor: '#f5f5f5', width : '500px'}}> 
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Typography variant="h2" gutterBottom>
           PLAN A   NEW TRIP 
      </Typography>


      <Grid container spacing={2} alignItems="center">
    <Grid item xs={2}>
    <Typography variant='h6'>Destination: </Typography>
    </Grid>
    <Grid item xs={10}>
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            // inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Autocomplete>    
      </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={2}>
      <Typography variant='h6'>Departure Date</Typography>
    </Grid>
    <Grid item xs={10}>
      <TextField id="departure_date" name="departure_date" sx={{ width: '50%' }} type="date" fullWidth required onChange={(e) => setDepartureDate(e.target.value)} />
    </Grid>

    <Grid item xs={2}>
      <Typography variant='h6'>Return Date</Typography>
    </Grid>
    <Grid item xs={10}>
      <TextField id="return_date" sx={{ width: '50%' }} name="return_date" type="date" fullWidth required onChange={(e) => setReturnDate(e.target.value)} />
    </Grid>

    <Grid item xs={2}>
      <Typography variant='h6'>Purpose</Typography>
    </Grid>
    <Grid item xs={10}>
      <TextField id="purpose" sx={{ width: '50%' }} name="purpose" label="Purpose of Trip" select fullWidth required onChange={(e) => setPurpose(e.target.value)}>
        <MenuItem value="Vacation">Vacation</MenuItem>
        <MenuItem value="Business">Business</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>
    </Grid>
  </Grid>
        <Accordion>
          <AccordionSummary>
            <Typography>Additional Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Fill out the following fields to help us plan your trip!</Typography>
        <TextField id="num_travelers" name="num_travelers" label="Number of Travelers" type="number" fullWidth required onChange={(e) => setNumTravelers(e.target.value)} />
        <TextField id="accommodation" name="accommodation" label="Accommodation Type Preference" select fullWidth onChange={(e) => setAccommodation(e.target.value)}>
          <MenuItem value="Hotel">Hotel</MenuItem>
          <MenuItem value="Hostel">Hostel</MenuItem>
          <MenuItem value="Airbnb">Airbnb</MenuItem>
        </TextField>
        <TextField id="budget" name="budget" label="Budget Range" fullWidth onChange={(e) => setBudget(e.target.value)} />
        <TextField id="activities" name="activities" label="Activities/Interests" fullWidth onChange={(e) => setActivities(e.target.value)} />
        <TextField id="dietary_restrictions" name="dietary_restrictions" label="Dietary Restrictions" fullWidth onChange={(e) => setDietaryRestrictions(e.target.value)} />
        <TextField StyledInputBase id="transportation" name="transportation" label="Mode of Transportation Preference" select fullWidth value={transportation} onChange={(e) => setTransportation(e.target.value)}>
          <MenuItem value="Flight">Flight</MenuItem>
          <MenuItem value="Train">Train</MenuItem>
          <MenuItem value="Car Rental">Car Rental</MenuItem>
        </TextField>
        <FormControlLabel
          control={<Checkbox id="flexibility" name="flexibility" value="yes" onChange={(e) => setFlexibility(e.target.checked)} />}
          label="Flexibility with Transportation Options"
        />
        <TextField
          id="comments"
          name="comments"
          label="Additional Information/Comments"
          multiline
          rows={4}
          fullWidth
          onChange={(e) => setComments(e.target.value)}
        />
          </AccordionDetails>
        </Accordion>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </form>
      </Box>
        </Card>
    </Container>
    );
};
export default TripPlannerForm;