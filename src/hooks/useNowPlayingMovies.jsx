//custom hooks is normal js function
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from '../utils/constants'
const useNowPlayingMovies = () => {
  
  const dispatch = useDispatch();
  useEffect(()=>{
      asyncFunction();
  } , [])

   const asyncFunction = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
      const json = await  data.json();
     
      dispatch(addNowPlayingMovies(json.results))
   }
}

export default useNowPlayingMovies