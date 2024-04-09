import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth,db } from '../Backend/setup';
import {docs, collection, getDocs, query, where} from 'firebase/firestore';
import { Card, CardContent, CardHeader, Typography, List, ListItem, ListItemText } from '@mui/material';


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
  const ItineraryCard = ({ title, items }) => (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <List>
          {items.map((item) => (
            <ListItem key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
  
  const Itinerary = ({ destination, budget, departureDate, columns }) => (
    <div className="itinerary">
      <h2>{destination}</h2>
      <p>Budget: ₹{budget}</p>
      <p>Departure Date: {departureDate}</p>
      <div className="itinerary-columns">
        {Object.entries(columns).map(([columnName, columnData]) => (
          <ItineraryCard key={columnName} title={columnData.name} items={columnData.items} />
        ))}
      </div>
    </div>
  );
  const itineraryData = {
    destination: "Hyderabad",
    budget: 110000,
    departureDate: "2024-03-13",
    columns: {
      Bucket: { name: "Bucket", items: [] },
      Day1: { name: "Day1", items: [] },
      Day2: { name: "Day2", items: [] },
      Day3: { name: "Day3", items: [] },
    },
  };

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
       <Itinerary {...itineraryData} />
      
    </div>
  );
}

export default TripsData;
  

