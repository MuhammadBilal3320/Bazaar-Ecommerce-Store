import React from 'react'
import styled from 'styled-components'
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";

const UserProfileAsidebar = () => {
    return (
        <MainContainer>
            <div className="container">
                <ul className="sideBarMenuList">
                    <li><span className='listIcon'><FaUserCircle /></span><span className='listName'>My Profile</span></li>
                    <li><span className='listIcon'><FaShoppingBag /></span><span className='listName'>My Orders</span></li>
                    <li><span className='listIcon'><TbStarFilled /></span><span className='listName'>My Wishlist</span></li>
                </ul>
            </div>
        </MainContainer>
    )
}

export default UserProfileAsidebar

const MainContainer = styled.aside`
    height: 90vh;
    width: 15%;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        display: flex;
        justify-content: center;
        align-items: start;
        height: 100%;
        width: 100%;
        padding: 20px;
    }

    .sideBarMenuList{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    .sideBarMenuList li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align content to the start */
    cursor: pointer;
    padding: 10px 15px; /* Increased padding for better spacing */
}

    .sideBarMenuList li:hover{
        background-color: rgb(60, 60, 60);
        color: white;
        border-radius: 5px;
    }

    .sideBarMenuList li:active{
        transform: scale(0.96);
        transition: all 0.2s ease-in-out;
    }

    .listIcon{
    font-size: 20px;
    display: flex;
    justify-content: center; /* Align the text/icons to the start */
    align-items: center;
    width: 20%;
    }

    .listName{
    font-size: large;
    display: flex;
    justify-content: flex-start; /* Align the text/icons to the start */
    align-items: center;
    width: 80%;
    }

`;
