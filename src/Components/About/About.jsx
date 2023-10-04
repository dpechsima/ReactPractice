import React from 'react'
import '../About/About.css'
import album1 from '../About/assets/Collide.webp'
import album2 from '../About/assets/Misadventure.webp'
import album3 from '../About/assets/TheJaws.webp'
import album4 from '../About/assets/PTV.webp'

export const About = () => {

    return (
        <>
            <div className='titleContainer'>

            </div>

            <div className="contentContainer">
                <p>
                    Pierce The Veil es una banda estadounidense de post-hardcore formada en el año 1998 bajo el nombre de Early Times, en el 2004 renombrada Before Today, y tras un pequeño hiato en el 2006, la banda oficialmente pasó a llamarse Pierce The Veil, bajo este nombre la banda ha lanzado cinco álbumes de estudio, A Flair for the Dramatic en junio del 2007, Selfish Machines en junio del 2010, Collide with the Sky en julio de 2012, Misadventures en mayo de 2016 y The Jaws Of Life el 10 de febrero de 2023.
                </p>
                <h2>Top 3 Albumes</h2>
                <p>
                    <ol>
                        <div className='albumContainer'>

                            <li>Collide with the Sky
                                <blockquote>
                                    Las mejores rolas de este album:
                                    <ul>
                                        <li>A match into Water</li>
                                        <li>The first punch</li>
                                        <li>Hold on Till May</li>
                                    </ul>
                                </blockquote>
                            </li>

                            <img src={album1} alt="" />

                        </div>

                        <div className='albumContainer'>

                            <li> Misadventures
                                <blockquote>
                                    Las mejores rolas de este album:
                                    <ul>
                                        <li>Gold Medal Ribbon</li>
                                        <li>Bedless</li>
                                        <li>Phanton Power and Ludicrous Speed</li>
                                    </ul>
                                </blockquote>
                            </li>
                            <img src={album2} alt="" />
                        </div>

                        <div className='albumContainer'>

                            <li> The Jaws of Life
                                <blockquote>
                                    Las mejores rolas de este album:
                                    <ul>
                                        <li>12 Fractures</li>
                                        <li>Resilence</li>
                                        <li>The Jaws Of Life</li>
                                    </ul>
                                </blockquote>
                            </li>

                            <img src={album3} alt="" />

                        </div>
                    </ol>

                    <a href="https://open.spotify.com/artist/4iJLPqClelZOBCBifm8Fzv?si=_trLzU-LSfCVQXExANaEwA">Give it a try on Spotify!</a>
                </p>

            </div>

            <div>
                <img src={album4} alt="" />
            </div>

            {/*
            <div>
                <h1 style="text-align: center;">Pierce The Veil</h1>
                <h2>About</h2>
                <p>
                   
                </p>
                
            */}



        </>
    )
}
