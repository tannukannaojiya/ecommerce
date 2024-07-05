import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layer({children}) {
  return (
    <div>
        <Navbar/>
        <div className='main-content min-h-screen'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layer