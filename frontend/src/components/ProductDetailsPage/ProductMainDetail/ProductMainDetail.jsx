import React, { useEffect } from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Select from "react-select";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDetails } from "../../../actions/ProductAction";
import { useParams } from "react-router-dom";

const ProductMainDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, product } = useSelector(state => state.singleProduct);

    useEffect(() => {
        dispatch(getSingleProductDetails(id));
    }, [dispatch, id])

    const slideImages = [
        "/images/blockImage/1.png",
        "/images/blockImage/2.png",
        "/images/blockImage/3.png",
    ];

    // Make sure product exists before creating the options
    const options = product ? Array.from({ length: product.stock }, (_, i) => ({
        value: i + 1,
        label: i + 1,
    })) : [];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        product && (
            <ProductMainDetailContainer>
                <div className="container">
                    <div className="leftContainer">
                        <Carousel
                            autoPlay={true}
                            interval={3000}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={true}
                            dynamicHeight={true}
                            pointer-events={true}
                        >
                            {slideImages.map((image, index) => (
                                <div key={index}>
                                    <img
                                        className="sliderImage"
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="rightContainer">
                        <div className="subContainer">
                            <h1>{product.name}</h1>
                            <div className="stars-totalReviews">
                                <ReactStars
                                    value={product.totalRating || 0}
                                    size={window.innerWidth < 600 ? 28 : 30}
                                    activeColor="#f1c40f"
                                    edit={false}
                                    isHalf={true}
                                />
                                <span> ({product.numOfReview || 0} Reviews)</span>
                            </div>
                            <div className="price-quantity">
                                <div className="price">
                                    <h4>PRICE</h4>
                                    <h2>Rs. {product.price}</h2>
                                </div>
                                <div className="quantity">
                                    <h4>QUANTITY</h4>
                                    <Select
                                        defaultValue={options[0]}
                                        placeholder={"1"}
                                        options={options}
                                        isDisabled={product.stock <= 0}
                                        isSearchable={false}
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary25: "rgba(105, 105, 105, 0.473)",
                                                primary: "rgb(50,50,50)",
                                            },
                                        })}
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                width: "150px",
                                                backgroundColor: "white",
                                                borderRadius: "8px",
                                                border: "none",
                                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                                                transition: "background-color 0.3s, box-shadow 0.3s",
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                marginTop: "0",
                                            }),
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="status">
                                <h4>STATUS</h4>
                                <h2 className={`${product.stock > 0 ? "InStock" : "OutOfStock"}`}>
                                    {product.stock > 0 ? "In Stock" : "Out Of Stock"}
                                </h2>
                            </div>

                            <div className="description">
                                <h4>DESCRIPTION</h4>
                                <p>{product.description}</p>
                            </div>

                            <div className="addToBag">
                                <button>ADD TO BAG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductMainDetailContainer>
        )
    );
};

export default ProductMainDetail;


const ProductMainDetailContainer = styled.main`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
            height: auto;
        }

    .container {
        background-color: aliceblue;
        margin: 20px;
        padding: 25px;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 0px 5px rgb(141, 141, 141);
        border-radius: 12px;

        @media screen and (max-width: 1200px) {
            width: 100%;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            padding: 0;
            box-shadow: none;
            background-color: transparent;
            padding: 5px;
        }
    }

    .leftContainer {
        padding: 10px;
        width: 50%;
        height: 600px;

        @media screen and (max-width: 900px) {
            width: 60%;
        }

        @media screen and (max-width: 768px) {
            height: auto;
            width: 95%;
        }

        @media screen and (max-width: 480px) {
            width: 100%;
        }

        .sliderImage {
        height: 500px;
        object-fit: contain;
        }

        @media (max-width: 768px) {
    .carousel {
        pointer-events: none;
    }
}
    }

    .rightContainer {
        padding: 10px;
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width: 768px) {
            width: 90%;
        }
        @media screen and (max-width: 480px) {
            width: 100%;
        }
        

        h4 {
        color: rgba(150, 149, 149, 0.89);
        }

        .subContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        width: 80%;
        @media screen and (max-width: 1200px) {
            width: 100%;
            gap: 20px;
        }
    
        }

        h1 {
        font-weight: normal;
        line-height: 40px;
        @media screen and (max-width: 1200px) {
            font-size: 25px;
            line-height: 30px;
        }
        }

        .stars-totalReviews {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 1200px) {
            width: 80%;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        }

        .price-quantity {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 1200px) {
            width: 95%;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
        }

        .price > h2 {
            color: rgba(211, 37, 31, 0.932);
        }
        }

        .status {
        > h2 {
            font-weight: 600;
        }
        .outOfStock {
            color: rgba(211, 37, 31, 0.932);
        }

        .InStock {
            color: #22a122df;
        }
        }

        .addToBag{
            margin-top: 5px;
            display: flex;
            align-items: center;

            > button{
            background-color: rgba(211, 37, 31, 0.89);
            width: 200px;
            height: 50px;
            color: white;
            padding: 10px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            text-align: center;
            font-size: large;
            font-weight: 600;

            &:hover{
                box-shadow: 0px 0px 3px black;
            }

            &:active{
                scale: 0.97;
            }

            @media screen and (max-width: 480px) {
            padding: 0px;
            height: 40px;
            width: 180px;
        }
            
        }

        }
    }
    `
