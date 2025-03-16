import { CoursesType } from "../../../types/course";
import CourseRecord from "./CourseRecord";

const headers = [
    'Nombre del Curso',
    'Descripción',
    'Acciones'
]

export default function CourseTable({ courses }: { courses: CoursesType[] }) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {
                        headers.map((header, index) => (
                            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {header}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    courses.length > 0 ? (
                        courses.map((course) => (
                            <CourseRecord key={course.id} course={course} />
                        ))
                    ) : (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap" colSpan={3}>
                                <div className="text-center text-gray-500">No hay cursos disponibles</div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
