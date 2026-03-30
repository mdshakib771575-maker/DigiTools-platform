

import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cards from'./components/Cards'
import Tab from './components/Tab'

const digiPromise = fetch('/data.json').then(res=>res.json())
function App() {
  
  return (
    
    <>

         <Navbar></Navbar>
         <Tab></Tab>
         <Products digiPromise={digiPromise}></Products>
         <Cards></Cards>
      
      
    </>
  )
}

export default App
