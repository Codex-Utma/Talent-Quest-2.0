import { CourseData } from "../../../types/dashboard";

export default function CourseDashboard({ course }: { course: CourseData }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{course.Course.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{course.percentage}% completado</p>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${course.percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
