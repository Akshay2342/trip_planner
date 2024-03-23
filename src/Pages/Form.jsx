import React from 'react';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Container, Typography } from '@mui/material';

const TripPlannerForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Trip Planner Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="destination" name="destination" label="Destination" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="departure_date" name="departure_date" label="Departure Date" type="date" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="return_date" name="return_date" label="Return Date" type="date" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="num_travelers" name="num_travelers" label="Number of Travelers" type="number" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="purpose" name="purpose" label="Purpose of Trip" select fullWidth required>
                            <MenuItem value="Vacation">Vacation</MenuItem>
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="accommodation" name="accommodation" label="Accommodation Type Preference" select fullWidth>
                            <MenuItem value="Hotel">Hotel</MenuItem>
                            <MenuItem value="Hostel">Hostel</MenuItem>
                            <MenuItem value="Airbnb">Airbnb</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="budget" name="budget" label="Budget Range" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="activities" name="activities" label="Activities/Interests" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="dietary_restrictions" name="dietary_restrictions" label="Dietary Restrictions" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="transportation" name="transportation" label="Mode of Transportation Preference" select fullWidth>
                            <MenuItem value="Flight">Flight</MenuItem>
                            <MenuItem value="Train">Train</MenuItem>
                            <MenuItem value="Car Rental">Car Rental</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox id="flexibility" name="flexibility" value="yes" />}
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default TripPlannerForm;