import { z } from "zod";

export const externalResourceSchema = z.object({
    name: z
        .string()
        .min(3, { message: "El nombre del recurso debe tener al menos 3 caracteres" })
        .max(32, { message: "El nombre del recurso debe tener como máximo 32 caracteres" }),
    description: z
        .string()
        .min(16, { message: "La descripción del recurso debe tener al menos 16 caracteres" })
        .max(128, { message: "La descripción del recurso debe tener como máximo 128 caracteres" }),
    url: z
        .string()
        .nonempty({ message: "La URL del recurso no puede estar vacía" })
        .max(128, { message: "La URL del recurso debe tener como máximo 128 caracteres" }),
});
