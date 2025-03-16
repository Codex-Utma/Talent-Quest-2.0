import { InsigniaType } from "../../../types/kardex";

export default function Insignias({ insignias } : { insignias: InsigniaType[] }) {
    return (
        <div className="ml-auto flex items-center">
            {
                insignias.map(insignia => (
                    <span key={insignia.id} className="bg-blue-500 text-white py-1 px-2 rounded mr-2">{insignia.name}</span>
                ))
            }
        </div>
    )
}
