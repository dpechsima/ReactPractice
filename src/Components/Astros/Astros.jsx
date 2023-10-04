import React, { useEffect, useState } from 'react'
import '../Astros/Astros.css'


const Astro = ({ info }) => {

  return (

    <>
    <div className='cardContainer'>

      <h1>Astros</h1>

      {
        
        info.map((astro, index) => (
         
          <div key={index} className='astroContainer'>
            <h2 className='astroName'>{astro.name}</h2>
            <p className='astroStation'>{astro.craft}</p>
          </div>

        ))
        
      }

    </div>
      {
        /*
    <div className='astroContainer'>
      <h2 className='astroName'>Name</h2>
      <p className='astroStation'>Space Station</p>
    </div>
      */
      }
    </>

  )
}

export const Astros = () => {

  const URL = "http://api.open-notify.org/astros.json";

  const [astros, setAstros] = useState([]);

  useEffect(() => {
    fetchAstro();
  }, [])

  const fetchAstro = () => {

    fetch(URL)
      .then(res => res.json())
      .then(data => setAstros(data.people))
      .catch(err => console.error(err))
  }

  console.log(astros);
  return (

    <>
      <Astro info={astros} />
    </>
  )
}
