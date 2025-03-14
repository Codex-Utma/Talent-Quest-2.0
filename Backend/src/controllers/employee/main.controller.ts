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

const getKardexData = async (req: Request, res: Response) => {
    try {
        const currentUser: User = req.body.user;

        const insignias = await prisma.userInsignia.findMany({
            where: {
                userId: currentUser.id
            },
            select: {
                Insignia: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        const projects = await prisma.projectAssigned.findMany({
            where: {
                AND: [
                    {
                        userId: currentUser.id
                    },
                    {
                        Project: {
                            isFinished: true
                        }
                    }
                ]
            },
            select: {
                Project: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        const certifications = await prisma.certificationUser.findMany({
            where: {
                userId: currentUser.id
            },
            select: {
                Certification: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        createdAt: true
                    }
                }
            }
        });

        const response = {
            insignias,
            projects,
            certifications,
            currentUser
        }

        return returnResponse(res, 200, "Información del kardex", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    getDashboardInfo,
    getKardexData
}
