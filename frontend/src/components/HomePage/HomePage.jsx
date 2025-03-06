import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slideshow from './MainSlider/MainSlider'
import CategoryBlock from './CategoryBlock/CategoryBlock'
import SmartProduct from './SmartProduct/SmartProduct'
import ClothBlock from './CategorizeProductLists/ClothBlock'
import BackpackBlock from './CategorizeProductLists/BackpackBlock'
import Modem from './CategorizeProductLists/Modem'
import SurveillanceCamera from './CategorizeProductLists/SurveillanceCamera'
import GraphicCard from './CategorizeProductLists/GraphicCard'
import Ribbon from './Ribbon/Ribbon'
import Footer from '../Footer/Footer'



const HomePage = () => {
    return (

        <div>

                <Navbar />
                <Slideshow />
                <CategoryBlock />
                <SmartProduct />
                <ClothBlock />
                <BackpackBlock />
                <Modem />
                <SurveillanceCamera />
                <GraphicCard />
                <Ribbon />
                <Footer />
        </div>

    )
}

export default HomePage
