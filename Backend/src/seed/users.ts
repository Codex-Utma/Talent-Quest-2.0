import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeUsers() {
    try {
        await prisma.user.createMany({
            data: [
                {
                    id: 'UTM22030587',
                    name: "Gerardo",
                    lastName: "Orduña",
                    email: "gerardo.orduna@example.com",
                    departmentId: 1,
                    userTypeId: 1,
                    password: "$2a$12$Kyfw0OrJ9PIsNBa2L2wtw.o5Lhs5xKpWikgImAR8N4EGDFhoJRDT2"
                },
                {
                    id: 'UTM22030588',
                    name: "Carlos",
                    lastName: "Galindo",
                    email: "carlos.galindo@example.com",
                    departmentId: 2,
                    userTypeId: 2,
                    password: "$2a$12$cTVMZ8y1leZZkWCtnNlqgOTFa1dpBzkP.MdkICSmJt2jxWQM1hrkm"
                },
                {
                    id: 'UTM22030589',
                    name: "Sofia",
                    lastName: "Campos",
                    email: "sofia.campos@example.com",
                    departmentId: 3,
                    userTypeId: 2,
                    password: "$2a$12$HPilPXSLs/OMbyocc1ZY9.tFF6nQ35Il5PTHWDzssk/k9wWOWkgqu"
                },
                {
                    id: 'UTM22030590',
                    name: "Maricruz",
                    lastName: "Torres",
                    email: "maricruz.torres@example.com",
                    departmentId: 4,
                    userTypeId: 2,
                    password: "$2a$12$03w5lPf2wGcry0s0mkRf7uNqSElG.0Nag3n9zy0lofBYMEcgJ4l/G"
                },
                {
                    id: 'UTM22030591',
                    name: "Lorena",
                    lastName: "Ortiz",
                    email: "lorena.ortiz@example.com",
                    departmentId: 5,
                    userTypeId: 2,
                    password: "$2a$12$wBZdc0MPnVXGz0SSaUV5/etnegFD77CLMwqiZYQMfZBPipamfvlo2"
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
