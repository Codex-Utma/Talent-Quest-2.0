import { useNavigate, useParams } from "react-router-dom";
import { ModuleType } from "../../../types/module";

export default function CustomModule({ module }: { module: ModuleType }) {

    const navigate = useNavigate();
    const { courseId } = useParams<{ courseId: string }>();

    return (
        <div key={module.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer"
            onClick={() => navigate(`/user/course/${courseId}/${module.id}`)}>
            <h3 className="text-lg font-semibold text-gray-800">{module.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{module.description}</p>
        </div>
    )
}
