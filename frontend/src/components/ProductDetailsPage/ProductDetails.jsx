import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductMainDetail from './ProductMainDetail/ProductMainDetail'
import CustomerReviews from './CustomerReviews/CustomerReviews'
import Footer from '../../components/Footer/Footer'

const ProductDetails = () => {
    return (
        <div>
        <Navbar/>
        <ProductMainDetail/>
        <CustomerReviews/>
        <Footer/>
        </div>
    )
}

export default ProductDetails
