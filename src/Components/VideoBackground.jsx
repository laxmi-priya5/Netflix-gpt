import React, { useEffect , useState } from 'react'
import { OPTIONS } from '../utils/constants'
import { useTrailerId } from '../hooks/useTrailerId'
import { useSelector } from 'react-redux'
const VideoBackground = ({id}) => {
    // custom hooks to get trailer video
    
    const trailerId = useSelector(store => store.movies?.trailerVideo)
    useTrailerId(id);
  
    
  return (
   
     <div className='w-screen'>
         <iframe className='w-full h-screen'  width="560" height="315" src={"https://www.youtube.com/embed/"+ trailerId?.key + "?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground