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
            <header className="bg-white shadow-sm">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex-1 flex items-center">
                            <div className="p-6">
                                <img
                                    src="https://ucarecdn.com/1e16f66a-0704-43a1-a16f-65c23988af64/-/format/auto/-/quality/smart/"
                                    alt="Logo"
                                    className="h-10"
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-4 relative flex-shrink-0">
                                <div className="flex items-center">
                                    <img
                                        className="h-8 w-10 rounded-full"
                                        src="https://thumbs.dreamstime.com/b/icono-ejecutivo-joven-del-perfil-de-la-mujer-81933348.jpg"
                                        alt="Perfil de Admin"
                                    />
                                    <span className="ml-3 text-sm font-medium text-gray-700">Admin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <p>.</p>
                <Outlet />
            </main>
        </div>
    );
}
