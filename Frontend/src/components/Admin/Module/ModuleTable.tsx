import { ModuleType } from "../../../types/module";
import ModuleRecord from "./ModuleRecord";

export default function ModuleTable({ modules }: { modules: ModuleType[] }) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre del Módulo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descripción
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    modules.length > 0 ? (
                        modules.map((module) => (
                            <ModuleRecord key={module.id} module={module} />
                        ))
                    ) : (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap" colSpan={3}>
                                <div className="text-center text-gray-500">No hay cursos disponibles</div>
                            </td>
                        </tr>
                    )
                }
                {/* Repite para otros módulos */}
            </tbody>
        </table>
    )
}
