import { useCallback, useState } from "react";
import debounce from "just-debounce-it";
import { AxiosInstance } from "../../../../config/axios";
import { CourseProjectResponse } from "../../../../types/course";
import { UseFormRegister } from "react-hook-form";
import { ProjectInputType } from "../../../../types/project";

export default function InputCourses({ register }: { register: UseFormRegister<ProjectInputType> }) {
    const [course, setCourse] = useState<string>("");
    const [courses, setCourses] = useState<CourseProjectResponse[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<CourseProjectResponse[]>([]);

    const getCourses = async (name: string) => {
        try {
            const response = await AxiosInstance.get(`/admin/form/courses?name=${name}`);
            setCourses(response.data.data);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };

    const debouncedGetCourses = useCallback(
        debounce((name: string) => {
            getCourses(name);
        }, 1000),
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCourse = e.target.value;
        setCourse(newCourse);
        debouncedGetCourses(newCourse);
    };

    const handleSelectCourse = (selected: CourseProjectResponse) => {
        setCourses([]);
        setCourse("");
        if (!selectedCourses.some((c) => c.id === selected.id)) {
            const updatedCourses = [...selectedCourses, selected];
            setSelectedCourses(updatedCourses);
            if (updatedCourses.length > 0) {
                register("courses", { value: [updatedCourses[0].id, ...updatedCourses.slice(1).map(course => course.id)] });
            }
        }
    };

    return (
        <>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cursos Asociados</label>
                <input
                    type="text"
                    name="curso"
                    placeholder="Ingrese el nombre del curso"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    value={course}
                    onChange={handleChange}
                />
                { courses && courses.length > 0 ? (
                    <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelectCourse(course)}
                            >
                                {course.name}
                            </div>
                        ))}
                    </div>
                ) : (
                    null
                )}
            </div>
            <div>
                <h2 className="text-sm font-medium text-gray-700 mb-2">Cursos Seleccionados</h2>
                <ul>
                    {selectedCourses.map((course, index) => (
                        <li key={index} className="text-gray-800">{course.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
