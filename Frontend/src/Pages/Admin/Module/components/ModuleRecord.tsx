import { ModuleResponseType } from "../../../../types/module";

export default function ModuleRecord({ module }: { module: ModuleResponseType }) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {module.name}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {module.description}
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
