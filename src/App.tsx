

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './components/LandingPage'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<LandingPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
