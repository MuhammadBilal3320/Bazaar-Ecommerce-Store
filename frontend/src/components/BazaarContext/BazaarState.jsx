import { useState } from "react";
import createBazaarContext from "./BazaarContext";
import React from 'react'

const BazaarState = (props) => {

    const [sideBar, setSideBar] = useState(false);

    return (
        <createBazaarContext.Provider value={{
            sideBar, setSideBar,
        }}>

            {props.children}
        </createBazaarContext.Provider>
    )
}

export default BazaarState
