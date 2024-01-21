import React from 'react';
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PlaceDetails = ({place}) => {
    return ( 
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={place.name}
                subheader={<Rating name="read-only" value={Number(place.rating)} readOnly />}
            />
            <CardMedia
                component="img"
                height="194"
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                alt="Photo of the restaurant"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                   {place.description? place.description : 'No description available'  }
                </Typography>
            </CardContent>
        </Card>
        </>
    );
}
 
export default PlaceDetails;