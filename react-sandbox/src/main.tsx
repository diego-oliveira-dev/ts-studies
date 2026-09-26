import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './Navbar.tsx'
import Home from './Home.tsx'
import LikeCounter from './likes/LikeCounter.tsx'
import CatGenerator from './cats/CatGenerator.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/likes" element={<LikeCounter/>}/>
      <Route path="/cats" element={<CatGenerator/>}/>
    </Routes>
  </BrowserRouter>,
)
