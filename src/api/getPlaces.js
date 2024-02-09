import axios from "axios";  
import { useState } from "react";


export default async function getPlaces({bounds , Place}) {
    const options = {
      method: 'GET',
      url: `https://travel-advisor.p.rapidapi.com/${Place}/list-in-boundary`,
      params: {
        // bl_latitude: 37.77144621158013,
        // tr_latitude: -122.54065278533788,
        // bl_longitude: -122.54065278533788,
        // tr_longitude: -122.38615754608007
        bl_latitude: bounds.bl.lat,
        tr_latitude: bounds.tr.lat,
        bl_longitude: bounds.bl.lng,
        tr_longitude: bounds.tr.lng
      },  
      headers: {
        'X-RapidAPI-Key': '18ddbfedd4mshee0b288798da0fep1ea29djsncbdc0ec508bf',
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