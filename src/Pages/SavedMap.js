import getPlaces from "../api/getPlaces";
import { useEffect } from "react";
import { getUserInfo } from "../api/getUserInfo";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../components/authContext";
import {auth} from '../Backend/setup'
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


const SavedMap = ({userx}) => {
    const [userdata, setUserdata] = useState(null);
    const [us , setsu] = useState(null);
    const { user } = useContext(UserContext);
    
    const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          console.error(err);
        }
    };

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getUserInfo().then((userr) => {
                    setUserdata(userr);
                });
            } else {
                setUserdata(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return ( <>
        {console.log("Saved Map renderring")}
        NewPage
        {userdata && userdata?.name}
        {user && user?.name}
    </> 
    );
}
 
export default SavedMap;