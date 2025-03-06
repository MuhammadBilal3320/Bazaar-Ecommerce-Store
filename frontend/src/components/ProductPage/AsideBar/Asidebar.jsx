import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RiCloseCircleFill } from "react-icons/ri";
import Slider from '@mui/material/Slider';
import ReactStars from 'react-rating-stars-component';

const Asidebar = ({ sideBar, setSideBar, price, setPrice, maxPrice, setCurrentPage, rating, setRating, category, setCategory }) => {
    const [tempPrice, setTempPrice] = useState(price);
    const [searchTerm, setSearchTerm] = useState("");

    const applyPriceFilter = () => {
        setCurrentPage(1);
        setPrice(tempPrice);
        window.scrollTo(0, 0);
    };

    const categories = [
        { path: "", label: "ALL PRODUCTS" },
        { path: "smartPhone", label: "SMART PHONE" },
        { path: "accessories", label: "LAPTOP" },
        { path: "computerAccessories", label: "ACCESSORIES" },
        { path: "electronics", label: "ELECTRONICS" },
        { path: "sports", label: "CLOTHES" },
        { path: "books", label: "BOOKS" },
        { path: "homeEquipments", label: "HOME" }
    ];

    // Filter categories based on the search term
    const filteredCategories = categories.filter(cat =>
        cat.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AsidebarMainContainer>
            <div className={`container ${sideBar ? "" : "closeSideSlider"}`}>
                <div className="closeButton activeCard" onClick={() => setSideBar(false)}>
                    <RiCloseCircleFill fontSize={"30px"} />
                </div>

                <div className="categorySection">
                    <h3>CATEGORIES</h3>
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="searchInput"
                    />
                    <ul className="categoryList">
                        {filteredCategories.map((cat, index) => (
                            <li key={index}>
                                <Link
                                    to={cat.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCategory(cat.path);
                                        window.scrollTo(0, 0);
                                        setCurrentPage(1);  // Reset to the first page for filtered results
                                    }}
                                    className={category === cat.path ? "selectedCategory" : ""}
                                >
                                    {cat.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="priceFilter">
                    <h3>PRICE</h3>
                    <div className="filter">
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: "10px", fontWeight:"600" }}>
                            <span>Rs. {tempPrice[0]}</span>
                            <span>Rs. {tempPrice[1]}</span>
                        </div>

                        <div className="slider-apply">
                            <Slider
                                getAriaLabel={() => 'Price range'}
                                value={tempPrice}
                                onChange={(event, newPrice) => setTempPrice(newPrice)}
                                valueLabelDisplay="off"
                                min={1}
                                max={maxPrice}
                                sx={{
                                    color: 'rgb(50, 50, 50)',
                                    '& .MuiSlider-thumb': { backgroundColor: 'rgb(50, 50, 50)' },
                                    '& .MuiSlider-track': { backgroundColor: 'rgb(50, 50, 50)' },
                                    '& .MuiSlider-rail': { backgroundColor: 'rgb(200, 200, 200)' },
                                }}
                            />
                            <div className="applyButton">
                                <button onClick={applyPriceFilter}>Go</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ratingFilter">
                    <h3>RATING</h3>
                    <ReactStars
                        onChange={(newRating) => { setRating(newRating);  window.scrollTo(0, 0); }}
                        value={rating}
                        size={window.innerWidth < 600 ? 20 : 35}
                        activeColor="#f1c40f"
                        edit={true}
                        isHalf={true}
                    />
                </div>
            </div>
        </AsidebarMainContainer>
    );
};

export default Asidebar;

const AsidebarMainContainer = styled.div`
    .container{
        height: 100vh;
        width: 360px;
        display: flex;
        flex-direction: column;

        h3{
            width: 100%;
            padding: 5px 10px;
            border-radius: 10px;
            background-color: rgba(83, 83, 83, 0.877);
            color: white;
            margin-top: 20px;
            margin-bottom: 5px;
        }

        @media screen and (max-width: 1700px) {
            width: 250px;
        }

        @media screen and (max-width: 768px) {
            width: 320px;
            background-color: aliceblue;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 1000;
            box-shadow: 0px 0px 4px black;
            transform: translateX(0%);
            transition: all 0.5s;
        }
    }

    .closeButton{
        display: none;
    }

    @media screen and (max-width: 768px) {
        .closeButton{
            display: block;
            font-size: 30px;
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 25px;
            cursor: pointer;
            color: black;
        }

        .closeSideSlider{
            transform: translateX(-150%);
        }
    }

    .categorySection{
        margin-top: 50px;
        margin-left: 30px;
        padding: 10px;
    }

    .searchInput {
        width: 100%;
        padding: 8px;
        border: 1px solid rgb(200, 200, 200);
        margin: 10px 0;
        border-radius: 8px;
    }

    .categoryList li{
        list-style-type: none;
        margin: 8px;
        font-size: large;
    }

    .categoryList li *{
        color: black;
        text-decoration: none;
    }

    /* Style for the selected category */
    .selectedCategory {
        color: white !important;
        background-color: rgb(60, 60, 60);
        padding: 3px 6px;
        border-radius: 5px;
        font-weight: bold;
        transition: all 0.3s;
    }

    .priceFilter{
        margin-left: 30px;
        padding: 10px;
    }

    .filter{
        margin: 10px;
    }

    .applyButton{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .applyButton > button{
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: rgb(60, 60, 60);
        color: white;
        border: none;
        font-size: medium;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;

        &:active{
            transform: scale(0.93);
            transition: all 0.3s;
        }
    }

    .ratingFilter{
        margin-left: 30px;
        padding: 10px;
    }
`;
