import { CoursesType } from "../../../types/course";

import { useNavigate } from "react-router-dom";

export default function CourseRecord({ course }: { course: CoursesType }) {

    const navigate = useNavigate();

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {course.name}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {course.description}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-3">
                    <button className="text-custom hover:text-custom-600 !rounded-button hover:cursor-pointer"
                        onClick={() => navigate(`/admin/courses/${course.id}`)}
                    >
                        <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-700 !rounded-button">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-700 !rounded-button">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}
