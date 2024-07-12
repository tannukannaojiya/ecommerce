import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NoPage from './pages/noPage/NoPage'
import ProductInfo from './productInfo/ProductInfo'
import CartPage from './pages/cart/CartPage'
import AllProduct from './allProduct/AllProduct'
import UserDashboard from './user/UserDashboard';
import AdminDashboard from './admin/AdminDashboard'


function App() {
  
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NoPage/>}/>
        <Route path='/productinfo' element={<ProductInfo/>}/>
        <Route path='cartPage' element={<CartPage/>} />
        <Route path='/allProduct' element={<AllProduct/>}/>
        <Route path='/user' element={<UserDashboard/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
