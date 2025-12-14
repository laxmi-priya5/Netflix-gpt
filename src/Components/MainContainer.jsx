import React from 'react'
// import VideoBackground from './VideoBackground.jsx'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)

    if(!movies) return ;

    const mainMovie = movies[0];
   
    const {original_title , overview , id} = mainMovie;
  return (
    <div className=''>
      
       <VideoTitle title={original_title} overview={overview}/>
       <VideoBackground id={id} />
    </div>
    // <div>
    //   main container
    // </div>
  )
}

export default MainContainer