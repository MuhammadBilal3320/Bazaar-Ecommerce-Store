import React from 'react'
// Import Icons
import { IoCamera } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { FaTabletButton } from "react-icons/fa6";
import { PiMonitorFill } from "react-icons/pi";
import { BiSolidSpeaker } from "react-icons/bi";
import { ImHeadphones } from "react-icons/im";
import { FaBook } from "react-icons/fa";
import styled from 'styled-components';

const categoryList = [
    {
        icon: <IoCamera />,
        itemName: "CAMERA",
        url: "This is url"
    },
    {
        icon: <FaGamepad />,
        itemName: "VIDEO GAMES",
        url: "This is url"
    },
    {
        icon: <FaTabletButton />,
        itemName: "TABLET & PHONE",
        url: "This is url"
    },
    {
        icon: <PiMonitorFill />,
        itemName: "SCREEN",
        url: "This is url"
    },
    {
        icon: <BiSolidSpeaker />,
        itemName: "SPEAKER",
        url: "This is url"
    },
    {
        icon: <ImHeadphones />,
        itemName: "HEADPHONE",
        url: "This is url"
    },
    {
        icon: <FaBook />,
        itemName: "BOOKS",
        url: "This is url"
    }
]

const CategoryBlock = () => {

    return (
        <CategoryMainContainer>
            <div className="title"><h1 className='blockTitle'>TOP CATEGORY</h1></div>
            <div className="categoryContainer">
                {
                    categoryList.map((item, index) => (
                        <div key={index} className="categoryItem perfectCenter activeButton cursorPointer">
                            <div className="icon perfectCenter">{item.icon}</div>
                        </div>
                    ))
                }
            </div>
        </CategoryMainContainer>
    )
}

export default CategoryBlock

const CategoryMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    width: 100%;
    flex-direction: column;

    
.title{
    width: 68%;
    @media screen and (max-width: 480px) {
        width: 98%;
    }
}

.categoryContainer{
    margin-top: 15px;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        justify-content: space-around;
        flex-wrap: wrap;
        width: 98%;
    }
}

.categoryItem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 3px black;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    @media screen and (max-width: 480px) {
        height: 45px;
        width: 45px;
    }
}

.icon{
    font-size: 40px;
    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
}


`
