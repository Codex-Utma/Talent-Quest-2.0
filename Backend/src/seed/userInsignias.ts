import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fakeInsigniasToUsers() {
    try {
        await prisma.userInsignia.createMany({
            data: [
                {
                    userId: 'UTM22030588',
                    insigniaId: 1
                },
                {
                    userId: 'UTM22030588',
                    insigniaId: 2
                },
                {
                    userId: 'UTM22030588',
                    insigniaId: 10
                },
                {
                    userId: 'UTM22030589',
                    insigniaId: 1
                },
                {
                    userId: 'UTM22030589',
                    insigniaId: 2
                },
                {
                    userId: 'UTM22030589',
                    insigniaId: 3
                },
                {
                    userId: 'UTM22030590',
                    insigniaId: 1
                },
                {
                    userId: 'UTM22030590',
                    insigniaId: 8
                },
                {
                    userId: 'UTM22030590',
                    insigniaId: 9
                },
                {
                    userId: 'UTM22030591',
                    insigniaId: 1
                },
                {
                    userId: 'UTM22030591',
                    insigniaId: 2
                },
                {
                    userId: 'UTM22030591',
                    insigniaId: 1
                },
                {
                    userId: 'UTM22030591',
                    insigniaId: 2
                },
                {
                    userId: 'UTM22030591',
                    insigniaId: 7
                }
            ]
        })
    } catch (error) {
        console.log(error);
        throw new Error("Error seeding catalogs");
    }
}

try {
    fakeInsigniasToUsers();
} catch (error) {
    console.log(error);
    throw new Error("Error seeding insignias to users");
}
