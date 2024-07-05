

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NoPage from './pages/noPage/NoPage'
import HomePage from './pages/homepage/HomePage'



function App() {
  
  return (
    <div >
      <Router>
        <Routes>
         <Route path='/' element={<HomePage/>}/>
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
