import  { useEffect , useState } from 'react'
import { OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
 
export const useTrailerId = (id)=>{
    // const [trailerId , setTrailerId]=useState(null);
    const dispatch = useDispatch();
        const getVideos =async  ()=>{
            
            const data  = await fetch ("https://api.themoviedb.org/3/movie/"+id+"/videos" , OPTIONS);
            const json = await data.json();
    
    
            const filteredData = json.results.filter(video=>video.type === 'Trailer');

            const trailer = filteredData ? filteredData[0]:json.results[0];
         
            
            dispatch(addTrailerVideo(trailer));
            
        }
    
        useEffect(()=>{
            getVideos();
        },[])
    
}