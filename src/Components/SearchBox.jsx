import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const SearchBox = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e)=>{
    e.preventDefault()
    navigate('/searched/' + input)

  }
  return (
    <div className=' up-cont flex flex-col justify-center items-center sm:flex-row md:  my-[1rem] '>
    <div className="logo-container">
      <Link to={'/'}>
      <img  src="https://westout.netlify.app/assets/images/logo.svg" alt="" />
      </Link>
      </div>
      <div className="input-container">
        <form onSubmit={submitHandler} className='form my-[1rem]'>
        <input type="text" size={30} onChange={(e) => setInput(e.target.value)}  placeholder='search movie, tvshow or person' value={input}    className='border-0 outline-none rounded-lg  text-black px-[5px] placeholder:text-sm' />
      </form>
      </div>
    </div>
  
  )
}

export default SearchBox;