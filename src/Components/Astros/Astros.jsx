import React, { useEffect, useState } from 'react'
import '../Astros/Astros.css'


const Astro = () => {
  return (

    <>
      <div className='astroContainer'>
        <h2 className='astroName'>Name</h2>
        <p className='astroStation'>Space Station</p>
      </div>
      

    </>

  )
}

export const Astros = () => {
/*
  const URL = "http://api.open-notify.org/astros.json";

  const [astros, setAstros] = useState([]);

  useEffect(() => {
    fetchAstro();
  }, [])

  const fetchAstro = () => {

    fetch(URL)
      .then(res => res.json())
      .then(data => console.log(data.people))
      .catch(err => console.error(err))
  }
*/
  return (

    <>
      <Astro  />
    </>
  )
}
