import axios from "axios";  
import { useState } from "react";


export default async function getPlaces({bounds , Place}) {
    const options = {
      method: 'GET',
      url: `https://travel-advisor.p.rapidapi.com/${Place}/list-in-boundary`,
      params: {
        bl_latitude: 37.77144621158013,
        tr_latitude: -122.54065278533788,
        bl_longitude: -122.54065278533788,
        tr_longitude: -122.38615754608007
        // bl_latitude: bounds.bl.lat,
        // tr_latitude: bounds.tr.lat,
        // bl_longitude: bounds.bl.lng,
        // tr_longitude: bounds.tr.lng
      },  
      headers: {
        'X-RapidAPI-Key': '325ccf0890msh9d0e34e41aca646p18525ejsn6bd903fd0c7f',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };  
    try {
        const  response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return { data: [] };
    }
    }