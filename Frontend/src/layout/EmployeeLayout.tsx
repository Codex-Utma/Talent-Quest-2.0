import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useAuth from "../hooks/useAuth";
import { AxiosInstance } from "../config/axios";

export default function EmployeeLayout() {

    const navigate = useNavigate();

    const { logout, user } = useAuth();

    useEffect(() => {
        async function validateAuth() {
            if (!user || user.userType !== 'employee') {
                logout();
                navigate('/');
                await AxiosInstance.post('/user/logout');
            }
        }

        validateAuth();
    }, [user, navigate, logout]);

    return (

        <>
            <nav className="bg-white shadow">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://ucarecdn.com/1e16f66a-0704-43a1-a16f-65c23988af64/-/format/auto/-/quality/smart/"
                                    alt="Logo"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Proyecto</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-3 relative flex items-center">
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://thumbs.dreamstime.com/b/icono-ejecutivo-joven-del-perfil-de-la-mujer-81933348.jpg"
                                    alt="Usuario"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    );
}
