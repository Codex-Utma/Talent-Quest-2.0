import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeCourses() {
    try {
        await prisma.course.createMany({
            data: [
                {
                    name: "Curso de Git",
                    description: "Capacitación en el uso de Git en proyectos de desarrollo de software",
                    amountClasses: 10,
                },
                {
                    name: "Curso de Python",
                    description: "Capacitación en el uso de Python en proyectos de desarrollo de software",
                    amountClasses: 10,
                },
                {
                    name: "Curso de React",
                    description: "Capacitación en el uso de React en proyectos de desarrollo de software",
                    amountClasses: 10,
                },
                {
                    name: "Curso de Angular",
                    description: "Capacitación en el uso de Angular en proyectos de desarrollo de software",
                    amountClasses: 10,
                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding certifications");
    }
}

try {
    fakeCourses();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding certifications");
}
