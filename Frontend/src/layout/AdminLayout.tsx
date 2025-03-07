import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useAuth from "../hooks/useAuth";
import { AxiosInstance } from "../config/axios";

export default function AdminLayout() {

    const navigate = useNavigate();

    const { logout, user } = useAuth();

    useEffect(() => {
        async function validateAuth() {
            if (!user || user.userType !== 'admin') {
                logout();
                navigate('/');
                await AxiosInstance.post('/user/logout');
            }
        }

        validateAuth();
    }, [user, navigate, logout]);

    return (
        <div>
            <p>admin</p>
        <Outlet />
        </div>
    );
}
