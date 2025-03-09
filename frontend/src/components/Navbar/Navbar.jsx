import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RiMenuUnfoldFill, RiDashboardFill } from "react-icons/ri";
import { ImMenu3, ImSearch } from "react-icons/im";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown } from "react-icons/md";
import { userLogoutAction } from '../../actions/AuthenticationAction';

// Navigation Items
const navItems = [
    { path: "/", name: "HOME" },
    { path: "/product", name: "PRODUCT" },
    { path: "/contactUs", name: "CONTACT" },
];

// User Menu Items (Dynamic Based on Authentication)
const getUserMenuItems = (isAuthenticated, user, handleLogout) => [
    { path: "/registration", label: "Sign up", show: !isAuthenticated },
    { path: "/login", label: "Sign in", show: !isAuthenticated },
    { path: "/dashboard", label: "Dashboard", icon: <RiDashboardFill />, show: isAuthenticated && (user?.role === "admin" || user?.role === "master") },
    { path: "/userProfile", label: "Profile", icon: <CgProfile />, show: isAuthenticated },
    { path: "/logout", label: "Logout", icon: <AiOutlineLogout />, show: isAuthenticated, onClick: handleLogout }
];

const Navbar = ({ setSideBar, setCurrentPage }) => {
    const [mainDropDown, setMainDropDown] = useState(false);
    const [userDropDown, setUserDropDown] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [selectedMenu, setSelectedMenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isAuthenticated } = useSelector(state => state.userLoader);
    const dispatch = useDispatch();

    useEffect(() => {
        const mainPath = `/${location.pathname.split('/')[1]}`;
        const activeItem = navItems.find(item => item.path === mainPath);
        if (activeItem) setSelectedMenu(activeItem.path);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.userLogo-userMenu') && userDropDown) setUserDropDown(false);
            if (!event.target.closest('.menu') && mainDropDown) setMainDropDown(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [userDropDown, mainDropDown]);

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        navigate(keyword.trim() ? `/product/${keyword}` : '');
    };

    const handleLogout = async () => {
        await dispatch(userLogoutAction());
        navigate("/", { replace: true });
        window.location.reload();
    };

    return (
        <Nav>
            <div className="upperPart">
                <div className={`hamburger ${selectedMenu === "/product" ? "visibleHamburger" : ""} activeButton cursorPointer`} onClick={() => setSideBar(true)}>
                    <RiMenuUnfoldFill />
                </div>
                <Link to="/" className='noUnderline'><h1 className="bazaar activeButton cursorPointer">BAZAAR</h1></Link>
                <div className="bag-loginUser">
                    <div className="bag cursorPointer activeButton">
                        <div className="bagCounter"><b>99</b></div>
                        <FaShoppingBag />
                    </div>
                    <div className="userLogo-userMenu">
                        <div onClick={() => setUserDropDown(!userDropDown)} className="userLogo cursorPointer activeButton">
                            <FaUser /><MdArrowDropDown />
                        </div>
                        <ul className={`userMenu ${userDropDown ? "userDropDown" : ""}`}>
                            {getUserMenuItems(isAuthenticated, user, handleLogout)
                                .filter(item => item.show)
                                .map((item, index) => (
                                    <Link key={index}
                                        className={`noUnderline menuList ${item.label === "Logout" ? "logoutItem" : ""}`}
                                        to={item.path}
                                        onClick={item.onClick}>

                                        <li>{item.icon}</li>
                                        <li>{item.label}</li>

                                    </Link>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="downPart">
                <div onClick={() => setMainDropDown(!mainDropDown)} className="hamburger-two activeButton cursorPointer">
                    <ImMenu3 fontSize="30px" />
                </div>
                <ul className={`menu ${mainDropDown ? "dropDown" : ""}`}>
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.path} className={`noUnderline navMenu ${selectedMenu === item.path ? "active" : ""}`}>
                            <li onClick={() => { setSelectedMenu(item.path); setCurrentPage(1); }}>{item.name}</li>
                        </Link>
                    ))}
                </ul>
                <form className="searchBar-Main perfectCenter" onSubmit={searchSubmitHandler}>
                    <div className="searchBar-Sub perfectCenter">
                        <input type="text" placeholder="Search..." onChange={(e) => setKeyword(e.target.value)} />
                        <button type="submit" className="logo perfectCenter cursorPointer">
                            <ImSearch className="activeButton" />
                        </button>
                    </div>
                </form>
            </div>
        </Nav>
    );
};

export default Navbar;


const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    user-select: none;
    color: white;

    // This is Selected Navbar Menu
.active{
    color: black !important;
    background: white;
    border-radius: 5px;
    font-weight: 800;
}

    .upperPart {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(60, 60, 60);
    box-shadow: 0px 5px 10px 0px rgba(60, 60, 60, 0.699);
}

.hamburger {
    visibility: hidden;
}

@media screen and (max-width: 768px) {

    .visibleHamburger{
        visibility: visible;
    }

    .hamburger {
    font-size: 25px;
    user-select: none;
}
}

.bazaar {
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 2px;
    
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
}

.noUnderline{
    text-decoration: none;
    color: inherit;
}

.bag-loginUser {
    font-size: 25px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        width: 100px;
    }
}

.bag {
    position: relative;
}

.bagCounter {
    position: absolute;
    left: -10px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: small;
    background-color: rgba(202, 0, 0, 0.897);
    display: flex;
    justify-content: center;
    align-items: center;

    >b {
        font-size: 10px;
        font-weight: 0;
        color: white;
        letter-spacing: 1px;
    }
    
}


.userLogo-userMenu{
    position: relative;
}

.userMenu{
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    z-index: -1;
    text-align: center;
    position: absolute;
    opacity: 0;
    right: -5px;
    top: 20px;
    width: 130px;
    background-color: rgb(60, 60, 60);
    box-shadow: 0px 0px 3px 0px black;
    border-radius: 5px;
    padding: 12px 8px;
    transition: all 0.2s;
    > li{
        list-style: none;
        text-align: center;
        font-size: medium;

        cursor: pointer;

        &:hover{
            background-color: white;
            color: rgb(60, 60, 60);
            border-radius: 5px;
        }

        &:active{
            scale: 0.95;
        }
    }
}

.userDropDown{
    z-index: 100;
    width: 130px;
    opacity: 1;
    top: 40px;
}

.downPart {
    width: 100%;
    padding: 8px;
    background-color: rgba(27, 27, 27, 0.897);
    display: flex;
    justify-content: space-around;
}

.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
}

.navMenu > li{
    padding: 0px 5px;
    font-size: 15px;
    font-weight: 600;
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
}

.menuList{
    width: 100%;
    display: flex;
    justify-content: start;
    align-content: center;
    border-radius: 3px;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }

    &:active {
        scale: 0.95;
    }
}

.logoutItem:hover{
background-color: white;
color: #ec0202ef;
}

.menuList > li {
    padding: 2px 2.5px;
    font-size: 15px;
    font-weight: 500;
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
}

.hamburger-two{
    display: none;
    font-size: 25px;
}

@media screen and (max-width: 768px) {

    .downPart {
        z-index: 50;
        justify-content: space-between;
        position: relative;
        overflow: visible;
    }

    .hamburger-two{
        margin-left: 40px;
        display: block;
    }

    .menu {
        display: block;
        width: 180px;
        text-align: center;
        background-color: rgb(60, 60, 60);
        position: absolute;
        transition: all 0.2s;
        opacity: 0;
        top: 50px;
        left: 30px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

        >li {
            padding: 5px;
            color: white;

            &:active {
                background-color: white;
                color: rgb(60, 60, 60);
            }
        }
    }

    .dropDown{
        opacity: 1;
        top: 60px;
    }
}

.searchBar-Main {
    width: 50%;
}

.searchBar-Sub {
    overflow: hidden;
    background-color: whitesmoke;
    color: black;
    font-size: 20px;
    width: 70%;
    height: 40px;
    padding-left: 8px;
    outline: 2px solid transparent;
    transition: width 0.3s ease-in-out;
    border-radius: 6px;


    >input {
        background-color: transparent;
        font-size: medium;
        font-weight: 500;
        border: none;
        width: 100%;
        padding: 2px;

        &:focus {
            outline: none;
        }
    }

    >.logo {
        font-size: 25px;
        height: 50px;
        padding: 5px 15px;
        margin-left: 5px;
        border-left: 3px solid rgb(60, 60, 60);
        color: rgb(60, 60, 60);
        background-color: whitesmoke;
        /* border-radius: 10px; */
        &:hover{
            background-color: rgba(230, 228, 228, 0.849);
        }
    }
    @media screen and (max-width: 768px) {
        height: 35px;
    }
}
@media screen and (max-width: 768px) {
    
.searchBar-Main {
    width: 80%;
}
}


`
