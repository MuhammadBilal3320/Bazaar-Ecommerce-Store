import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../store";
import { userLoaderAction } from "../actions/AuthenticationAction";

const RouteProtector = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.userLoader);
    const navigate = useNavigate();
    const [checkAuth, setCheckAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
                await store.dispatch(userLoaderAction());
                setCheckAuth(true);
        };
        checkAuth();
    }, []);

    useEffect(() => {
        if (!isAuthenticated && checkAuth) {
            navigate("/login", { replace: true });
        }
    }, [isAuthenticated, navigate, checkAuth]);

    return (children);
};

export default RouteProtector;
