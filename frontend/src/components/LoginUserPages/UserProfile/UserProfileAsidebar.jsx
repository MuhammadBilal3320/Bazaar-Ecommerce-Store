import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import UserProfileContents from './UserProfileInnerAsidebar/UserProfileContents';

const UserProfileAsidebar = () => {
    const [activeTab, setActiveTab] = useState("profile");
    
    const menuItems = [
        { id: "profile", name: "My Profile", icon: <FaUserCircle />, content: <ProfileContent /> },
        { id: "orders", name: "My Orders", icon: <FaShoppingBag />, content: <OrdersContent /> },
        { id: "wishlist", name: "My Wishlist", icon: <TbStarFilled />, content: <WishlistContent /> }
    ];

    return (
        <MainWrapper>
            <AsideContainer>
                <div className="container">
                    <ul className="sideBarMenuList">
                        {menuItems.map(item => (
                            <li 
                                key={item.id} 
                                className={activeTab === item.id ? "active" : ""} 
                                onClick={() => setActiveTab(item.id)}
                            >
                                <span className='listIcon'>{item.icon}</span>
                                <span className='listName'>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </AsideContainer>
            <ContentContainer>
                {menuItems.find(item => item.id === activeTab)?.content}
            </ContentContainer>
        </MainWrapper>
    );
};

const ProfileContent = () => <UserProfileContents/>;
const OrdersContent = () => <div><h2>My Orders</h2><p>Order details go here...</p></div>;
const WishlistContent = () => <div><h2>My Wishlist</h2><p>Wishlist items go here...</p></div>;

export default UserProfileAsidebar;

const MainWrapper = styled.div`
    display: flex;
    height: 90vh;
    margin-bottom: 5px;
    
    @media (max-width: 970px) {
        flex-direction: column;
        height: 78vh;
    }
`;

const AsideContainer = styled.aside`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-right: 5px;
    
    .container{
        display: flex;
        justify-content: center;
        align-items: start;
        height: 100%;
        width: 100%;
        padding: 20px;
        background-color: whitesmoke;
    }

    .sideBarMenuList{
        display: flex;
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
        cursor: pointer;
        padding: 10px 15px;
        transition: all 0.2s ease-in-out;
        margin: 1px 0px;
    }

    .sideBarMenuList li:hover, .sideBarMenuList li.active {
        background-color: rgb(60, 60, 60);
        color: white;
        border-radius: 5px;
    }

    .listIcon{
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
    }

    .listName{
        font-size: large;
        display: flex;
        align-items: center;
        width: 80%;
    }

    @media (max-width: 970px) {
        width: 100%;
        .container {
            padding: 10px;
        }
        .sideBarMenuList {
            flex-direction: row;
            justify-content: space-around;
        }
        .sideBarMenuList li {
            flex-direction: column;
            align-items: center;
            padding: 8px;
        }
        .listName {
            font-size: small;
            justify-content: center;
        }
    }
`;

const ContentContainer = styled.div`
    width: 80%;
    padding: 20px;
    background: whitesmoke;
    margin-top: 5px;
    
    @media (max-width: 970px) {
        width: 100%;
    }
`;
