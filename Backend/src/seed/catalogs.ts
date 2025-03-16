import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeCatalogs() {
    try {
        await prisma.userType.createMany({
            data: [
                {
                    name: "Admin",
                    description: "Administrador del sistema"
                },
                {
                    name: "Employee",
                    description: "Empleado de la empresa"
                },
            ]
        });

        await prisma.department.createMany({
            data: [
                {
                    name: "IT",
                    description: "Departamento de tecnología"
                },
                {
                    name: "HR",
                    description: "Departamento de recursos humanos"
                },
                {
                    name: "Finance",
                    description: "Departamento de finanzas"
                },
                {
                    name: "Sales",
                    description: "Departamento de ventas"
                },
                {
                    name: "Marketing",
                    description: "Departamento de marketing"
                }
            ]
        });

        await prisma.resourceType.createMany({
            data: [
                {
                    name: "File",
                    description: "png"
                },
                {
                    name: "File",
                    description: "jpg"
                },
                {
                    name: "File",
                    description: "jpeg"
                },
                {
                    name: "File",
                    description: "pdf"
                },
                {
                    name: "External",
                    description: "url"
                }
            ]
        });

        await prisma.insignia.createMany({
            data: [
                {
                    name: "Primer Curso",
                    description: "Insignia por completar el primer curso"
                },
                {
                    name: "Velocidad de Aprendizaje",
                    description: "Insignia por completar un curso en tiempo récord"
                },
                {
                    name: "Aprendiz Constante",
                    description: "Insignia por completar 5 cursos"
                },
                {
                    name: "Maestro del Conocimiento",
                    description: "Insignia por completar 10 cursos"
                },
                {
                    name: "Experto en la Materia",
                    description: "Insignia por completar 20 cursos"
                },
                {
                    name: "Maratón de Aprendizaje",
                    description: "Insignia por completar 3 cursos en un solo día"
                },
                {
                    name: "Madrugador",
                    description: "Insignia por completar un curso antes de las 6 AM"
                },
                {
                    name: "Noctámbulo",
                    description: "Insignia por completar un curso después de las 11 PM"
                },
                {
                    name: "Desafío Aceptado",
                    description: "Insignia por completar un curso avanzado"
                },
                {
                    name: "Certificado en Mano",
                    description: "Insignia por obtener una certificación de un curso"
                },
                {
                    name: "Coleccionista de Insignias",
                    description: "Insignia por obtener 10 insignias diferentes"
                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding catalogs");
    }
}

try {
    fakeCatalogs();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding catalogs");
}
