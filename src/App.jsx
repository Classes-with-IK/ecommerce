import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes,Route} from "react-router"
import Homepage from './pages/Homepage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import RootLayout from './layouts/RootLayout'
import ProductsPage from './pages/ProductsPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<Routes>
  <Route element={<RootLayout />}>
    <Route path='/' element={<Homepage/>}/>
    <Route path="contact" element={<ContactPage/>} />
    <Route path="about" element={<AboutPage/>}/>
    <Route path='products' element={<ProductsPage/>} />
    <Route path='products/:id' element={<ProductDetails/>} />
  </Route>
</Routes>

    </>

    
  )
}

export default App
