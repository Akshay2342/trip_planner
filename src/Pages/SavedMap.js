import getPlaces from "../api/getPlaces";
import { useEffect } from "react";
import { getUserInfo } from "../api/getUserInfo";
import { useState } from "react";


const SavedMap = () => {
    const [userdata, setUserdata] = useState(null);
    useEffect(() => {
        getUserInfo().then((user) => {
                setUserdata(user);
        }); 
    });

    return ( <>
        NewPage
        {userdata && userdata.email}
    </> 
    );
}
 
export default SavedMap;