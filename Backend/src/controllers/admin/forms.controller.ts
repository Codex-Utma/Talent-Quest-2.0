import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const getRegisterFormData = async (req: Request, res: Response) => {
    try {
        const userTypes = await prisma.userType.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        const departments = await prisma.department.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        return returnResponse(res, 200, "Datos obtenidos correctamente", { userTypes, departments });
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

export {
    getRegisterFormData
}
