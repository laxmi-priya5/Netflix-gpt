import React from 'react'
import { useEffect } from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {

    //here just create a custom hooks and fetch all movies and update the redux store
    useNowPlayingMovies();
  return (
    <div>
        {/* 
         
         -header
         -MainContainer
           - background video
           - title
         -secondary container
           - n row of cards
           - n col of cards
        
        
        */}
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse