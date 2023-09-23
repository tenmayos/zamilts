import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
// ONE IMPORT TO RULE THEM ALL
import './styles/main.css'

function App() {

  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
