import { ClassType } from "../../../types/class";

export default function CustomClass({ class: classProp }: { class: ClassType }) {
    return (
        <div
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer"
        >
            <h3 className="text-lg font-semibold text-gray-800">{classProp.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{classProp.description}</p>
        </div>
    )
}
