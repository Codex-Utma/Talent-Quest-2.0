import { assignProjectSchema } from "../../../schemas/assignProject.schema";
import { AssignProjectType } from "../../../types/project";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputProject from "../../../components/Admin/Project/Assign/InputProject";
import InputUser from "../../../components/Admin/Project/Assign/InputUser";
import { AxiosInstance } from "../../../config/axios";
import { useNavigate } from "react-router-dom";

const AssignWorker = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<AssignProjectType>({
        resolver: zodResolver(assignProjectSchema),
    });

    const onSuccess = async (data: AssignProjectType) => {
        try {
            const response = await AxiosInstance.post(`/admin/project/setProject`, {
                projectId: data.projectId,
                employeeId: data.userId
            });
            alert(response.data.message);
        } catch (error: any) {
            alert(error.response.data.message);
        } finally {
            navigate("/admin/project");
        }
    }

    return (
        <div className="flex flex-col p-8 bg-transparent">

            <h1
                className="text-4xl font-bold mb-6"
            >
                Asignar Proyecto
            </h1>

            <form className="py-10 space-y-6" onSubmit={handleSubmit(onSuccess)}>
                {/* Proyecto */}
                <InputProject register={register} errors={errors}  />

                {/* ID del empleado */}

                <InputUser register={register} errors={errors} />

                {/* Botones */}
                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:cursor-pointer">
                        Asignar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AssignWorker;
