import { AxiosInstance } from "../../../../config/axios";
import { ExternalResourceType, FileResourceType } from "../../../../types/resource";

export function ExternalResourceRecord({ resource }: { resource: ExternalResourceType }) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {resource.name}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {resource.description}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-3">
                    <button className="text-custom hover:text-custom-600 !rounded-button hover:cursor-pointer"
                        onClick={() => window.open(resource.url, "_blank")}
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

export function FileResourceRecord({ resource }: { resource: FileResourceType }) {

    const handleClick = async () => {
        try {
            const response = await AxiosInstance.get(`/admin/resource/file/${resource.id}`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${resource.name}.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

        } catch (error: any) {
            alert(error.response?.data?.message || "Error al descargar el archivo");
        }
    };


    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {resource.name}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {resource.description}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-3">
                    <button className="text-custom hover:text-custom-600 !rounded-button hover:cursor-pointer"
                        onClick={handleClick}
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
