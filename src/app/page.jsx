import React from 'react'
import Navbar from './header/Navbar';
import ImageUpload from './Home/ImageUpload';
import Steps from './Home/Steps';
import Footer from './footer/Footer'

import './globals.css'

const Home = () => {
  return (
<>
<Navbar/>
<div className='container'>
<ImageUpload/>
<Steps />
</div>
<Footer/>
</>
  )
}

export default Home
