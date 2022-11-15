import React from 'react'
import { Navbar,Announerment,Slider,Category,Products,NewLetter,Footer } from '../Components';
const Home = () => {
  return (
    <div>
        <Announerment />
        <Navbar />
        <Slider />
        <Category />
      
        <Products />
        
        <NewLetter />
        <Footer />
    </div>
  )
}

export default Home;