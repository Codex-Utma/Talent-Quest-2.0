import { assignProjectSchema } from "../../../schemas/assignProject.schema";
import { AssignProjectType } from "../../../types/project";

// import { AxiosInstance } from "../../../config/axios";

import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputProject from "./components/InputProject";
import InputUser from "./components/InputUser";

const AssignWorker = () => {

    const { register, handleSubmit } = useForm<AssignProjectType>({
        resolver: zodResolver(assignProjectSchema),
    });

    const onSuccess = async (data: AssignProjectType) => {
        try {
            // const response = await AxiosInstance.post(`/admin/project/assign`, {
            //     ...data,
            // });
            // alert(response.data.message);
            console.log(data);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    const onError = (errors: FieldErrors) => {
        alert("Error al asignar el proyecto");
        console.log(errors);
    }

    return (
        <div className="flex flex-col p-8 bg-transparent">
            <form className="py-10 space-y-6" onSubmit={handleSubmit(onSuccess, onError)}>
                {/* Proyecto */}
                <InputProject register={register} />

                {/* ID del empleado */}

                <InputUser register={register} />

                {/* Botones */}
                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Asignar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AssignWorker;
