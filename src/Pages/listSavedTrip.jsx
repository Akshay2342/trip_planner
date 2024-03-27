import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth,db } from '../Backend/setup';
import {docs, collection, getDocs, query, where} from 'firebase/firestore';

const TripsData = () => {
  const [tripData, setTripData] = useState(null);
  const [uid , setuid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Final " ,{uid : user.uid});
      setuid(user.uid);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if(!uid)   return;
    const fetchData = async () => {
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        const docData = querySnapshot.docs[0].data();
        const docRef = doc(db, 'users', querySnapshot.docs[0].id);

      if (docRef) {
        setTripData(docData);
        console.log({TripsData})
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, [uid]);

  if (!tripData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {tripData.trips.map((trip, index) => (
        <div key={index}>
          <h2>Destination: {trip.formData.destination}</h2>
          <p>Budget: {trip.formData.budget}</p>
          <p>Departure Date: {trip.formData.departureDate}</p>
          {/* Render other trip details here */}
          <div>
            <h3>Columns:</h3>
            {Object.keys(trip.columns).map((key) => (
              <p key={key}>{key}: {JSON.stringify(trip.columns[key])}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TripsData;