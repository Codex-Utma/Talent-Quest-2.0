import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeCertifications() {
    try {
        await prisma.certification.createMany({
            data: [
                {
                    name: "Certificado - Git",
                    description: "Certificado que avala los conocimientos en Git",
                    courseId: 1,
                },
                {
                    name: "Certificado - Python",
                    description: "Certificado que avala los conocimientos en Python",
                    courseId: 2,
                },
                {
                    name: "Certificado - React",
                    description: "Certificado que avala los conocimientos en React",
                    courseId: 3,
                },
                {
                    name: "Certificado - Angular",
                    description: "Certificado que avala los conocimientos en Angular",
                    courseId: 4,
                }
            ]
        })
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding certifications");
    }
}

try {
    fakeCertifications();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding certifications");
}
