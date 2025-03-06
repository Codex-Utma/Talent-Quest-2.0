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
