// // import React from 'react';
// // import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, Rating } from '@mui/material';
// // import { red } from '@mui/material/colors';
// // import MoreVertIcon from '@mui/icons-material/MoreVert';

// // const PlaceDetails = ({place}) => {
// //     return ( 
// //         <>
// //         <Card sx={{ maxWidth: 345 }}>
// //             <CardHeader
// //                 title={place.name}
// //                 subheader={<Rating name="read-only" value={Number(place.rating)} readOnly />}
// //             />
// //             <CardMedia
// //                 component="img"
// //                 height="194"
// //                 image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
// //                 alt="Photo of the restaurant"
// //             />
// //             <CardContent>
// //                 <Typography variant="body2" color="text.secondary">
// //                    {place.description? place.description : 'No description available'  }
// //                 </Typography>
// //             </CardContent>
// //         </Card>
// //         </>
// //     );
// // }
 
// // export default PlaceDetails;

// import React from 'react';
// import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import Rating from '@mui/material/Rating';

// // import useStyles from './styles.js';

// const PlaceDetails = ({ place, selected, refProp }) => {
//   if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   const classes = useStyles();

//   return (
//     <Card elevation={6}>
//       <CardMedia
//         style={{ height: 350 }}
//         image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//         title={place.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5">{place.name}</Typography>
//         <Box display="flex" justifyContent="space-between" my={2}>
//           <Rating name="read-only" value={Number(place.rating)} readOnly />
//           <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between">
//           <Typography component="legend">Price</Typography>
//           <Typography gutterBottom variant="subtitle1">
//             {place.price_level}
//           </Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between">
//           <Typography component="legend">Ranking</Typography>
//           <Typography gutterBottom variant="subtitle1">
//             {place.ranking}
//           </Typography>
//         </Box>
//         {place?.awards?.map((award) => (
//           <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
//             <img src={award.images.small} />
//             <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
//           </Box>
//         ))}
//         {place?.cuisine?.map(({ name }) => (
//           <Chip key={name} size="small" label={name} className={classes.chip} />
//         ))}
//         {place.address && (
//           <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
//             <LocationOnIcon />{place.address}
//           </Typography>
//         )}
//         {place.phone && (
//           <Typography variant="body2" color="textSecondary" className={classes.spacing}>
//             <PhoneIcon /> {place.phone}
//           </Typography>
//         )}
//       </CardContent>
//       <CardActions>
//         <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
//           Trip Advisor
//         </Button>
//         <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
//           Website
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PlaceDetails;


import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary">
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary">
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;