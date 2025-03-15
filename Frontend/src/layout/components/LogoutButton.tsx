import { useState } from "react";
import { AxiosInstance } from "../../config/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LogoutButton() {

    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    async function handleLogout() {
        try {
            await AxiosInstance.post('/user/logout');
            logout();
            navigate('/');
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className="relative" >
            <div className="flex items-center hover:cursor-pointer"
                onClick={toggleDropdown}
            >
                <img
                    className="h-8 w-10 rounded-full"
                    src="https://thumbs.dreamstime.com/b/icono-ejecutivo-joven-del-perfil-de-la-mujer-81933348.jpg"
                    alt="Perfil de Admin"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">{`${user?.name} ${user?.lastName}`}</span>
            </div>
            {
                isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left py-2 px-4 text-red-600 hover:bg-gray-100 transition hover:cursor-pointer"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                )
            }
        </div>
    )
}
