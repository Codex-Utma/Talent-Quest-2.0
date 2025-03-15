import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const getClasses = async (req: Request, res: Response) => {
    try {
        const { moduleId } = req.params;

        if (!moduleId) {
            return returnResponse(res, 400, "El ID del módulo es requerido");
        }

        const currentModule = await prisma.module.findUnique({
            where: {
                id: Number(moduleId)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        if (!currentModule) {
            return returnResponse(res, 404, "Módulo no encontrado");
        }

        const classes = await prisma.class.findMany({
            where: {
                moduleId: Number(moduleId)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        const response = {
            module: {
                ...currentModule,
                classes
            }
        }

        return returnResponse(res, 200, "Clases obtenidas exitosamente", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    getClasses
}
