

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NoPage from './pages/noPage/NoPage'
import HomePage from './pages/homepage/HomePage'
import ProductInfo from './components/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'


function App() {
  
  return (
    <div >
      <Router>
        <ScrollTop>
        <Routes>
         <Route path='/' element={<HomePage/>}/>
          <Route path='/*' element={<NoPage/>}/>
          <Route path='/productinfo' element={<ProductInfo/>}/>
        </Routes>
        </ScrollTop>
      </Router>
    </div>
  )
}

export default App
