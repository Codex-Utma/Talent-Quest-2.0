import { Link } from "react-router-dom";

interface CustomShortcutProps {
    title: string;
    icon: string;
    to: string;
}

export default function CustomShortcut ({title, icon, to}: CustomShortcutProps) {
    return (
        <Link to={to} className="bg-blue-600 text-white rounded-md px-4 py-2 hover:cursor-pointer">
            <button className='hover:cursor-pointer'>
                <i className={icon + " mr-2 hover:cursor-pointer"}></i>
                <span className='hover:cursor-pointer'>{title}</span>
            </button>
        </Link>
    );
}
