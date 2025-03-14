import { CourseData } from "../../../types/dashboard";

export default function CourseDashboard({ course }: { course: CourseData }) {
  return (
    <div key={course.Course.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{course.Course.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{course.percentage}% completado</p>
      </div>
    </div>
  )
}
