import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import LikeCounter from './likes/LikeCounter.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/likes" element={<LikeCounter/>}/>
    </Routes>
  </BrowserRouter>,
)
