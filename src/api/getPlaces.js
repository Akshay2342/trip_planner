import axios from "axios";  


export default async function getPlaces(bounds) {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      params: {
        bl_latitude: bounds.bl.lat,
        tr_latitude: bounds.tr.lat,
        bl_longitude: bounds.bl.lng,
        tr_longitude: bounds.tr.lng
      },
      headers: {
        'X-RapidAPI-Key': '67f9dbac1bmshac8c95129120ea0p18751ejsn0d305eb720ca',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    try {
        const  response = await axios.request(options);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return { data: [] };
    }
    }