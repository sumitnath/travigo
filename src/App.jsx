import React from 'react'
import { Navbar,Hero, Footer, Memory, Explore, Advertise ,Pricing,
Banner,Newsletter} from './components'
import {hero , navlinks,memory,placesAPI,brands,
  pricingapi,bannerAPI, footerAPI} from '../src/data/travigodata'
const App = () => {
  return (
    <>
  
  <Navbar navlinks={navlinks}/>
  <Hero hero={hero}/>
  <Memory memory={memory}/>
  <Explore title="Explore the beauty of world" placesAPI={placesAPI}/>
  <Advertise brands={brands}/>
  <Pricing pricingapi={pricingapi}/>
  <Banner bannerAPI={bannerAPI}/>
  <Newsletter/>
  <Footer footerAPI={footerAPI}/>  
    </>
  )

}

export default App
