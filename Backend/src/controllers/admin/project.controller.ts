import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const createProject = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return returnResponse(res, 400, "Faltan campos por completar");
        }

        const project = await prisma.project.create({
            data: {
                name,
                description
            }
        });

        return returnResponse(res, 201, "Proyecto creado", project);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createProject
}
