import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import LikeCounter from './likes/LikeCounter.tsx'
import CatGenerator from './cats/CatGenerator.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/likes" element={<LikeCounter/>}/>
      <Route path="/cats" element={<CatGenerator/>}/>
    </Routes>
  </BrowserRouter>,
)
