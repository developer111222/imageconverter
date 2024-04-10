import React from 'react'
import Navbar from './header/Navbar';
import ImageUpload from './Home/ImageUpload';
import './globals.css'

const Home = () => {
  return (
<>
<Navbar/>
<div className='container'>
<ImageUpload/>
</div>
</>
  )
}

export default Home
