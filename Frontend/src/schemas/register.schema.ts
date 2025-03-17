import { z } from "zod";

const registerSchema = z.object({
    id: z
        .string(),
    name: z
        .string()
        .min(2, { message: "El nombre debe tener al menos 4 caracteres" }),
    lastName: z
        .string()
        .min(2, { message: "El apellido debe tener al menos 8 caracteres" }),
    email: z
        .string()
        .email({ message: "Correo electrónico inválido" }),
    password: z
        .string()
        .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    confirmPassword: z
        .string()
        .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    departmentId: z
        .number()
        .min(1, { message: "Seleccione un departamento" }),
    userTypeId: z
        .number()
        .min(1, { message: "Seleccione un tipo de usuario" }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
});

export default registerSchema;
