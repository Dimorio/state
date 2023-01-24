import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'
import Searched from './Searched'

const Pages = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/searched/:search' element={<Searched/>}/>
    <Route path='/query/:name' element={<Movie/>}/>
    </Routes>
       
    </>
  )
}

export default Pages