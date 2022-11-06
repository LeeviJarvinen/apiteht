import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "https://api.thecatapi.com/v1/images/search"

export default function Cat() {
    const [Kuva, setKuva] = useState('')

    const uusiKuva = () => {
        axios.get(URL)
      .then((response)=>{
        setKuva(response.data[0].url)
      }).catch(error =>{
        alert(error)
      });
    };

    useEffect(() => {
      axios.get(URL)
      .then((response)=>{
        setKuva(response.data[0].url)
      }).catch(error =>{
        alert(error)
      });
    }, [])
    
  return (
      <>
          <h1>Kissa Kuva</h1>
          <div id='kuva'>
              <img src={Kuva} alt='kissa kuva' width="700" height="700"></img><br />
              <button onClick={uusiKuva} id="myButton">Uusi kuva</button>
          </div>
      </>
  )
}