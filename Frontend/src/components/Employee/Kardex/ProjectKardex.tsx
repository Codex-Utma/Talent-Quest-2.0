import { ProjectType } from "../../../types/kardex";

export default function ProjectKardex({ projects }: { projects: ProjectType[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                projects.map(project => (
                    <div key={project.id} className="bg-gray-50 rounded-lg shadow p-4">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}
