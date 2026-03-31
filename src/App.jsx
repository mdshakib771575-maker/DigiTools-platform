

import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cards from './components/Cards'
import Tab from './components/Tab'
import { useState } from 'react'

const digiPromise = fetch('/data.json').then(res => res.json())
function App() {
  const [activeTab, setActiveTab] = useState("products")
  // console.log(activeTab)
  const [cardsData, setCardsData] = useState([])
  console.log(cardsData)

  return (

    <>

      <Navbar cardsData={cardsData}></Navbar>
      <Tab setActiveTab={setActiveTab} cardsData={cardsData}></Tab>
      {
        activeTab === "products" ? <Products digiPromise={digiPromise} cardsData={cardsData} setCardsData={setCardsData}></Products> :
          <Cards cardsData={cardsData} setCardsData={setCardsData }></Cards>
      }





    </>
  )
}

export default App
