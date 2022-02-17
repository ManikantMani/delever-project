import React from 'react'
import Work from '../../components/about&work/Work'
import About from '../../components/About/About'
import Consultation from '../../components/Consultation/Consultation'
import Creative from '../../components/Creative/Creative'
import Footer from '../../components/Footer/Footer'
import Home1 from '../../components/home1/Home1'
import Gallery from '../../components/imgGallery/Gallery'
import WeOffer from '../../components/weOffer/WeOffer'

const Home = () => {
  return (
    <>
    <div className="Home">
        <Home1 />
        <About />
        <WeOffer />
        <Creative />
        <Work />
        <Consultation />
        <Gallery />
        <Footer />
        </div>
    </>
  )
}

export default Home