import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeUsers() {
    try {
        await prisma.user.createMany({
            data: [
                {
                    id: 1,
                    name: "Admin",
                    lastName: "Admin",
                    email: "admin@example.com",
                    departmentId: 1,
                    userTypeId: 1,
                    password: "$2a$12$Kyfw0OrJ9PIsNBa2L2wtw.o5Lhs5xKpWikgImAR8N4EGDFhoJRDT2"
                },
                {
                    id: 2,
                    name: "Employee",
                    lastName: "Employee",
                    email: "employee@example.com",
                    departmentId: 2,
                    userTypeId: 2,
                    password: "$2a$12$cTVMZ8y1leZZkWCtnNlqgOTFa1dpBzkP.MdkICSmJt2jxWQM1hrkm"
                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding catalogs");
    }
}

try {
    fakeUsers();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding catalogs");
}
