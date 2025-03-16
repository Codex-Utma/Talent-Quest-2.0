import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeModules() {
    try {
        await prisma.module.createMany({
            data: [
                {
                    name: "Fundamentos de Git",
                    description: "Aprende los fundamentos de Git",
                    courseId: 1
                },
                {
                    name: "Comandos de Git",
                    description: "Aprende los comandos de Git",
                    courseId: 1
                },
                {
                    name: "Flujo de trabajo con Git",
                    description: "Aprende a trabajar con Git",
                    courseId: 1
                },
                {
                    name: "Fundamentos de Python",
                    description: "Aprende los fundamentos de Python",
                    courseId: 2
                },
                {
                    name: "Estructuras de datos en Python",
                    description: "Aprende las estructuras de datos en Python",
                    courseId: 2
                },
                {
                    name: "POO en Python",
                    description: "Aprende la programación orientada a objetos en Python",
                    courseId: 2
                },
                {
                    name: "Fundamentos de React",
                    description: "Aprende los fundamentos de React",
                    courseId: 3
                },
                {
                    name: "Componentes en React",
                    description: "Aprende los componentes en React",
                    courseId: 3
                },
                {
                    name: "Hooks en React",
                    description: "Aprende los hooks en React",
                    courseId: 3
                },
                {
                    name: "Fundamentos de Angular",
                    description: "Aprende los fundamentos de Angular",
                    courseId: 4
                },
                {
                    name: "Componentes en Angular",
                    description: "Aprende los componentes en Angular",
                    courseId: 4
                },
                {
                    name: "Directivas en Angular",
                    description: "Aprende las directivas en Angular",
                    courseId: 4
                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding modules");
    }
}

try {
    fakeModules();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding modules");
}
