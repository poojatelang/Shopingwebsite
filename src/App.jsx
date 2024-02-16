
import './App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Pages/Home"
import Cart from "./Components/Pages/Cart"

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </>
  )
}

export default App
