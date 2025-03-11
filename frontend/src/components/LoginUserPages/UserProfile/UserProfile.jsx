import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Navbar/Navbar'
import UserProfileBody from './UserProfileBody'
import UserProfileAsidebar from './UserProfileAsidebar'
import Footer from '../../Footer/Footer'

const UserProfile = () => {
    return (
        <MainContainer>
            <Navbar/>
            <UserProfileBody/>
            <UserProfileAsidebar/>
            <Footer/>
        </MainContainer>
    )
}

export default UserProfile

const MainContainer = styled.div`
    
`;
