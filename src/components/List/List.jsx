import { useEffect, useRef } from 'react';
import { CircularProgress, Grid, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { SelectedPlaceContext } from '../Map/SelectedPlaceContext';
// import { useContext } from    'react';

const List = ({places}) => {
    const refs = useRef({});
    // const {scrollplace, setscrollplace} = useContext(SelectedPlaceContext);
    // useEffect(() => {
    //     console.log(scrollplace)
    //     if (scrollplace != null && refs.current[scrollplace]) {
    //         refs.current[scrollplace].scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // }, [scrollplace]);

    return (
        <>
            {places && places.length ? (
                <Grid container spacing={3} style={{ height: '100vh', overflowY: 'auto' }}>
                    {places.map((place, i) => (
                    <Grid item key={i} xs={12} ref={ref => refs.current[i] = ref}>
                        <PlaceDetails place={place} />
                    </Grid>
                    ))}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </>
    );
}

export default List;