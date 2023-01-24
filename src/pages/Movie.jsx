import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import No_Img from '../assets/none.webp'
import { Link } from 'react-router-dom'
import Soon from './Soon';





const Movie = () => {
    let params = useParams()
  const api_img = `https://image.tmdb.org/t/p/w1280/`
  const [details, setDetails] = useState([])

    const getItem = async () =>{
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${params.name}&language=en-US&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            if(Array.isArray(data.details)){
                setDetails(data.results)
            }
        })
        .catch(error => console.log(error))
       
    }
   
    useEffect(()=>{
      setTimeout(()=>{
        getItem()
      },2000)
  },[params.name])

 return (
    <>
{details.length > 0 ? details.map((item)=>{
    console.log(item);
}) : <Soon/>}

    </>
  )
}


export default Movie

{/* <div className=' items_all'>
  {multi.map((item, index)=>{
      if(index === 0 ){
         if(item.subData && Array.isArray(item.subData)){
          return(
              <div key={item.id} className='grid_content '>
                 <div className='main-img'>
                 <div className='container_image'>
                  <img src={(item.profile_path) ? `${api_img}${item.profile_path}`  
                      : (item.poster_path) ? `${api_img}${item.poster_path}`
                      : No_Img} alt="" />
                      <p>{item.name ? item.name : item.title}</p>
                  </div>
                  <div className='btn-boy'>
                      <p className='border rounded-sm'>
                           <small className='px-[5px] '>{item.media_type ? item.media_type.toUpperCase() : item.first_air_date}</small></p>
                  </div>
                  <div className="overview">
                  <p className=''><b>Overview :</b> {`${item.overview}`}</p>
                  </div>
                 </div>
              </div>
          )
         }
      }
     return(
      <div className='grid-this'>
                 {item.known_for.map((element, innerElement)=>(
                   <>
                   <div className="flex text-center gap-4">
                   <div className='image text-center'>
                         <img src={(element.profile_path) ? `${api_img}${element.profile_path}`  
                              : (element.poster_path) ? `${api_img}${element.poster_path}`
                                  : No_Img} alt="" />
                 <p>{element.name ? element.name : element.title}</p>
             </div>
             <div className="over-content">
                 <p className=''><b>Overview :</b> {`${element.overview}`}</p>
             </div>
                   </div>
                     </>
                 ))}
      </div>
     )
  })}
</div> */}



function MyComponent(props) {
    const { data } = props;
    return (
        <div>
            {data.map((item, index) => {
                if (index === 0) {
                    if(item.subData && Array.isArray(item.subData)){
                        return (
                            <div key={index}>
                                First Item: 
                                {item.subData.map((subItem, subIndex) => (
                                    <div key={subIndex}>{subItem}</div>
                                ))}
                            </div>
                        );
                    }
                }
                return <div key={index}>{item}</div>;
            })}
        </div>
    );
}
