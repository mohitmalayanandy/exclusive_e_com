import React from 'react'
import Offbar from '../../components/Navbar/Offbar'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FlashSales from '../../components/FlashSales/FlashSales'
             
const Home = () => {
  return (
    <div>
      <Offbar/>
      <Navbar />
      <Header />
      <FlashSales />
      <Footer />
    </div>
  )
}

export default Home