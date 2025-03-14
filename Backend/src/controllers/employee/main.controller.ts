import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const getDashboardInfo = async (req: Request, res: Response) => {
    try {
        const currentUser: User = req.body.user;

        const activeCourses = await prisma.progress.count({
            where: {
                userId: currentUser.id,
                isFinished: false
            }
        });

        const finishedCourses = await prisma.progress.count({
            where: {
                userId: currentUser.id,
                isFinished: true
            }
        });

        const courses = await prisma.progress.findMany({
            where: {
                userId: currentUser.id
            },
            select: {
                Course: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                percentage: true,
            }
        });

        const response = {
            activeCourses,
            finishedCourses,
            courses
        }

        return returnResponse(res, 200, "Información del dashboard", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    getDashboardInfo
}
