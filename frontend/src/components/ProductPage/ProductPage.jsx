import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import TopBanner from './TopBanner/TopBanner'
import Asidebar from './AsideBar/Asidebar'
import AllProduct from './AllProducts/AllProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getAllProducts} from '../../actions/ProductAction'
import Pagination from './Pagination/Pagination'
import Footer from '../Footer/Footer';


const ProductPage = () => {

    const dispatch = useDispatch();
    const {keyword} = useParams();
    const { loading, error, products, productCount, perPageProduct, filteredProductsCount, maxPrice } = useSelector(state => state.products);

    const [sideBar, setSideBar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, maxPrice||100000]);
    const [rating, setRating] = useState(0);
    const [category, setCategory] = useState("");

    useEffect(() => {
        dispatch(getAllProducts(keyword, currentPage, price, rating, category));
    }, [dispatch, keyword, currentPage, price, rating, category]);


    return (
        <div>
                <Navbar setCurrentPage={setCurrentPage} setSideBar={setSideBar} showHamburger={true} />
                    <TopBanner />

                <div className="asidebar-others">
                    <Asidebar 
                    sideBar={sideBar} 
                    setSideBar={setSideBar} 
                    setCurrentPage={setCurrentPage} 
                    price={price} 
                    setPrice={setPrice} 
                    rating={rating}
                    setRating={setRating}
                    category={category}
                    setCategory={setCategory}
                    maxPrice={maxPrice} />

                    <AllProduct products={products} loading={loading} />
                </div>

                {
                    perPageProduct < filteredProductsCount && (
                        <Pagination 
                    perPageProduct={perPageProduct} 
                    productCount={productCount || 0} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
                    />
                    )
                }
                <Footer/>
        </div>
    )
}

export default ProductPage
