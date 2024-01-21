import axios from "axios";  


export default async function getPlaces({bounds , Place}) {
    const options = {
      method: 'GET',
      url: `https://travel-advisor.p.rapidapi.com/${Place}/list-in-boundary`,
      params: {
        bl_latitude: bounds.bl.lat,
        tr_latitude: bounds.tr.lat,
        bl_longitude: bounds.bl.lng,
        tr_longitude: bounds.tr.lng
      },  
      headers: {
        'X-RapidAPI-Key': 'b83c0f3e30msh43eee8b4f2ed609p18f11bjsn5847c6b51ef9',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };  
    try {
        const  response = await axios.request(options);
        console.log(response.data)
        // return response.data;
        console.log(bounds , Place)
        return response.data;
    } catch (error) {
        console.error(error);
        return { data: [] };
    }
    }