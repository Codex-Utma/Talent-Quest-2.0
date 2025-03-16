import { ExternalResourceType, FileResourceType } from "../../../types/resource"
import { ExternalResourceRecord, FileResourceRecord } from "./ResourceRecord";

const headers = [
    { name: 'Nombre del Recurso', key: 'name' },
    { name: 'Descripción', key: 'description' },
    { name: 'Acciones', key: 'actions' },
]

interface ResourceRecordProps {
    externalResources: ExternalResourceType[];
    fileResources: FileResourceType[];
}

export default function ResourceTable( { externalResources, fileResources }: ResourceRecordProps ) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {
                        headers.map((header) => (
                            <th key={header.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {header.name}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {externalResources && externalResources.length > 0 &&
                    externalResources.map((resource) => (
                        <ExternalResourceRecord key={resource.id} resource={resource} />
                    ))
                }

                {fileResources && fileResources.length > 0 &&
                    fileResources.map((resource) => (
                        <FileResourceRecord key={resource.id} resource={resource} />
                    ))
                }

                {externalResources.length === 0 && fileResources.length === 0 && (
                    <tr>
                        <td className="px-6 py-4 text-center text-gray-500" colSpan={3}>
                            No hay recursos disponibles
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
    )
}
