import { UseFormRegister } from "react-hook-form";
import { AssignProjectType } from "../../../../types/project";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";
import { AxiosInstance } from "../../../../config/axios";
import { EmployeeResponseType } from "../../../../types/employee";

interface InputUserProps {
    register: UseFormRegister<AssignProjectType>;
}

export default function InputUser({ register }: InputUserProps) {
    const [userId, setUserId] = useState<string>("");
    const [employees, setEmployees] = useState<EmployeeResponseType[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeResponseType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getUsers = async (userId: string) => {
        if (!userId) return;
        setLoading(true);
        try {
            const response = await AxiosInstance.get(`/admin/form/employees?id=${userId}`);
            setEmployees(response.data.data);
        } catch (error: any) {
            alert(error.response?.data?.message || "Error al obtener empleados");
        } finally {
            setLoading(false);
        }
    };

    const debouncedGetUsers = useCallback(
        debounce((userId: string) => {
            getUsers(userId);
        }, 1000),
        []
    );

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUserId = e.target.value;
        setUserId(newUserId);
        setSelectedEmployee(null); // Limpiar selección si cambia el input
        debouncedGetUsers(newUserId);
    };

    const handleSelectEmployee = (selected: EmployeeResponseType) => {
        setSelectedEmployee(selected);
        register("userId", { value: String(selected.id) });
        setUserId(selected.name);
        setEmployees([]);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">ID del Empleado</label>
            <input
                type="text"
                placeholder="Ingrese el ID del Empleado"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={userId}
                onChange={handleInput}
            />
            {loading && <p className="text-sm text-gray-500 mt-1">Buscando...</p>}
            { employees && employees.length > 0 ? (
                <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md z-10">
                    {employees.map((employee) => (
                        <div
                            key={employee.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectEmployee(employee)}
                        >
                            {employee.name}
                        </div>
                    ))}
                </div>
            ): null}

            {selectedEmployee && (
                <div className="mt-4">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Empleado Seleccionado</h2>
                    <p className="text-gray-800">{selectedEmployee.name}</p>
                </div>
            )}
        </div>
    );
}
