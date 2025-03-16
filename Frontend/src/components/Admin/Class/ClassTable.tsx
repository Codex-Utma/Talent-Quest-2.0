import { ClassType } from "../../../types/class";
import ClassRecord from "./ClassRecord";

const headers = [
    'Nombre de la Clase',
    'Descripción',
    'Acciones'
]

export default function ClassTable({ classes }: { classes: ClassType[] }) {
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
                    classes.length > 0 ? (
                        classes.map((classR) => (
                            <ClassRecord key={classR.id} classRecord={classR} />
                        ))
                    ) : (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap" colSpan={3}>
                                <div className="text-center text-gray-500">No hay classes disponibles</div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
