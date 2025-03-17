import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

import returnResponse from "../utils/auto/httpResponse";
import generateJWT from "../utils/helpers/generateJWT";

const prisma = new PrismaClient();

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return returnResponse(res, 400, "Todos los campos son obligatorios");
        }

        const user = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                password: true,
                id: true,
                name: true,
                lastName: true,
                UserType: {
                    select: {
                        name: true
                    }
                },
                Department: {
                    select: {
                        name: true
                    }
                }
            }
        })

        if (user === null) {
            return returnResponse(res, 404, "El usuario no existe");
        }

        const userType: string = user.UserType.name.toLowerCase();

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return returnResponse(res, 401, "Contraseña incorrecta");
        }

        const token = generateJWT(user.id, user.name, user.lastName, userType);

        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
        if (!JWT_SECRET_KEY) {
            res.status(500).json({ message: 'SECRET_KEY is not defined' });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;

        res.cookie('auth-token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            expires: new Date(Date.now() * 1000 + 60 * 60 * 12)
        });

        return returnResponse(res, 200, "Usuario logueado correctamente", decoded);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('auth-token');
        return returnResponse(res, 200, "Usuario deslogueado correctamente");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { id, name, lastName, email, password, userTypeId, departmentId } = req.body;

        if (!id || !name || !lastName || !email || !password || !userTypeId || !departmentId) {
            return returnResponse(res, 400, "Todos los campos son obligatorios");
        }

        const userType = await prisma.userType.findFirst({
            where: {
                id: Number(userTypeId)
            }
        });

        if (!userType) {
            return returnResponse(res, 404, "El tipo de usuario no existe");
        }

        const department = await prisma.department.findFirst({
            where: {
                id: Number(departmentId)
            }
        });

        if (!department) {
            return returnResponse(res, 404, "El departamento no existe");
        }

        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        id
                    },
                    {
                        email
                    }
                ]
            }
        });

        if (user) {
            return returnResponse(res, 409, "El usuario ya existe");
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await prisma.user.create({
            data: {
                id,
                name,
                lastName,
                email,
                password: hashedPassword,
                userTypeId: Number(userTypeId),
                departmentId: Number(departmentId)
            }
        });

        return returnResponse(res, 201, "Usuario registrado correctamente");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    login,
    logout,
    register
}
