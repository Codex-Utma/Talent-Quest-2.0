import { CertificationType } from "../../../types/kardex"

const headers = [
    "Certificación",
    "Descripción",
    "Fecha Obtención"
]

export default function CertificationTable({ certifications } : { certifications: CertificationType[] }) {
    return (
        <table className="w-full">
            <thead>
                <tr className="border-b">
                    {
                        headers.map(header => (
                            <th key={header} className="text-left py-2">{header}</th>
                        ))
                    }
                </tr>

            </thead>
            <tbody>
                {
                    certifications.map(cert => (
                        <tr key={cert.id} className="border-b">
                            <td className="py-2">{cert.name}</td>
                            <td className="py-2">{cert.description}</td>
                            <td className="py-2">{cert.createdAt}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
