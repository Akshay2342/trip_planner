import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const dataToSend = 'paniPuri';
  const [ok,setok] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/try')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

      axios.get(`http://localhost:4000/textToimage/${dataToSend}`).then(response => {
        console.log(response);
        if(response.status === 200){
            setok(true);
            }
      }).catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data received from backend:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {ok ? (
        <div>
          <h1>Image created</h1>
          <img src={`http://localhost:4000/images/Food${dataToSend}/${dataToSend}/Image_1.jpg`} alt='paniPuri' />        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;