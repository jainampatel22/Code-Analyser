

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path ="/review" element={<Hero/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
