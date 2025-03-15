import { useEffect, useState } from "react";

import { AxiosInstance } from "../../../config/axios";

import RegisterForm from "../../../components/Admin/RegisterForm";
import { DepartmentType } from "../../../types/department";
import { UserTypeType } from "../../../types/userType";

export default function AddUser() {

    const [departments, setDepartments] = useState<DepartmentType[]>([]);
    const [userTypes, setUserTypes] = useState<UserTypeType[]>([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await AxiosInstance.get("/admin/form/register");
                setDepartments(response.data.data.departments);
                setUserTypes(response.data.data.userTypes);
            } catch (error: any) {
                alert(error.response.data.message);
            }
        }

        fetchData();
    }, []);

    return <RegisterForm departments={departments} userTypes={userTypes} />;
}
