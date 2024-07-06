
import Layer from '../../components/layout/Layer'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import HomeProductCard from '../../components/homeProductCard/HomeProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
const HomePage = () => {
  return (
    <Layer>
        <Hero/>
        <Category/>
        <HomeProductCard/>
        <Track/>
        <Testimonial/>
    </Layer>
  )
}

export default HomePage