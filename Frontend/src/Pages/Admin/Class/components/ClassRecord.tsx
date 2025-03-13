import { ClassType } from "../../../../types/class";

export default function ClassRecord({ classRecord }: { classRecord: ClassType }) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {classRecord.name}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {classRecord.description}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-3">
                    <button className="text-custom hover:text-custom-600 !rounded-button">
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
