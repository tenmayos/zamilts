import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import NotFound from './pages/NotFound/notFound'
// ONE IMPORT TO RULE THEM ALL
import './styles/main.css'

function App() {

  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/ar' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
