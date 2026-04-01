

import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cards from './components/Cards'
import Tab from './components/Tab'
import { useState } from 'react'
import Banner from './components/Banner'
import RecordSection from './components/RecordSection'
import StartedSection from './components/StartedSection'
import Footer from './components/Footer'
import Transfarent from './components/Transfarent'

const digiPromise = fetch('/data.json').then(res => res.json())
function App() {
  const [activeTab, setActiveTab] = useState("products")
  // console.log(activeTab)
  const [cardsData, setCardsData] = useState([])
  console.log(cardsData)

  return (

    <>

      <Navbar cardsData={cardsData}></Navbar>
      <Banner></Banner>
      <RecordSection></RecordSection>
      <Tab setActiveTab={setActiveTab} cardsData={cardsData}></Tab>
      {
        activeTab === "products" ? <Products digiPromise={digiPromise} cardsData={cardsData} setCardsData={setCardsData}></Products> :
          <Cards cardsData={cardsData} setCardsData={setCardsData }></Cards>
      }
      <StartedSection></StartedSection>
      <Transfarent></Transfarent>
      <Footer></Footer>





    </>
  )
}

export default App
