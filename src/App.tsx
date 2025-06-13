import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.scss'
function App() {
  return (
    <Router>
      <Header />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<DashBoard />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}

export default App
