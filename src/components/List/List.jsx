import { CircularProgress, Grid, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({places}) => {
    return (
        <>
            {/* {console.log({places : places})} */}
            {places ? (
                <Grid container spacing={3} style={{ height: '80vh', overflowY: 'auto' }}>
                    {places?.map((place, i) => (
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={place} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <CircularProgress />
            )
            }
        </>

    );
}

export default List;