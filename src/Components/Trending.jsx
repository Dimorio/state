import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import No_Img from '../assets/noimage.png'
import { Link } from 'react-router-dom'

const Trending = () => {
    const [trending, setTrending] = useState([])
    const api_img = `https://image.tmdb.org/t/p/w1280/`

    
    
    const getTrending = async ()=>{
        const check = localStorage.getItem('trending')
        if(check){
            setTrending(JSON.parse(check))
        } else{
            const url = await fetch(
                `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
            )
            const data = await url.json();

            localStorage.setItem('trending',JSON.stringify(data.results))
            setTrending(data.results)
            console.log(trending);
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            getTrending()
        },2000)
    },[])


    
  return(
           <div className='trending_movies place-content-center place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
       {trending.map((trend) =>{
            return(
                <div key={trend.id} className='items'>
                    <Link to={'/query/' + (trend.id + trend.name ? trend.name:trend.title)}>
                    <img src={(trend.profile_path) ? `${api_img}${trend.profile_path}`  
             : (trend.poster_path) ? `${api_img}${trend.poster_path}`
            : No_Img} alt={trend.name ?  trend.name : trend.title} />  
                    <div className='info  flex flex-col items-center text-white  '>
                        <div className="title">
                    <h2 className='text-center'>{trend.name ?  trend.name : trend.title}</h2>
                        </div>
                       <div className="info infos flex flex-row gap-2 items-start justify-center">
                       <p className='border rounded-sm'><small className='px-[5px] '>{trend.media_type ? trend.media_type.toUpperCase() : trend.first_air_date}</small></p> : 
                        <p>{trend.release_date ? trend.release_date.slice(0,4) : trend.first_air_date.slice(0,4)}</p>
                       </div>
                    </div>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Trending;