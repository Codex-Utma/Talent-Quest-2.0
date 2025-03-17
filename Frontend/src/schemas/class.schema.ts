import { z } from "zod";

export const classSchema = z.object({
  name: z
    .string()
    .min(4, {message: "El nombre de la clase debe tener al menos 4 caracteres"})
    .max(32, {message: "El nombre de la clase debe tener como máximo 32 caracteres"}),
  description: z
    .string()
    .min(16, {message: "La descripción de la clase debe tener al menos 16 caracteres"})
    .max(128, {message: "La descripción de la clase debe tener como máximo 128 caracteres"}),
});
