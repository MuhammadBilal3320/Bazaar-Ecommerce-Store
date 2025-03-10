import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Navbar/Navbar'
import UserProfileBody from './UserProfileBody'

const UserProfile = () => {
    return (
        <MainContainer>
            <Navbar/>
            <UserProfileBody/>
        </MainContainer>
    )
}

export default UserProfile

const MainContainer = styled.div`
    
`;
