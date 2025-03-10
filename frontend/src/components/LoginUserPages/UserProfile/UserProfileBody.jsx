import React from 'react'
import styled from 'styled-components'

const UserProfileBody = () => {
    return (
        <MainContainer>
            <h1 className='ProfileHeading'>My Profile</h1>
        </MainContainer>
    )
}

export default UserProfileBody

const MainContainer = styled.main`
    width: 100%;

    .ProfileHeading{
        background-color: whitesmoke;
        padding: 1rem;
        font-weight: 600;
    }
`;
