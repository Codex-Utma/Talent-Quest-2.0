import { ProjectListType } from "../../../types/project";

export default function ProjectRecord({project}: {project: ProjectListType}) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <span className={`w-3 h-3 ${project.isFinished ? 'bg-red-500' : 'bg-green-500'} rounded-full inline-block`}></span>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                </div>
            </div>
        </div>
    )
}
