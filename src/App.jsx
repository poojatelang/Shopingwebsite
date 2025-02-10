
import './App.css'
import {BrowserRouterr,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Pages/Home"
import Cart from "./Components/Pages/Cart"

function App() {
  

  return (
    <>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
