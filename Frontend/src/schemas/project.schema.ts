import { z } from "zod";

export const projectSchema = z.object({
    name: z
        .string()
        .min(1, "El nombre del proyecto es requerido")
        .max(32, "El nombre del proyecto no puede exceder los 32 caracteres"),
    description: z
        .string()
        .min(16, "La descripción del proyecto debe tener al menos 16 caracteres")
        .max(128, "La descripción del proyecto no puede exceder los 128 caracteres"),
    courses: z
        .array(z.number())
        .nonempty("Debe seleccionar al menos un curso")
});
