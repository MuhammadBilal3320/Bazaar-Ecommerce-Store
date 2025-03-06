import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import ReactStars from 'react-rating-stars-component'
import Loader from '../../Loader/Loader'

const AllProduct = ({products, loading}) => {

    
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    const productItem = [
        {
            id: 1,
            name: 'My name is name is My name is My name is My name is My name is My name is My name is My',
            price: 120,
            image: 'images/blockImage/2.png',
            rating: 5
        },
        {
            id: 2,
            name: 'Product 1',
            price: 160,
            image: 'images/blockImage/2.png',
            rating: 3.5
        },
        {
            id: 3,
            name: 'Product 1',
            price: 200,
            image: 'images/blockImage/2.png',
            rating: 4.5
        },
        {
            id: 4,
            name: 'Product 1',
            price: 600,
            image: 'images/blockImage/2.png',
            rating: 3.5
        },
        {
            id: 5,
            name: 'Product 1',
            price: 950,
            image: 'images/blockImage/2.png',
            rating: 2.5
        },
        {
            id: 6,
            name: 'Product 1',
            price: 1000,
            image: 'images/blockImage/2.png',
            rating: 4.5
        },
    ]


    return (
        <AllProductMainContainer>
            {
                loading ? <Loader/> :
                <div className="container">
                <ProductCard>
                    {
                        products.map((product, index) => (
                            <Link className='ProductSingleCard' onClick={scrollToTop} key={index} to={`/product/singleProduct/${product._id}`}>
                                <div className="productImage">
                                <img src='/images/blockImage/1.png' alt={product.name} />
                                </div>

                                <div className="productInfo">

                                    <h4>{product.name}</h4>

                                    <div className="productRating">
                                        <ReactStars value={product.totalRating} size={window.innerWidth < 600 ? 20 : 30} activeColor="#f1c40f" edit={false} isHalf={true} />
                                        <span> ({product.numOfReview} Reviews)</span>
                                    </div>

                                    <div className="productPrice">
                                        <span>Rs. {product.price}</span>
                                    </div>
                                </div>

                            </Link>
                        ))
                    }
                </ProductCard>
            </div>
            }
        </AllProductMainContainer>
    )
}

export default AllProduct

const AllProductMainContainer = styled.main`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */

    .container{
        width: 100%;
    }
`

const ProductCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .ProductSingleCard{
        max-width: 350px;
        margin: 20px 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: black;
        background-color: aliceblue;
        border-radius: 20px;
        transition: all 0.3s;

        &:hover{
            transform: translateY(-8px);
            transition: all 0.5s;
        box-shadow: 0px 0px 5px rgba(131, 130, 130, 0.788);

        }

        &:active{
            transform: scale(0.99);

        }

        @media screen and (max-width: 1700px) {
            margin: 10px;
            width: 250px;
        }

        @media screen and (max-width: 550px) {
            width: 80%;
        }

    }

    .productImage{
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 20px;
        }
    }

.productInfo{
    width: 100%;
    padding: 10px;
    
}

h4{
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: normal;
    height: 60px;
    width: 98%;
    padding: 2px 10px;

}

.productRating{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: small;
    @media screen and (max-width: 1000px) {
            font-size: smaller;
        }
    @media screen and (max-width: 1650px) {
            font-size: 10px;
        }
}

.productPrice{
    width: 98%;
    padding: 2px 30px;
    font-size: large;
    font-weight: 600;
}
`