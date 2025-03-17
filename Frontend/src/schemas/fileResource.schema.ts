import { z } from "zod";

export const fileResourceSchema = z.object({
    name: z
        .string()
        .min(3, { message: "El nombre del recurso debe tener al menos 3 caracteres" })
        .max(32, { message: "El nombre del recurso debe tener como máximo 32 caracteres" }),
    description: z
        .string()
        .min(16, { message: "La descripción del recurso debe tener al menos 16 caracteres" })
        .max(128, { message: "La descripción del recurso debe tener como máximo 128 caracteres" }),
    file: z
        .custom<File>((file) => file instanceof File, { message: "Debes seleccionar un archivo válido" }),
});
