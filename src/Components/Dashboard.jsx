import React from 'react'
import Container from './Layout/Container'
import Home from './Home'
import RightImage from './RightImage'
import Makeup from './Makeup'
import FeaturedProduct from './FeaturedProduct'
import MoveCarousel from './MoveCarousel'
import FeaturedProduct1 from './FeaturedProduct1'
function Dashboard() {
  return (
    <Container>
        <div>
            <Home/>
        </div>
        <div>
            <RightImage/>
        </div>
         <div>
            <FeaturedProduct1/>
        </div>
        <div>
            <FeaturedProduct/>
        </div>
        <div>
            <Makeup/>
        </div>
       
        <div>
            <MoveCarousel/>
        </div>
    </Container>
  )
}

export default Dashboard