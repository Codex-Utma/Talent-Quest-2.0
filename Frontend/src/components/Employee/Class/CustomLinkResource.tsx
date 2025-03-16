import { ExternalResourceType } from "../../../types/resource";

export default function CustomLinkResource({ resource }: { resource: ExternalResourceType }) {
    return (
        <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition duration-300"
        >
            <h3 className="text-lg font-semibold text-blue-800">{resource.name}</h3>
            <p className="text-gray-600 text-sm">{resource.description}</p>
        </a>
    )
}
