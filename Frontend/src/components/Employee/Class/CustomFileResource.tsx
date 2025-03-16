import { AxiosInstance } from "../../../config/axios";
import { ResourceFileType } from "../../../types/resource";

export default function CustomFileResource({ file }: { file: ResourceFileType }) {

    const handleClick = async () => {
        try {
            const response = await AxiosInstance.get(`employee/resources/file/${file.id}`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${file.name}.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);


        } catch (error: any) {
            alert(error.response.data.message);

        }
    }

    return (
        <a
            key={file.id}
            onClick={handleClick}
            className="block bg-green-50 p-4 rounded-lg shadow hover:bg-green-100 transition duration-300 hover:cursor-pointer"
        >
            <h3 className="text-lg font-semibold text-green-800">{file.name}</h3>
            <p className="text-gray-600 text-sm">{file.description}</p>
        </a>
    )
}
