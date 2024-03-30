import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Cardd() {
  return (
    <>
      <Card
        variant="outlined"
        orientation="vertical"
        sx={{
            margin: 0,
            padding :0,
          width: 95, // adjust this value to your desired width
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </AspectRatio>
      <CardContent sx={{marginTop : 0 , paddingTop : 0}}>
        <Typography level="title-sm" id="card-description">
          Yosemite Park
        </Typography>
      </CardContent>
      </Card>
    </>
  );
}