import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AxiosInstance } from "../../../config/axios";

export default function MarkAsCompleted() {

    const { courseId, classId, moduleId } = useParams();

    const navigate = useNavigate();

    const handleMarkAsCompleted = async () => {
        try {
            await AxiosInstance.patch("employee/classes", {
                courseId,
                classId,
            });
            navigate(`/employee/course/${courseId}/${moduleId}`);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };

    return (
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 font-semibold"
        onClick={handleMarkAsCompleted}
      >
        Marcar como completado
      </button>
    )
}
