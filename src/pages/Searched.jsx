import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import No_Img from '../assets/none.webp'
import { Link } from 'react-router-dom'



const Searched = () => {
  const [searchedmovies, setSearchedmovies] = useState([])
  let params = useParams()
  const api_img = `https://image.tmdb.org/t/p/w1280/`

  const getSearched = async (name) =>{
   
        const data = await fetch(
            `
            https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
        )
        const multi = await data.json();
        setSearchedmovies(multi.results)
        console.log(multi);
    }
    useEffect(()=>{
      setTimeout(()=>{
        getSearched(params.search)
      },2000)
  },[params.search])
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
         {searchedmovies.length > 0 ? searchedmovies.map((item)=>{
          return(
            <>
             <Link to={'/query/' + (item.id + item.name ? item.name:item.title)}>
            <div className='items text-white'>
             <div key={item.id} className="person">
             <img src={(item.profile_path) ? `${api_img}${item.profile_path}`  
             : (item.poster_path) ? `${api_img}${item.poster_path}`
            : No_Img} alt="" />
             <div className="info_about flex flex-col justify-center items-center">
              <h2>{item.name?item.name:item.title}</h2>
              <div className="info infos flex gap-2 items-start justify-center">
              <p className='border rounded-sm'><small className='px-[5px] '>{item.media_type ? item.media_type.toUpperCase() : item.first_air_date}</small></p>
              </div>
             </div>
             </div>
            </div>
             </Link>
            </>
          )
         }) : <p className="text-center text-white">Page Not Found</p>}
      </div>
    )
}

export default Searched