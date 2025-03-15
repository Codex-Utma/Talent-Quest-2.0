import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useAuth from "../hooks/useAuth";
import { AxiosInstance } from "../config/axios";
import LogoutButton from "./components/LogoutButton";

const NavigationsItems = [
    {
        title: 'Dashboard',
        icon: 'fas fa-chart-line',
        to: '/admin'
    },
    {
        title: 'Usuarios',
        icon: 'fas fa-users',
        to: '/admin/register'
    },
    {
        title: 'Cursos',
        icon: 'fas fa-graduation-cap',
        to: '/admin/courses'
    },
    {
        title: 'Proyectos',
        icon: 'fas fa-chart-bar',
        to: '/admin/project'
    }
]

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
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full mt-20">
                <nav className="mt-6">
                    {
                        NavigationsItems.map((item, index) => (
                            <CustomLink
                                key={index}
                                to={item.to}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))
                    }
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm fixed top-0 w-full h-16 flex items-center z-10">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between">
                        <div className="flex items-center">
                            <div className="p-6">
                                <Link to="/admin">
                                    <img
                                        src="https://ucarecdn.com/1e16f66a-0704-43a1-a16f-65c23988af64/-/format/auto/-/quality/smart/"
                                        alt="Logo"
                                        className="h-10 hover:cursor-pointer"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-4 relative flex-shrink-0">
                                <LogoutButton />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mt-16 pl-64 p-6 overflow-y-auto flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

const CustomLink = ({ to, icon, title }: { to: string; icon: string; title: string }) => {
    return (
        <Link className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            to={to}
        >
            <i className={`${icon} w-5 h-5 mr-3`}></i>
            <span>{title}</span>
        </Link>
    );
};
