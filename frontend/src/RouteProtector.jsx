import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const RouteProtector = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.userLoader);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login');
        }
    }, [isAuthenticated])


return (
    <div>
        {children}
    </div>
)
}

export default RouteProtector
